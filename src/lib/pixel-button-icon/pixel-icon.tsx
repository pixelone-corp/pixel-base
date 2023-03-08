import styled from "styled-components";

import React from "react";
import { $primaryColor } from "../styleGuide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTractor } from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
export interface PixelIconProps {
  className?: string
  fontSize?: string
  color?: string
  icon: any
  showTooltip?: boolean
  tooltip?: string
  onClick?: () => void
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
  padding?: string
  margin?: string
}


export const PixelIcon = React.forwardRef<
  HTMLButtonElement,
  PixelIconProps>
  ((props, ref) => {
    const {
      className,
      fontSize = "16px",
      color,
      icon = faTractor,
      showTooltip = false,
      tooltip = 'ToolTip',
      tooltipPlacement = 'top',
      onClick = () => { },
      ...rest
    } = props;
    return (
      <React.Fragment>
        {showTooltip ? (
          <OverlayTrigger
            placement={tooltipPlacement}
            overlay={<Tooltip id={`tooltip-${tooltipPlacement}`}>{tooltip}</Tooltip>}
          ><span> <ActionIcon icon={icon} color={color} fontSize={fontSize} onClick={() =>
            onClick()
          } ref={ref} {...rest} /></span>

          </OverlayTrigger>
        ) : (
          <ActionIcon icon={icon} color={color} fontSize={fontSize} onClick={() =>
            onClick()
          } ref={ref} {...rest} />
        )}
      </React.Fragment>
    )
  })

const ActionIcon = styled(FontAwesomeIcon) <Pick<
  PixelIconProps,
  | 'color'
  | 'fontSize'
  | 'padding'
  | 'margin'
>>`
  color: ${(props) => props.color || $primaryColor};
  font-size: ${(props) => props.fontSize || '14px'};
  cursor: pointer;
  padding: ${(props) => props.padding || '0px'};
  margin: ${(props) => props.margin || '0px'};
`
export default PixelIcon;

