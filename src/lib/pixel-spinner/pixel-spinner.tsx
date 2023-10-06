import React from 'react'
import styled, { keyframes } from 'styled-components'

export interface PixelSpinnerProps {
  isShow?: boolean
  ref?: React.Ref<HTMLDivElement>
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledPixelSpinner = styled.div<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: 230;
  background-color: #ffffff67;
`

const Spinner = styled.span`
  width: 20px;
  height: 20px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid #db01f9;
  animation: ${spin} 1s linear infinite;
`

export const PixelSpinner = React.forwardRef<
  HTMLButtonElement,
  PixelSpinnerProps
>((props, ref) => {
  const { isShow } = props

  return (
    <StyledPixelSpinner isShow={isShow} ref={ref}>
      <Spinner />
    </StyledPixelSpinner>
  )
})

export default PixelSpinner
