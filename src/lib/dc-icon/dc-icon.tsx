import styled, { css } from 'styled-components'

import React from 'react'
import { $DCprimaryColor, $primaryColor } from '../styleGuide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
export interface DcIconProps {
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
  style?: React.CSSProperties
  children?: any
  hoverStyle?: React.CSSProperties
  cursor?: string
  //add more props
  //add more props
  height?: string
  width?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  backgroundColor?: string
  border?: string
  borderRadious?: string
  opacity?: number
  boxShadow?: string
}

export const DcIcon = React.forwardRef<HTMLButtonElement, DcIconProps>(
  (props, ref) => {
    const {
      className,
      fontSize = '16px',
      color,
      icon,
      showTooltip = false,
      tooltip = 'ToolTip',
      tooltipPlacement = 'top',
      onClick = () => {},
      //all other props
      hoverStyle,
      cursor,
      width,
      height,
      position,
      top,
      bottom,
      left,
      right,
      backgroundColor,
      border,
      borderRadious,
      boxShadow,
      opacity,

      ...rest
    } = props
    return (
      <React.Fragment>
        {showTooltip ? (
          <OverlayTrigger
            placement={tooltipPlacement}
            overlay={
              <Tooltip id={`tooltip-${tooltipPlacement}`}>{tooltip}</Tooltip>
            }
          >
            <span>
              {' '}
              <span ref={ref}>
                <ActionIcon
                  className={className}
                  icon={icon}
                  color={color}
                  width={width}
                  fontSize={fontSize}
                  onClick={() => onClick()}
                  {...rest}
                />
              </span>
            </span>
          </OverlayTrigger>
        ) : (
          <span ref={ref}>
            <ActionIcon
              className={className}
              icon={icon}
              color={color}
              fontSize={fontSize}
              onClick={() => onClick()}
              {...rest}
            />
          </span>
        )}
      </React.Fragment>
    )
  }
)

const ActionIcon = styled(FontAwesomeIcon)<
  Pick<
    DcIconProps,
    | 'color'
    | 'fontSize'
    | 'padding'
    | 'margin'
    | 'className'
    | 'style'
    | 'hoverStyle'
    | 'cursor'
    | 'width'
    | 'height'
    | 'position'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'backgroundColor'
    | 'border'
    | 'borderRadious'
    | 'boxShadow'
    | 'opacity'
  >
>`
  color: ${(props) => (props.color ? props.color : $DCprimaryColor)};
  font-size: ${(props) => props.fontSize || '14px'};
  cursor: pointer;
  padding: ${(props) => props.padding || '0px'};
  margin: ${(props) => props.margin || '0px'};
  &.animation {
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  &:hover {
    ${(props) => props.hoverStyle && css(props.hoverStyle as any)}
  }
  ${(props) => props.style && css(props.style as any)}
  ${(props) => props.cursor && `cursor: ${props.cursor};`}
  //add more props
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => props.height || 'auto'};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadious};
  box-shadow: ${(props) => props.boxShadow};
  opacity: ${(props) => props.opacity};
`
export default DcIcon
