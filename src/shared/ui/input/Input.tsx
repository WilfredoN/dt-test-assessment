import type { ChangeEvent, InputHTMLAttributes } from 'react'

import React, { useState } from 'react'

import { Eye, EyeOff } from '../icons'
import './Input.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean
}

export const Input = ({
  type = 'text',
  clearable = false,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState(props.value ?? '')

  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type

  const handleTogglePassword = () => setShowPassword((prevValue) => !prevValue)

  const handleClear = () => {
    setValue('')
    if (props.onChange) {
      const event = {
        target: { value: '' },
        currentTarget: { value: '' }
      } as ChangeEvent<HTMLInputElement>
      props.onChange(event)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    props.onChange?.(e)
  }

  return (
    <div className='input'>
      <input
        className='input__field'
        disabled={props.disabled}
        name='input'
        type={inputType}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {isPassword && (
        <button
          className='input__button input__button--password'
          tabIndex={-1}
          type='button'
          onClick={handleTogglePassword}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      )}
      {clearable && (
        <button
          className='input__button input__button--clear'
          tabIndex={-1}
          type='button'
          onClick={handleClear}
        >
          ×
        </button>
      )}
    </div>
  )
}
