import React from 'react'
import styled, { css } from 'styled-components'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { $primaryColor } from '../styleGuide'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'
import PixelIcon from '../pixel-button-icon/pixel-icon'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faPaste } from '@fortawesome/free-regular-svg-icons'
export interface DcTextProps {
  className?: string | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  multiLine?: boolean
  charLimit?: number
  showToolTip?: boolean
  children?: React.ReactNode
  textSize?: string
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
  toolTipText?: string
  variant?: 'light' | 'default' | 'dark' | 'pixelPrimary'
  customColor?: string
  copyToClipboard?: boolean
  copiedText?: string
  copyTooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
  style?: React.CSSProperties
  fontSize?: string
  fontWeight?: string
  color?: string
  textAlignment?: string
  margin?: string
  padding?: string
  //add more text props
  textEllipsis?: boolean
  textOverflow?: string
  textTransform?: string
  textDecoration?: string
  letterSpacing?: string
  lineHeight?: string
  wordSpacing?: string
  whiteSpace?: string
  wordBreak?: string
  wordWrap?: string
  textAlign?: string
  textIndent?: string
  textShadow?: string
  textUnderlinePosition?: string
  textOrientation?: string
  textRendering?: string
  textJustify?: string
  textStroke?: string
  textStrokeWidth?: string
  textStrokeColor?: string
  text?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  after?: React.CSSProperties
  before?: React.CSSProperties
  hoverStyle?: React.CSSProperties
}

const StyledDCText = styled.div``
const Text = styled.div<{
  color: string
  variant: string
  textSize: string
  textAlignment: string
  fontWeight: string
}>`
  font-size: ${(props: DcTextProps) => props.textSize};
  max-width: 100%;
  width: 100%;
  text-align: ${(props: DcTextProps) => props.textAlignment};

  color: ${(props) => props.color};
  &.h1 {
    font-size: 24px !important;
    font-weight: 700;
  }
  &.h2 {
    font-size: 20px;
    font-weight: 700;
  }
  &.h3 {
    font-size: 18px;
    font-weight: 700;
  }
  &.h4 {
    font-size: 16px;
    font-weight: 700;
  }
  &.h5 {
    font-size: 14px;
    font-weight: 700;
  }
  &.h6 {
    font-size: 12px;
    font-weight: 700;
  }

  &.multiLine {
    display: inline-block;
    white-space: pre-line !important;
    word-break: normal;
  }
  ${(props: DcTextProps) =>
    props.variant === 'light' &&
    css`
      font-size: ${(props: DcTextProps) => props.textSize || '12px'};
      color: ${(props: DcTextProps) => props.customColor || '#a3a3a3'};
      &.multiLine {
        display: inline-block;
        white-space: pre-line !important;
        word-break: normal;
      }
    `}
  ${(props: DcTextProps) =>
    props.variant === 'pixelPrimary' &&
    css`
      font-size: ${(props: DcTextProps) => props.textSize || '16px'};
      color: ${(props: DcTextProps) => props.customColor || $primaryColor};
      &.multiLine {
        display: inline-block;
        white-space: pre-line !important;
        word-break: normal;
      }
    `}
    ${(props: DcTextProps) =>
    props.variant === 'dark' &&
    css`
      font-size: ${(props: DcTextProps) => props.textSize || '16px'};
      color: ${(props: DcTextProps) => props.customColor || '#000000'};
      font-weight: 700;
      &.multiLine {
        display: inline-block;
        white-space: pre-line !important;
        word-break: normal;
      }
    `}
    margin: ${(props: DcTextProps) => props.margin};
  padding: ${(props: DcTextProps) => props.padding};
  //add more text props
  text-overflow: ${(props: DcTextProps) => props.textOverflow};
  text-transform: ${(props: DcTextProps) => props.textTransform};
  text-decoration: ${(props: DcTextProps) => props.textDecoration};
  letter-spacing: ${(props: DcTextProps) => props.letterSpacing};
  line-height: ${(props: DcTextProps) => props.lineHeight};
  word-spacing: ${(props: DcTextProps) => props.wordSpacing};
  white-space: ${(props: DcTextProps) => props.whiteSpace};
  word-break: ${(props: DcTextProps) => props.wordBreak};
  word-wrap: ${(props: DcTextProps) => props.wordWrap};
  text-align: ${(props: DcTextProps) => props.textAlign};
  text-indent: ${(props: DcTextProps) => props.textIndent};
  text-shadow: ${(props: DcTextProps) => props.textShadow};
  text-underline-position: ${(props: DcTextProps) =>
    props.textUnderlinePosition};
  text-orientation: ${(props: DcTextProps) => props.textOrientation};
  text-rendering: ${(props: DcTextProps) => props.textRendering};
  text-justify: ${(props: DcTextProps) => props.textJustify};
  font-weight: ${(props: DcTextProps) => props.fontWeight};
  //add after
  &:after {
    content: ${(props: DcTextProps) => props.after};
  }
  //add before
  &:before {
    content: ${(props: DcTextProps) => props.before};
  }
  //add hover style
  &:hover {
    ${(props: DcTextProps) => props.hoverStyle};
  }

  //add storek
`
export const DcText = React.forwardRef<HTMLDivElement, DcTextProps>(
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
      copyToClipboard = false,
      copyTooltipPlacement = 'right',
      copiedText = 'copiedText',
      fontSize,
      fontWeight,
      textAlignment,
      margin,
      padding,
      ...rest
    },
    ref
  ) => {
    let characters = children ? children.toString().length : 0
    if (characters > charLimit) {
      children = children && children.toString().slice(0, charLimit) + '...'
    }
    const [copied, setCopied] = React.useState(false)
    const CopyOnclick = (text: string) => {
      navigator.clipboard.writeText(text.toString())
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }

    return (
      <StyledDCText data-tag='allowRowEvents'>
        {showToolTip ? (
          <PixelFlexBox alignItems='center' gap='5px'>
            {' '}
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
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                  padding={padding}
                  margin={margin}
                  data-tag='allowRowEvents'
                  textAlignment={textAlignment}
                  className={`${className} ${multiLine ? 'multiLine' : ''}`}
                  ref={ref}
                  {...rest}
                  color={customColor}
                  variant={variant}
                >
                  {children}
                  {copyToClipboard && children !== '' && children !== '--' && (
                    <OverlayTrigger
                      placement={copyTooltipPlacement}
                      overlay={
                        <Tooltip
                          style={{ zIndex: '9999999999' }}
                          id={`tooltip-top`}
                        >
                          {copied ? 'Copied' : 'Copy to clipboard'}
                        </Tooltip>
                      }
                    >
                      <span>
                        <PixelIcon
                          className='animation'
                          onClick={() =>
                            CopyOnclick(
                              copiedText === 'copiedText'
                                ? `${children}`
                                : copiedText
                            )
                          }
                          icon={copied ? faCheckDouble : faPaste}
                          fontSize={'12px'}
                          color={'#505050'}
                        />
                      </span>
                    </OverlayTrigger>
                  )}
                </Text>
              </div>
            </OverlayTrigger>
          </PixelFlexBox>
        ) : (
          <PixelFlexBox alignItems='center' gap='5px'>
            <Text
              data-tag='allowRowEvents'
              className={`${className} ${multiLine ? 'multiLine' : ''}`}
              ref={ref}
              {...rest}
              color={customColor}
              variant={variant}
            >
              {children}{' '}
              {copyToClipboard && children !== '' && children !== '--' && (
                <OverlayTrigger
                  placement={copyTooltipPlacement}
                  overlay={
                    <Tooltip
                      style={{ zIndex: '9999999999' }}
                      id={`tooltip-top`}
                    >
                      {copied ? 'Copied' : 'Copy to clipboard'}
                    </Tooltip>
                  }
                >
                  <span>
                    <PixelIcon
                      className='animation'
                      onClick={() =>
                        CopyOnclick(
                          copiedText === 'copiedText'
                            ? `${children}`
                            : copiedText
                        )
                      }
                      icon={copied ? faCheckDouble : faPaste}
                      fontSize={'12px'}
                      color={'#505050'}
                    />
                  </span>
                </OverlayTrigger>
              )}
            </Text>
          </PixelFlexBox>
        )}
      </StyledDCText>
    )
  }
)

export default DcText
