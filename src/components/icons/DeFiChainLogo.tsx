import { SVGProps } from 'react'

export function DeFiChainLogo (props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width={156} height={72} viewBox='0 0 156 72' {...props}>
      <path
        fill='#FF00AF'
        fillRule='evenodd'
        d='M35.98 0c19.882 0 36 16.118 36 36 0 19.683-15.797 35.677-35.404 35.995L35.98 72V41.658l-4.57 4.57-.584 11.406 4.766 14.346a35.753 35.753 0 01-8.18-1.05l-.654-.168-2.306-6.934-6.536 3.278a36.409 36.409 0 01-6.608-4.915l-.496-.475 12.106-6.068.354-6.94-6.94.356-6.068 12.104a36.013 36.013 0 01-5.037-6.51l-.353-.594 3.28-6.538-6.938-2.304a36.06 36.06 0 01-1.201-8.13L0 36.387l14.348 4.766 11.406-.582L30.324 36l-4.57-4.572-11.406-.582L0 35.612c.03-2.82.404-5.553 1.05-8.18l.166-.654 6.938-2.304-3.28-6.538a36.24 36.24 0 014.915-6.609l.475-.495 6.068 12.104 6.94.356-.354-6.942-12.106-6.066a35.967 35.967 0 016.511-5.037l.593-.353 6.536 3.278 2.306-6.934A35.957 35.957 0 0134.89.035l.703-.015-4.766 14.346.584 11.406 4.57 4.57V0h-.001zM156 6v60h-8V6h8zm-16 0v8h-18v18h14v8h-14v26h-8V6h26zm-34 0v8H88v18h14v8H88v18h18v8H80V6h26zM43.98 9.164v53.672c11.554-3.45 20-14.176 20-26.836 0-12.52-8.261-23.148-19.62-26.72l-.38-.116z'
      />
    </svg>
  )
}
