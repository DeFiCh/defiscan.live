import { SVGProps } from 'react'

export function SignalCellular1 (props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path d='M21,14H2V20H7V14Z' />
      <path d='M21,4H16V20H21V4M14,9H9V20H14V9' fill='#cecece' />
    </svg>
  )
}
