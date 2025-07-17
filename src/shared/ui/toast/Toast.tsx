import { useEffect, useState } from 'react'
import './Toast.scss'

export type ToastType = 'info' | 'success' | 'warning' | 'error'

export interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose?: () => void
  closable?: boolean
}

export const Toast = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  closable = true
}: ToastProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    if (!duration) {
      return
    }
    const timer = setTimeout(() => {
      setVisible(false)
      if (onClose) {
        setTimeout(() => onClose(), 300)
      }
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const handleClose = () => {
    setVisible(false)
    if (onClose) {
      setTimeout(() => onClose(), 300)
    }
  }

  const getToastClass = () => {
    return `toast toast--${type} ${visible ? 'toast--enter' : 'toast--exit'}`
  }

  return (
    <div className={getToastClass()}>
      <span className='toast__message'>{message}</span>
      {closable && (
        <button
          type='button'
          onClick={handleClose}
          className='toast__close-button'
        >
          ×
        </button>
      )}
    </div>
  )
}
