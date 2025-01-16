import React from 'react'
import styled from 'styled-components'

export interface DCDivProps {
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
}
export const DCDiv = React.forwardRef<HTMLDivElement, DCDivProps>(
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
    DCDivProps,
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
`

export default DCDiv
