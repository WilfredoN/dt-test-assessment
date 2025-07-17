import { useEffect, useState } from 'react'

import './Toast.scss'

export type ToastType = 'info' | 'success' | 'warning' | 'error'

export interface ToastProps {
  closable?: boolean
  duration?: number
  message: string
  onClose?: () => void
  type?: ToastType
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
          className='toast__close-button'
          type='button'
          onClick={handleClose}
        >
          ×
        </button>
      )}
    </div>
  )
}
