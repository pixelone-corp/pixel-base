import React from 'react'
import styled, { css } from 'styled-components'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { $primaryColor } from '../styleGuide'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'
import PixelIcon from '../pixel-button-icon/pixel-icon'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faPaste } from '@fortawesome/free-regular-svg-icons'
export interface DCTextProps {
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
  color?:string
}

const StyledDCText = styled.div``
const Text = styled.div<{ color: string }>`
  font-size: ${(props: DCTextProps) => props.textSize};
  max-width: 100%;
  width: 100%;
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
  ${(props: DCTextProps) =>
    props.variant === 'light' &&
    css`
      font-size: ${(props: DCTextProps) => props.textSize || '12px'};
      color: ${(props: DCTextProps) => props.customColor || '#a3a3a3'};
      &.multiLine {
        display: inline-block;
        white-space: pre-line !important;
        word-break: normal;
      }
    `}
  ${(props: DCTextProps) =>
    props.variant === 'pixelPrimary' &&
    css`
      font-size: ${(props: DCTextProps) => props.textSize || '16px'};
      color: ${(props: DCTextProps) => props.customColor || $primaryColor};
      &.multiLine {
        display: inline-block;
        white-space: pre-line !important;
        word-break: normal;
      }
    `}
    ${(props: DCTextProps) =>
    props.variant === 'dark' &&
    css`
      font-size: ${(props: DCTextProps) => props.textSize || '16px'};
      color: ${(props: DCTextProps) => props.customColor || '#000000'};
      font-weight: 700;
      &.multiLine {
        display: inline-block;
        white-space: pre-line !important;
        word-break: normal;
      }
    `}
`
export const DCText = React.forwardRef<HTMLDivElement, DCTextProps>(
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
                  data-tag='allowRowEvents'
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

export default DCText
