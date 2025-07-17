import type { SVGProps } from 'react'

export const EyeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg fill='none' height='1em' viewBox='0 0 20 20' width='1em' {...props}>
    <path
      d='M1 10s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
    />
    <circle
      cx='10'
      cy='10'
      fill='none'
      r='3'
      stroke='currentColor'
      strokeWidth='2'
    />
    <line stroke='currentColor' strokeWidth='2' x1='3' x2='17' y1='3' y2='17' />
  </svg>
)
