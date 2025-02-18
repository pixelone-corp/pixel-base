// Li.tsx
import React from 'react'
import styled, { css, StyledComponentPropsWithRef } from 'styled-components'

interface LiProps {
  /** Text content for the list item */
  children: React.ReactNode
  /** Additional class names for custom styling */
  className?: string
  /** Click handler for the list item */
  onClick?: () => void
  /** Determines if the item is active */
  isActive?: boolean
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
  //add more props
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
  textDecoration?: string
  listStyleType?: string
  fontSize?: string
}

const DcLi: React.FC<LiProps> = ({
  children,
  className,
  onClick,
  isActive = false,
  ...props
}) => {
  return (
    <StyledDcLi
      {...props}
      className={className}
      onClick={onClick}
      isActive={isActive}
    >
      {children}
    </StyledDcLi>
  )
}

const StyledDcLi = styled.li<
  StyledComponentPropsWithRef<'li'> & {
    isActive?: boolean
    textDecoration?: string
    listStyleType?: string
    fontSize?: string
    fontWeight?: string
    transition?: string
    transform?: string
    animation?: string
    overflow?: string
    zIndex?: number
    cursor?: string
    display?: string
    opacity?: number
    visibility?: string
    width?: string
    height?: string
    position?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
    backgroundColor?: string
    padding?: string
    margin?: string
    border?: string
    borderRadious?: string
    boxShadow?: string
    hoverStyle?: React.CSSProperties
    after?: React.ReactNode
    before?: React.ReactNode
  }
>`
  padding: 8px 24px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? ' #9b82fb' : '#f8f8f9')};
  //text-decoration props
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : 'none'};
  list-style: ${(props) => props.listStyleType || 'none'};
  font-size: ${(props) => props.fontSize || '0.813rem'};
  font-weight: ${(props) => props.fontWeight || '400'};
  opacity: ${(props) => props.opacity || 0.9};
  transition: background-color 0.2s, color 0.2s;
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
    ${(props) => props.hoverStyle && css({ ...props.hoverStyle })}
  }
  :after {
    content: ${(props) => (props.after ? `"${props.after}"` : '""')};
  }
  :before {
    content: ${(props) => (props.before ? `"${props.before}"` : '""')};
  }
  //add animation
  transition: ${(props) => props.transition};
  transform: ${(props) => props.transform};
  animation: ${(props) => props.animation};
  //add more props
  overflow: ${(props) => props.overflow};
  z-index: ${(props) => props.zIndex};
  cursor: ${(props) => props.cursor};
  display: ${(props) => props.display};
  opacity: ${(props) => props.opacity};
  visibility: ${(props) => props.visibility};
`
export default DcLi
