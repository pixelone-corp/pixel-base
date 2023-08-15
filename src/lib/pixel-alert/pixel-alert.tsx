import React from 'react'
import Alert, { AlertProps } from 'react-bootstrap/Alert'
import PixelDiv from '../pixel-div/pixel-div'
import styled from 'styled-components'
export interface PixelAlertProps {
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | string
  children: React.ReactNode,
  style?: React.CSSProperties 
}

export const PixelAlert = React.forwardRef<HTMLDivElement, PixelAlertProps>(
  (props , ref) => {
    const { variant, children, style} = props
    
    return (
      <>
     
          <StyledAlert
            ref={ref}
            variant={variant}
            style={style}
          >
            {children}
          </StyledAlert>
        
      </>
    )
  }
)

export default PixelAlert

const StyledAlert = styled(Alert)`
  display:  ${(props) => props.style}
`;