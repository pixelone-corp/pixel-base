import React from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'
export interface PixelDateprops {
  className: string
  value: string
  format?: string
  size?: string
 style?: React.CSSProperties}
const Date = styled.span`
  ${(props: PixelDateprops) =>
    props.size &&
    css`
      font-size: ${props.size} !important;
    `}
  color: #000000;
  font-weight: 400;

  line-height: 100%;
`
const StyledPixelDate = styled.div``

export const PixelDate = React.forwardRef<HTMLDivElement, PixelDateprops>(
  ({ className, value, format, size,style, ...rest }, ref) => {
    return (
      <StyledPixelDate>
        <Date data-tag='allowRowEvents' className={className} style={style} size={size}>
          {moment(value).format(
            format === 'pixelStandard'
              ? 'll'
              : format === 'dateWithTime'
              ? ' ll, h:mm:ss A'
              : 'DD/MM/YYYY'
          )}
        </Date>
      </StyledPixelDate>
    )
  }
)
export default PixelDate
