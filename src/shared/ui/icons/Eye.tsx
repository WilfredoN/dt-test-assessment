import { type SVGProps } from 'react'

export const Eye = (props: SVGProps<SVGSVGElement>) => (
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
  </svg>
)
