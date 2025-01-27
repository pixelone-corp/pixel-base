import React from 'react'
import styled from 'styled-components'

export interface DcDivProps {
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
  border?: string
  borderRadious?: string
  boxShadow?: string
  hoverStyle?: React.CSSProperties
  onClick?: () => void
  ref?: React.Ref<HTMLDivElement>
  after?: React.ReactNode
  before?: React.ReactNode
  //add animation
  transition?: string
  transform?: string
  animation?: string
  animationDuration?: string
  animationDelay?: string
  animationIterationCount?: string
  animationDirection?: string
  animationFillMode?: string
  animationTimingFunction?: string
  animationPlayState?: string
  keyframes?: string
  animationName?: string
  animationDelayFunction?: string
  animationEndFunction?: string
  animationIterationFunction?: string
  animationStartFunction?: string
  animationIterationStartFunction?: string
  animationIterationEndFunction?: string
  animationIterationCancelFunction?: string
  animationCancelFunction?: string
  overflow?: string
  zIndex?: number
  cursor?: string
  display?: string
  opacity?: number
  visibility?: string
  transformOrigin?: string
  transformStyle?: string
  perspective?: string
  perspectiveOrigin?: string
  backfaceVisibility?: string
  color?: string
}
export const DcDiv = React.forwardRef<HTMLDivElement, DcDivProps>(
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
    DcDivProps,
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
    | 'hoverStyle'
    | 'border'
    | 'borderRadious'
    | 'boxShadow'
    | 'after'
    | 'before'
    //add animation
    | 'transition'
    | 'transform'
    | 'animation'
    | 'animationDuration'
    | 'animationDelay'
    | 'animationIterationCount'
    | 'animationDirection'
    | 'animationFillMode'
    | 'animationTimingFunction'
    | 'animationPlayState'
    | 'animationName'
    | 'overflow'
    | 'zIndex'
    | 'cursor'
    | 'display'
    | 'opacity'
    | 'visibility'
    | 'transformOrigin'
    | 'transformStyle'
    | 'perspective'
    | 'perspectiveOrigin'
    | 'backfaceVisibility'
    | 'color'
  >
>`
  display: block;
  color: ${(props) => props.color};
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
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadious};
  box-shadow: ${(props) => props.boxShadow};
  :hover {
    ${(props) => props.hoverStyle}
  }
  :after {
    content: ${(props) => props.after};
  }
  :before {
    content: ${(props) => props.before};
  }

  //add animation
  transition: ${(props) => props.transition};
  transform: ${(props) => props.transform};
  animation: ${(props) => props.animation};
  animation-duration: ${(props) => props.animationDuration};
  animation-delay: ${(props) => props.animationDelay};
  animation-iteration-count: ${(props) => props.animationIterationCount};
  animation-direction: ${(props) => props.animationDirection};
  animation-fill-mode: ${(props) => props.animationFillMode};
  animation-timing-function: ${(props) => props.animationTimingFunction};
  animation-play-state: ${(props) => props.animationPlayState};
  animation-name: ${(props) => props.animationName};

  //add overflow
  overflow: ${(props) => props.overflow};
  z-index: ${(props) => props.zIndex};
  cursor: ${(props) => props.cursor};
  display: ${(props) => props.display};
  opacity: ${(props) => props.opacity};
  visibility: ${(props) => props.visibility};
  transform-origin: ${(props) => props.transformOrigin};
  transform-style: ${(props) => props.transformStyle};
  perspective: ${(props) => props.perspective};
  perspective-origin: ${(props) => props.perspectiveOrigin};
  backface-visibility: ${(props) => props.backfaceVisibility};
`

export default DcDiv
