import React from 'react'
import styled, { keyframes } from 'styled-components'
import { $DCprimaryColor } from '../styleGuide'

export interface PixelSpinnerProps {
  isShow?: boolean
  size?: string
  ref?: React.Ref<HTMLDivElement>
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const PixelSpinner = React.forwardRef<
  HTMLButtonElement,
  PixelSpinnerProps
>((props, ref) => {
  const { isShow, size } = props

  return (
    <StyledPixelSpinner isShow={isShow} ref={ref}>
      <Spinner size={size} />
    </StyledPixelSpinner>
  )
})
const StyledPixelSpinner = styled.div<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: 230;
  background-color: rgba(46, 49, 74, 0.4);
`

const Spinner = styled.span<{ size: string }>`
  width: ${(props) => (props.size ? props.size : '40px')};
  height: ${(props) => (props.size ? props.size : '40px')};
  border: 5px solid ${$DCprimaryColor};
  border-radius: 50%;
  border-top: 5px solid transparent;
  animation: ${spin} 1s linear infinite;
`

export default PixelSpinner
