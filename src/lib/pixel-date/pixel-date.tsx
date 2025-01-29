import React from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import PixelText from '../pixel-text/pixel-text'
import PixelDiv from '../pixel-div/pixel-div'
import { Placement } from 'react-bootstrap/esm/types'
export interface PixelDateProps {
  className: string
  value: string
  format?: string
  size?: string
  style?: React.CSSProperties
  popoverPlacement?: Placement
  showFullDatePopover?: boolean
  color?: string
}
const StyledDate = styled.span<{ dashed; color: string }>`
  ${(props: PixelDateProps) =>
    props.size &&
    css`
      font-size: ${props.size} !important;
    `}
  border-bottom: ${(props) => (props.dashed ? '1px dashed' : '')};
  cursor: ${(props) => (props.dashed ? 'pointer' : '')};
  color: ${(props) => (props.color ? props.color : '#000')};
  font-weight: 400;
  line-height: 100%;
`
export const PixelDate = React.forwardRef<HTMLDivElement, PixelDateProps>(
  (
    {
      className,
      value = new Date(),
      format,
      size,
      style,
      popoverPlacement = 'top',
      showFullDatePopover = true,
      color,
      ...rest
    },
    ref
  ) => {
    const formats = {
      pixelStandard: 'll',
      dateWithTime: 'll, h:mm:ss A'
    }
    const popoverLeft = (
      <StyledPopover id='popover-trigger-hover-focus' title='Popover'>
        <PixelText
          customColor={color ? color : '#0000'}
          copyToClipboard
          copiedText={`${new Date(value)}`}
        >
          {`${new Date(value)}`}
        </PixelText>
      </StyledPopover>
    )
    const PixelDate = (
      <StyledDate
        dashed={showFullDatePopover}
        className={className}
        color={color}
        style={style}
        size={size}
      >
        {moment(value).format(formats[format] || 'DD/MM/YYYY')}
      </StyledDate>
    )

    return (
      <PixelDiv>
        {showFullDatePopover ? (
          <OverlayTrigger
            trigger={['click', 'focus']}
            rootClose
            placement={popoverPlacement}
            overlay={popoverLeft}
          >
            {PixelDate}
          </OverlayTrigger>
        ) : (
          PixelDate
        )}
      </PixelDiv>
    )
  }
)
export default PixelDate
const StyledPopover = styled(Popover)`
  padding: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 3px 10px;
`
