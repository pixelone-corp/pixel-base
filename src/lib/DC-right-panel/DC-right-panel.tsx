import React from 'react'
import DCFlexBox from '../DC-flex-box/DC-flex-box'
export interface DCRightPanelProps {
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
}
export const DCRightPanel = React.forwardRef<HTMLDivElement, DCRightPanelProps>(
  (props, ref) => {
    return (
      <React.Fragment>
        <DCFlexBox
          flexDirection={props.flexDirection}
          flexWrap={props.flexWrap}
          justifyContent={props.justifyContent}
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
          ref={ref}
        >
          {props.children}
        </DCFlexBox>
      </React.Fragment>
    )
  }
)

export default DCRightPanel
