import React from 'react'
import styled, { css } from 'styled-components'
import { BrowserView, MobileView } from 'react-device-detect'

export interface DcTopBarProps {
  className: string
  children: any
  isMobile: boolean
  ref: React.Ref<HTMLDivElement>
  //add more props
  padding?: string
  margin?: string
  style?: React.CSSProperties
  id?: string
  border?: string
  borderRadious?: string
  boxShadow?: string
  hoverStyle?: React.CSSProperties
  //add animation
  transition?: string
  transform?: string
  animation?: string
  animationDuration?: string

  //add more props
  width?: string
  height?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  backgroundColor?: string
  after?: React.ReactNode
  before?: React.ReactNode
  //more props
  cursor?: string
  display?: string
  opacity?: number
  visibility?: string

  //add more props
  //add more props

  fontSize?: string
  fontWeight?: string
  color?: string
  textAlignment?: string
}

const StyledDCTopBar = styled.div<DcTopBarProps>`
  width: 100%;
  height: 60px;
  display: flex;
  font-size: 875rem;
  background-color: #fff;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: stretch;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e8e7ec;
  box-shadow: 0 1px 0 rgba(232, 231, 236, 0.5);
  justify-content: space-between;
  min-height: 3.75rem;
  padding: 0.5rem;
  z-index: 1024;

  //add more props
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadious};
  box-shadow: ${(props) => props.boxShadow};
  :hover {
    ${(props) => css(props.hoverStyle as any)}
  }
  //add animation
  transition: ${(props) => props.transition};
  transform: ${(props) => props.transform};
  animation: ${(props) => props.animation};
  //add more props
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  background-color: ${(props) => props.backgroundColor};
  :after {
    content: ${(props) => (props.after ? `"${props.after}"` : '""')};
  }
  :before {
    content: ${(props) => (props.before ? `"${props.before}"` : '""')};
  }
  //more props
  cursor: ${(props) => props.cursor};
  display: ${(props) => props.display};
  opacity: ${(props) => props.opacity};
  visibility: ${(props) => props.visibility};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlignment};
`

export const DcTopBar = React.forwardRef<HTMLDivElement, DcTopBarProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <React.Fragment>
        <BrowserView>
          <StyledDCTopBar ref={ref} className={className} {...rest}>
            {children}
          </StyledDCTopBar>
        </BrowserView>
        <MobileView>
          <StyledDCTopBar ref={ref} className={className} {...rest} isMobile>
            {children}
          </StyledDCTopBar>
        </MobileView>
      </React.Fragment>
    )
  }
)
export default DcTopBar
