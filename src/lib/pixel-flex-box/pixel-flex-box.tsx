import React from 'react'
import styled from 'styled-components'

export interface PixelFlexBoxProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | string
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | string
  justifyContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | string
  alignItems?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'
  | string
  alignContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch'
  | string
  gap?: string
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
}
export const PixelFlexBox = React.forwardRef<HTMLDivElement, PixelFlexBoxProps>(
  (props, ref) => {
    return (
      <React.Fragment>
        <FlexBoxContainer {...props} ref={ref}>
          {props.children}
        </FlexBoxContainer>
      </React.Fragment>
    )
  }
)

const FlexBoxContainer = styled.div<
  Pick<
    PixelFlexBoxProps,
    | 'flexDirection'
    | 'flexWrap'
    | 'justifyContent'
    | 'alignItems'
    | 'alignContent'
  >
  >`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  align-content: ${(props) => props.alignContent || 'stretch'};
  gap: ${(props) => props.gap || '0px'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`

export default PixelFlexBox
