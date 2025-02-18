import React from 'react'
import styled from 'styled-components'

export interface DcFlexBoxProps {
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
  border?: string
  borderRadius?: string
  boxShadow?: string
  cursor?: string
  display?: string
  opacity?: string
  visibility?: string
  transformOrigin?: string
  transformStyle?: string
  perspective?: string
  perspectiveOrigin?: string
  backfaceVisibility?: string
  transform?: string
  transition?: string
  animation?: string
  zIndex?: string
  style?: React.CSSProperties
}
export const DCFlexBox = React.forwardRef<HTMLDivElement, DcFlexBoxProps>(
  (props, ref) => {
    return (
      <React.Fragment>
        <FlexBoxContainer style={props?.style} {...props} ref={ref}>
          {props.children}
        </FlexBoxContainer>
      </React.Fragment>
    )
  }
)

const FlexBoxContainer = styled.div<
  Pick<
    DcFlexBoxProps,
    | 'flexDirection'
    | 'flexWrap'
    | 'justifyContent'
    | 'alignItems'
    | 'alignContent'
    | 'gap'
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
    | 'border'
    | 'boxShadow'
    | 'borderRadius'
    | 'cursor'
    | 'display'
    | 'opacity'
    | 'visibility'
    | 'transformOrigin'
    | 'transformStyle'
    | 'perspective'
    | 'perspectiveOrigin'
    | 'backfaceVisibility'
    | 'transform'
    | 'transition'
    | 'animation'
    | 'zIndex'
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
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  cursor: ${(props) => props.cursor};
  display: ${(props) => props.display};
  opacity: ${(props) => props.opacity};
  visibility: ${(props) => props.visibility};
  transform-origin: ${(props) => props.transformOrigin};
  transform-style: ${(props) => props.transformStyle};
  perspective: ${(props) => props.perspective};
  perspective-origin: ${(props) => props.perspectiveOrigin};
  backface-visibility: ${(props) => props.backfaceVisibility};
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
  animation: ${(props) => props.animation};
  //more props
  z-index: ${(props) => props.zIndex};
`

export default DCFlexBox
