import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { $DCprimaryColor } from '../styleGuide'
import check from './assets/check.svg'
import disablecheck from './assets/disableCheck.svg'
import disablecross from './assets/disableCross.svg'
import DCFlexBox from '../DC-flex-box/DC-flex-box'

export interface DCSwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  name: string
  endLabel?: string
  size?: any
  value?: boolean
  disabled?: boolean
}

const StyledDCSwitch = styled.div<{
  value: boolean
  size: any
  disabled: boolean
}>`
  ${(props) =>
    props.size === 'sm' &&
    css`
      padding: 1px !important;
      border-radius: 1px !important;
    `}
  background-color:${(props) =>
    props.value == false
      ? '#fff'
      : props.disabled
      ? '#E7EAEB'
      : $DCprimaryColor} !important;
  width: ${(props) =>
    props.size == 'lg'
      ? '48px'
      : props.size == 'sm'
      ? '32px'
      : '40px'} !important;
  height: ${(props) =>
    props.size == 'lg'
      ? '24px'
      : props.size == 'sm'
      ? '16px '
      : '20px'} !important;
  padding: 1px;
  border-radius: 2.5rem !important;
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
          background: ${$DCprimaryColor};
          &:hover {
            background: ${$DCprimaryColor};
          }
          &:after {
            background: #ffffff;
            content: '';
            left: ${(props) =>
              props.size == 'lg'
                ? '42px'
                : props.size == 'sm'
                ? '27px '
                : '34px'} !important;
            transform: translateX(-100%);
          }
        }
      }
    }
  }
  &.disable {
    pointer-events: none;
    label {
      background: #e7eaeb !important;
      /* border: 1px solid #617275; */
      &:hover {
        background: #e7eaeb !important;
      }
      &:after {
        top: calc(100% - 90%) !important;
        background: #9eacae;
        background-image: url(${disablecross});
      }
    }
    input {
      &:checked {
        + label {
          background: ${$DCprimaryColor};
          &:after {
            left: calc(100% - 5%) !important;
            /* background: #9eacae; */
            top: calc(100% - 90%) !important;
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
      width: 40px;
      height: 20px;
      &:hover {
        background: ${$DCprimaryColor};
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
            /* background-image: url(${check}); */
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
    width: ${(props) =>
      props.size == 'lg'
        ? '48px'
        : props.size == 'sm'
        ? '32px'
        : '36px'} !important;
    height: ${(props) =>
      props.size == 'lg'
        ? '22px'
        : props.size == 'sm'
        ? '14px '
        : '16px'} !important;
    width: 36px;
    height: 16px;
    background: #ffffff;
    display: block;
    border-radius: 12px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: ${(props) =>
        props.size == 'lg'
          ? '3px'
          : props.size == 'sm'
          ? '2px'
          : '2px'} !important;

      width: ${(props) =>
        props.size == 'lg'
          ? '16px'
          : props.size == 'sm'
          ? '10px'
          : '12px'} !important;
      height: ${(props) =>
        props.size == 'lg'
          ? '16px'
          : props.size == 'sm'
          ? '10px'
          : '12px'} !important;
      background: #d2d4e4;
      left: 2px;
      border-radius: 90px;
      transition: 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
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

const StyledLabel = styled.span<{ size }>`
  font-size: 12px;
  font-weight: 500;
  color: #3c3f56;
  margin-right: 5px;
  font-size: ${(props) =>
    props.size == 'lg'
      ? '1.125rem'
      : props.size == 'sm'
      ? '0..875rem'
      : '1rem'};
  line-height: 1.375rem;
  padding-left: 0.75rem;
`

export const DCSwitch = React.forwardRef<HTMLInputElement, DCSwitchProps>(
  (
    {
      className,
      label,
      value,
      endLabel = false,
      disabled = false,
      size,
      onChange,
      ...rest
    },
    ref
  ) => {
    const id = `check_${Math.random()}`
    return (
      <DCFlexBox alignItems='center'>
        <StyledDCSwitch
          value={value}
          disabled={disabled}
          size={size}
          className={`${className} ${disabled === true && 'disable'}`}
        >
          <input
            type='checkbox'
            checked={value}
            onChange={onChange}
            {...rest}
            id={id}
            ref={ref}
          />
          <label
            className={`${className} ${disabled === true && 'disablee'}`}
            htmlFor={id}
          ></label>
          {endLabel && <StyledLabel size={size}>{endLabel}</StyledLabel>}
        </StyledDCSwitch>
        {label && <StyledLabel size={size}>{label}</StyledLabel>}
      </DCFlexBox>
    )
  }
)
export default DCSwitch
