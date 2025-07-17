import { type SVGProps } from 'react'

export const EyeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 20 20' fill='none' {...props}>
    <path
      d='M1 10s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z'
      stroke='currentColor'
      strokeWidth='2'
      fill='none'
    />
    <circle
      cx='10'
      cy='10'
      r='3'
      stroke='currentColor'
      strokeWidth='2'
      fill='none'
    />
    <line x1='3' y1='3' x2='17' y2='17' stroke='currentColor' strokeWidth='2' />
  </svg>
)
