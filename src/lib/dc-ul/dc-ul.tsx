// DcUl.tsx
import React from 'react'
import styled from 'styled-components'

interface UlProps {
  /** Array of content for the UL */
  children: React.ReactNode
  /** Additional class names for custom styling */
  className?: string
  /** Custom styles for the UL */
  style?: React.CSSProperties
  /** Gap between items */
  gap?: string
  /** Padding for UL */
  padding?: string
  /** Margin for UL */
  margin?: string
  //add more props

  //add more props
  overflow?: string
  zIndex?: number
  cursor?: string
  display?: string
  opacity?: number
  visibility?: string
  transformOrigin?: string

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
  border?: string
  borderRadious?: string
  boxShadow?: string
  hoverStyle?: React.CSSProperties
  //add animation
  transition?: string
  transform?: string
  animation?: string

  //add more props
  fontSize?: string
  fontWeight?: string
  color?: string
  textAlignment?: string
}

const DcUl: React.FC<UlProps> = ({
  children,
  className,
  style,
  gap,
  padding,
  margin,
  ...props
}) => {
  return (
    <StyledDcUl
      {...props}
      className={className}
      style={style}
      gap={gap}
      padding={padding}
      margin={margin}
    >
      {children}
    </StyledDcUl>
  )
}

const StyledDcUl = styled.div<{
  gap?: string
  padding?: string
  margin?: string
}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '10px'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  //use props
  //use props
  overflow: ${(props) => props.overflow || 'visible'};
  z-index: ${(props) => props.zIndex || 'auto'};
  cursor: ${(props) => props.cursor || 'auto'};
  display: ${(props) => props.display || 'block'};
  opacity: ${(props) => props.opacity || '1'};
  visibility: ${(props) => props.visibility || 'visible'};
  transform-origin: ${(props) => props.transformOrigin || 'center'};
  //use props
  //use props
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  position: ${(props) => props.position || 'static'};
  top: ${(props) => props.top || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  left: ${(props) => props.left || 'auto'};
  right: ${(props) => props.right || 'auto'};
  background-color: ${(props) => props.backgroundColor || '#090127'};
  ::after {
    ${(props) => props.after || 'none'};
  }
  ::before {
    ${(props) => props.before || 'none'};
  }
  //more props
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadious || '0'};
  box-shadow: ${(props) => props.boxShadow || 'none'};
  :hover {
    ${(props) => props.hoverStyle}
  }
  //add animation
  transition: ${(props) => props.transition || 'none'};
  transform: ${(props) => props.transform || 'none'};
  animation: ${(props) => props.animation || 'none'};
  //add more props
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  color: ${(props) => props.color || '#000'};

  text-align: ${(props) => props.textAlignment || 'left'};
`

export default DcUl
