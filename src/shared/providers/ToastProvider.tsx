import React, { createContext, useCallback, useState } from 'react'

import type { ToastProps } from '../ui/toast/Toast'

import { Toast } from '../ui/toast/Toast'
import './Toast.scss'

interface ToastContextProps {
  showToast: (toast: Omit<ToastProps, 'onClose'>) => void
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
)

let toastId = 0

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Array<{ id: number } & ToastProps>>([])

  const removeToast = useCallback((id: number) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(
    (toast: Omit<ToastProps, 'onClose'>) => {
      const id = ++toastId
      setToasts((toasts) => [...toasts, { ...toast, id }])
      if (toast.duration !== 0) {
        setTimeout(() => removeToast(id), toast.duration ?? 3000)
      }
    },
    [removeToast]
  )

  return (
    <ToastContext value={{ showToast }}>
      {children}
      <div className='toast-provider'>
        {toasts.map(({ id, ...toast }) => (
          <Toast key={id} {...toast} onClose={() => removeToast(id)} />
        ))}
      </div>
    </ToastContext>
  )
}
