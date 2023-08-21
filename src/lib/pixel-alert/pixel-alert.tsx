import React from 'react'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components'
export interface PixelAlertProps {
  className?: string
  variant?:
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | string
  children?: React.ReactNode
  style?: React.CSSProperties
  padding?: string
}

export const PixelAlert = React.forwardRef<HTMLDivElement, PixelAlertProps>(
  (props, ref) => {
    const { variant = 'primary', children = 'Pixel Alert', style, className, padding } = props
    return (
      <StyledAlert
        className={className}
        ref={ref}
        variant={variant}
        style={style}
        padding={padding}
      >
        {children}
      </StyledAlert>
    )
  }
)
const StyledAlert = styled(Alert) <{ padding: string }>`
padding: ${props => props.padding && props.padding}
`

export default PixelAlert