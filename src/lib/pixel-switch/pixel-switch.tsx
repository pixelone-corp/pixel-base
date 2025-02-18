import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { $primaryColor } from '../styleGuide'
import check from './assets/check.svg'
import disablecheck from './assets/disableCheck.svg'
import cross from './assets/cross.svg'
import disablecross from './assets/disableCross.svg'

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  name: string
  endLabel?: string
  size?: any
}

const StyledPixelSwitch = styled.div`
  ${(props: SwitchProps) =>
    props.size === 'sm' &&
    css`
      padding: 5px !important;
      border-radius: 5px !important;
    `}
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px #cbced2 solid;
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  input {
    &:checked {
      + {
        label {
          background: #21005d;
          &:hover {
            background: ${$primaryColor};
          }
          &:after {
            background: #ffffff;
            content: '';
            left: 34px;
            transform: translateX(-100%);
            background-image: url(${check});
          }
        }
      }
    }
  }
  &.disable {
    pointer-events: none;
    label {
      background: #e7eaeb;
      border: 1px solid #617275;
      &:hover {
        background: #e7eaeb !important;
      }
      &:after {
        top: 1px;
        background: #9eacae;
        background-image: url(${disablecross});
      }
    }
    input {
      &:checked {
        + label {
          background: #e7eaeb;
          &:after {
            left: calc(100% - 1px);
            background: #9eacae;
            background-image: url(${disablecheck}) !important;
            background-repeat: no-repeat !important;
            background-size: 10px !important;
            background-position: center center !important;
          }
        }
      }
    }
  }
  &.large {
    label {
      width: 44px;
      height: 24px;
      &:hover {
        background: ${$primaryColor};
      }
      &:after {
        /* left: calc(100% - 2px); */
        width: 20px;
        height: 20px;
      }
    }
    input {
      &:checked {
        + label {
          &:after {
            left: calc(100% - 2px);
            background-image: url(${check});
          }
          &.disablee {
            &:after {
              left: calc(100% - 1px);
              background-size: 14px !important;
            }
          }
        }
      }
    }
  }
  label {
    cursor: pointer;
    width: 36px;
    height: 20px;
    background: #6750a4;
    display: block;
    border-radius: 12px;
    position: relative;
    &:hover {
      background: ${$primaryColor};
    }
    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      background: #ffffff;
      border-radius: 90px;
      transition: 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-image: url(${cross});
      background-repeat: no-repeat !important;
      background-size: 10px !important;
      background-position: center center !important;
    }
    &:active {
      &:after {
        width: 30px;
      }
    }
  }
`

const StyledLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #171717;
  margin-right: 5px;
`

export const PixelSwitch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    { className, label, endLabel = false, disabled = false, size, ...rest },
    ref
  ) => {
    const id = `check_${Math.random()}`
    return (
      <StyledPixelSwitch
        size={size}
        name={rest.name}
        className={`${className} ${disabled === true && 'disable'}`}
      >
        <StyledLabel>{label}</StyledLabel>
        <input type='checkbox' {...rest} id={id} ref={ref} />
        <label
          className={`${className} ${disabled === true && 'disablee'}`}
          htmlFor={id}
        ></label>
        {endLabel && <StyledLabel>{endLabel}</StyledLabel>}
      </StyledPixelSwitch>
    )
  }
)
export default PixelSwitch
