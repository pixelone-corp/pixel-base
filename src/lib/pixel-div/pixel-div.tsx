import React from 'react'
import styled from 'styled-components'

export interface PixelDivProps {
  className?: string
  width?: string
  height?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  children?: React.ReactNode
  backgroundColor?: string
  padding?: string
  margin?: string
  style?: React.CSSProperties
  id?: string
  onClick?: () => void
}
export const PixelDiv = React.forwardRef<HTMLDivElement, PixelDivProps>(
  (props, ref) => {
    return (
      <React.Fragment>
        <DivContainer {...props} ref={ref}>
          {props.children}
        </DivContainer>
      </React.Fragment>
    )
  }
)

const DivContainer = styled.div<
  Pick<
    PixelDivProps,
    | 'width'
    | 'height'
    | 'position'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'backgroundColor'
    | 'padding'
    | 'margin'


  >
  >`
  display: block;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`

export default PixelDiv
