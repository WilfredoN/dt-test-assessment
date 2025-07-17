import React, { useState } from 'react'
import type { InputHTMLAttributes, ChangeEvent } from 'react'

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
        name='input'
        type={inputType}
        value={value}
        onChange={handleChange}
        disabled={props.disabled}
        className='input__field'
        {...props}
      />
      {isPassword && (
        <button
          type='button'
          tabIndex={-1}
          onClick={handleTogglePassword}
          className='input__button input__button--password'
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      )}
      {clearable && (
        <button
          type='button'
          tabIndex={-1}
          onClick={handleClear}
          className='input__button input__button--clear'
        >
          ×
        </button>
      )}
    </div>
  )
}
