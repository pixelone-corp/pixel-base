import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Placement } from 'react-bootstrap/esm/types'
import styled from 'styled-components'

export interface PixelTooltipProps {
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
  tooltipText?: string | React.ReactNode
  tooltipPlacement?: Placement
}
export const PixelTooltip = React.forwardRef<HTMLDivElement, PixelTooltipProps>(
  (props, ref) => {
    return (
      <React.Fragment>
        <OverlayTrigger
          placement={props.tooltipPlacement || 'top'}
          overlay={
            <Tooltip style={{ zIndex: '9999999999' }} id={`tooltip-top`}>
              {props.tooltipText || 'Tooltip'}
            </Tooltip>
          }
        >
          <TooltipContainer {...props} ref={ref}>
            {props.children}
          </TooltipContainer>
        </OverlayTrigger>
      </React.Fragment>
    )
  }
)

const TooltipContainer = styled.div<
  Pick<
    PixelTooltipProps,
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
cursor: pointer;
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

export default PixelTooltip
