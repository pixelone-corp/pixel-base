import styled, { css } from 'styled-components'
import React, { ButtonHTMLAttributes } from 'react'
import {
  $DCprimaryActiveColor,
  $DCprimaryColor,
  $secondaryColor,
  $DCsecondaryColor,
  $DCsecondaryActiveColor,
  $DCSuccessColor,
  $DCWarningColor,
  $DCDangerColor,
  $DCInfoColor,
  $DCLightColor,
  $DCSuccessActiveColor,
  $DCWarningActiveColor,
  $DCDangerActiveColor,
  $DCInfoActiveColor,
  $DCLightActiveColor
} from '../styleGuide'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './index.scss'
export interface DCButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?:
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-info'
    | 'outline-warning'
    | 'outline-danger'
    | 'outline-light'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'link'
    | string
  size?: 'lg' | 'sm'
  active?: boolean
  disabled?: boolean
  margin?: string
  padding?: string
  tooltip?: string
  children?: React.ReactNode
}

const StyledPixelButton = styled(Button)`
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  margin: ${(props: DCButtonProps) => props.margin || '0px'};
  padding: ${(props: DCButtonProps) =>
    props.padding ? props.padding : '9px 18px'} !important;
  font-weight: 400;
  line-height: 1.5rem;
  border-radius: 0.375rem;
  border: 1px solid ${$DCsecondaryColor};
  color: #fff !important;

  background-color: ${$DCsecondaryColor};
  /* &:hover {
    background-color: ${$DCsecondaryActiveColor} !important;
  } */
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }

  ${(props: DCButtonProps) =>
    props.variant === 'primary' &&
    css`
      background-color: ${$DCprimaryColor} !important;
      border-color: ${$DCprimaryColor} !important;
      font-size: 0.875rem;
      padding: 9px 18px !important;
      color: #fff !important;
      &:hover,
      &:active,
      &:focus {
        background-color: ${$DCprimaryActiveColor} !important;
        border-color: ${$DCprimaryActiveColor} !important;
      }
    `}

  ${(props: DCButtonProps) =>
    props.variant === 'success' &&
    css`
      background-color: ${$DCSuccessColor} !important;
      border-color: ${$DCSuccessColor} !important;

      &:hover,
      &:active,
      &:focus {
        background-color: ${$DCSuccessActiveColor} !important;
        border-color: ${$DCSuccessActiveColor} !important;
      }
    `}

  ${(props: DCButtonProps) =>
    props.variant === 'warning' &&
    css`
      background-color: ${$DCWarningColor} !important;
      border-color: ${$DCWarningColor} !important;

      &:hover,
      &:active,
      &:focus {
        background-color: ${$DCWarningActiveColor} !important;
        border-color: ${$DCWarningActiveColor} !important;
      }
    `}
    
  ${(props: DCButtonProps) =>
    props.variant === 'danger' &&
    css`
      background-color: ${$DCDangerColor} !important;
      border-color: ${$DCDangerColor} !important;

      &:hover,
      &:active,
      &:focus {
        background-color: ${$DCDangerActiveColor} !important;
        border-color: ${$DCDangerActiveColor} !important;
      }
    `}

  ${(props: DCButtonProps) =>
    props.variant === 'info' &&
    css`
      background-color: ${$DCInfoColor} !important;
      border-color: ${$DCInfoColor} !important;

      &:hover,
      &:active,
      &:focus {
        background-color: ${$DCInfoActiveColor} !important;
        border-color: ${$DCInfoActiveColor} !important;
      }
    `}

  ${(props: DCButtonProps) =>
    props.variant === 'light' &&
    css`
      background-color: ${$DCLightColor} !important;
      border-color: ${$DCLightColor} !important;
      color: #000 !important;

      &:hover,
      &:active,
      &:focus {
        background-color: ${$DCLightActiveColor} !important;
        border-color: ${$DCLightActiveColor} !important;
      }
    `}

    ${(props: DCButtonProps) =>
    props.variant === 'link' &&
    css`
      background-color: transparent !important;
      border-color: transparent;
      text-decoration: none;
      color: ${$DCprimaryColor} !important;
      padding: ${(props: DCButtonProps) => props.padding || '0.375rem 0.75rem'};
      &:hover,
      &:hover a,
      &:active,
      &:active a,
      &:focus,
      &:focus a {
        color: ${$DCprimaryActiveColor} !important;
      }
      a {
        color: ${$DCprimaryActiveColor} !important;
      }
    `}

  ${(props: DCButtonProps) =>
    props.variant === 'outline-primary' &&
    css`
      background-color: transparent;
      border-color: ${$DCprimaryColor} !important;
      color: ${$DCprimaryColor} !important;
      outline: none;

      &:hover {
        color: white !important;
        background-color: ${$DCprimaryColor} !important;
      }
    `}
  ${(props: DCButtonProps) =>
    props.variant === 'outline-secondary' &&
    css`
      background-color: transparent;
      border-color: ${$DCsecondaryColor} !important;
      color: ${$DCsecondaryColor} !important;
      outline: none;

      &:hover {
        color: white !important;
        background-color: ${$DCsecondaryActiveColor} !important;
      }
    `}
  ${(props: DCButtonProps) =>
    props.variant === 'outline-success' &&
    css`
      background-color: transparent;
      border-color: ${$DCSuccessColor} !important;
      color: ${$DCSuccessColor} !important;
      outline: none;

      &:hover {
        color: white !important;
        background-color: ${$DCSuccessActiveColor} !important;
      }
    `}
  ${(props: DCButtonProps) =>
    props.variant === 'outline-danger' &&
    css`
      background-color: transparent;
      border-color: ${$DCDangerColor} !important;
      color: ${$DCDangerColor} !important;
      outline: none;

      &:hover {
        color: white !important;
        background-color: ${$DCDangerActiveColor} !important;
      }
    `}
  ${(props: DCButtonProps) =>
    props.variant === 'outline-warning' &&
    css`
      background-color: transparent;
      border-color: ${$DCWarningColor} !important;
      color: ${$DCWarningColor} !important;
      outline: none;

      &:hover {
        color: white !important;
        background-color: ${$DCWarningActiveColor} !important;
      }
    `}
  ${(props: DCButtonProps) =>
    props.variant === 'outline-info' &&
    css`
      background-color: transparent;
      border-color: ${$DCInfoColor} !important;
      color: ${$DCInfoColor} !important;
      outline: none;

      &:hover {
        color: white !important;
        background-color: ${$DCInfoActiveColor} !important;
      }
    `}


  

    ${(props: DCButtonProps) =>
    props.size == 'lg' &&
    css`
      /* color: ${$DCprimaryColor}; */
      padding: ${(props: DCButtonProps) =>
        props.padding || '15px 22px !important'};
      border-radius: 0.75rem !important;
    `}

    ${(props: DCButtonProps) =>
    props.active &&
    css`
      background-color: ${$DCprimaryActiveColor} !important;
      border-color: ${$DCprimaryActiveColor} !important;
    `}

    ${(props: DCButtonProps) =>
    props.size == 'sm' &&
    css`
      padding: ${(props: DCButtonProps) =>
        props.padding || '2px 12px !important'};
      border-radius: 0.25rem;
    `}

    ${(props: DCButtonProps) =>
    props.active &&
    css`
      background-color: ${$DCprimaryActiveColor} !important;
      border-color: ${$DCprimaryActiveColor} !important;
    `}
`

export const DCButton = React.forwardRef<HTMLButtonElement, DCButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'primary',
      children,
      active,
      disabled = false,
      margin = '0px',
      tooltip = false,
      ...rest
    } = props

    return (
      <React.Fragment>
        {tooltip ? (
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip id={`tooltip-${'top'}`}>{tooltip}</Tooltip>}
          >
            <StyledPixelButton
              aria-pressed={active}
              variant={variant}
              ref={ref}
              className={className}
              disabled={disabled}
              margin={margin}
              {...rest}
            >
              {children}
            </StyledPixelButton>
          </OverlayTrigger>
        ) : (
          <StyledPixelButton
            active={active}
            variant={variant}
            ref={ref}
            className={className}
            disabled={disabled}
            margin={margin}
            {...rest}
          >
            {children}
          </StyledPixelButton>
        )}
      </React.Fragment>
    )
  }
)
export default DCButton
