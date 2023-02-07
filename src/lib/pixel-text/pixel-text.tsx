import React from 'react'
import styled from 'styled-components'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export interface PixelTextProps {
  className?: string
  multiLine?: boolean
  charLimit?: number
  showToolTip?: boolean
  children?: React.ReactNode
  textSize?: string
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
  toolTipText?: string
}

const StyledPixelText = styled.div``
const Text = styled.div`
  font-size: ${(props: PixelTextProps) => props.textSize};
  max-width: 100%;
  width: 100%;
  &.multiLine {
    display: inline-block;
    white-space: pre-line !important;
    word-break: normal;
  }
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
      ...rest
    },
    ref
  ) => {
    let characters = children ? children.toString().length : 0
    if (characters > charLimit) {
      children = children && children.toString().slice(0, charLimit) + '...'
    }
    return (
      <StyledPixelText>
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
                className={multiLine ? 'multiLine' : ''}
                ref={ref}
                {...rest}
              >
                {children}
              </Text>
            </div>
          </OverlayTrigger>
        ) : (
          <div>
            <Text className={multiLine ? 'multiLine' : ''} ref={ref} {...rest}>
              {children}
            </Text>
          </div>
        )}
      </StyledPixelText>
    )
  }
)
export default PixelText
