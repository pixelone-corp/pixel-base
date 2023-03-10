import React from 'react'
import styled, { css } from 'styled-components'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { $primaryColor } from '../styleGuide'

export interface PixelTextProps {
  className?: string
  multiLine?: boolean
  charLimit?: number
  showToolTip?: boolean
  children?: React.ReactNode
  textSize?: string
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
  toolTipText?: string
  variant?: 'light' | 'default' | 'dark' | 'pixelPrimary'
  customColor?: string
}

const StyledPixelText = styled.div``
const Text = styled.div<{ color: string }> `
  font-size: ${(props: PixelTextProps) => props.textSize};
  max-width: 100%;
  width: 100%;
  color: ${(props) => props.color};
  &.multiLine {
    display: inline-block;
    white-space: pre-line !important;
    word-break: normal;
  }
  ${(props: PixelTextProps) =>
    props.variant === "light" &&
    css`
    font-size: ${(props: PixelTextProps) => props.textSize || "12px"};
     color: ${(props: PixelTextProps) => props.customColor || "#a3a3a3"};
     &.multiLine {
    display: inline-block;
    white-space: pre-line !important;
    word-break: normal;
  }
    `}
    ${(props: PixelTextProps) =>
    props.variant === "pixelPrimary" &&
    css`
    font-size: ${(props: PixelTextProps) => props.textSize || "16px"};
     color: ${(props: PixelTextProps) => props.customColor || $primaryColor};
     &.multiLine {
    display: inline-block;
    white-space: pre-line !important;
    word-break: normal;
  }
    `}
    ${(props: PixelTextProps) =>
    props.variant === "dark" &&
    css`
    font-size: ${(props: PixelTextProps) => props.textSize || "16px"};
     color:   ${(props: PixelTextProps) => props.customColor || "#000000"};
     font-weight: 700;
     &.multiLine {
    display: inline-block;
    white-space: pre-line !important;
    word-break: normal;
  }
    `}
`
export const PixelText = React.forwardRef<HTMLDivElement, PixelTextProps>(
  (
    {
      className,
      multiLine = false,
      charLimit = 500,
      showToolTip = false,
      tooltipPlacement = 'top',
      toolTipText = '',
      children = '',
      variant,
      customColor,
      ...rest
    },
    ref
  ) => {
    let characters = children ? children.toString().length : 0
    if (characters > charLimit) {
      children = children && children.toString().slice(0, charLimit) + '...'
    }
    return (
      <StyledPixelText data-tag='allowRowEvents'>
        {showToolTip ? (
          <OverlayTrigger
            placement={tooltipPlacement}
            overlay={
              <Tooltip style={{ zIndex: '9999999999' }} id={`tooltip-top`}>
                {toolTipText ? toolTipText : children}
              </Tooltip>
            }
          >
            <div>
              <Text
                data-tag='allowRowEvents'
                className={multiLine ? 'multiLine' : ''}
                ref={ref}
                {...rest}
                color={customColor}
                variant={variant}
              >
                {children}
              </Text>
            </div>
          </OverlayTrigger>
        ) : (
          <div>
            <Text
              data-tag='allowRowEvents'
              className={multiLine ? 'multiLine' : ''}
              ref={ref}
              {...rest}
              color={customColor}
              variant={variant}
            >
              {children}
            </Text>
          </div>
        )}
      </StyledPixelText>
    )
  }
)
export default PixelText
