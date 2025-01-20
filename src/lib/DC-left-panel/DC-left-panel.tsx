import React from 'react'
import DcFlexBox from '../dc-flex-box/dc-flex-box'
export interface DcLeftPanelProps {
  flexDirection?: string
  flexWrap?: string
  justifyContent?: string
  alignItems?: string
  alignContent?: string
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
  borderRadious?: string
  boxShadow?: string
  style?: React.CSSProperties
}
export const DcLeftPanel = React.forwardRef<HTMLDivElement, DcLeftPanelProps>(
  (props, ref) => {
    return (
      <React.Fragment>
        <DcFlexBox
          flexDirection={props.flexDirection}
          flexWrap={props.flexWrap}
          justifyContent={props.justifyContent || 'flex-end'}
          alignItems={props.alignItems || 'center'}
          alignContent={props.alignContent}
          gap={props.gap}
          width={props.width}
          height={props.height}
          position={props.position}
          top={props.top}
          bottom={props.bottom}
          left={props.left}
          right={props.right}
          backgroundColor={props.backgroundColor}
          padding={props.padding}
          margin={props.margin}
          border={props.border}
          borderRadious={props.borderRadious}
          style={props.style}
          boxShadow={props.boxShadow}
          ref={ref}
        >
          {props.children}
        </DcFlexBox>
      </React.Fragment>
    )
  }
)

export default DcLeftPanel
