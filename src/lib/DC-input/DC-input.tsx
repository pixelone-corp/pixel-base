import { $secondaryWithAlpha } from '../styleGuide'

import cn from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import DCDatepicker from './components/DCDatepicker'
import Input from './components/Input'
import PasswordInput from './components/passwordInput'
import TypeAHead from './components/TypeAHead'

export interface DcProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  inputClassName?: string
  label?: string
  name: string
  error?: string
  type?: string
  shadow?: boolean
  as?: string
  isTextarea?: boolean
  variant?: 'normal' | 'solid' | 'outline' | 'line'
  dimension?: 'small' | 'medium' | 'big'
  onChange?: any
  value?: any
  parentStyle?: any
  isMakingInput?: boolean
  startDate?: any
  endDate?: any
  labelKey?: any
  noPadding?: boolean
  children?: any
  invalid?: boolean
  showsearchicon?: any
  placeholder?: string
  isShowLabel?: boolean
  customLabel?: string
  isClearOnSelection?: boolean
  inputSize?: 'sm' | 'lg'
  onSelectedOption?: () => {}
}

const variantClasses = {
  normal:
    'bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent',
  outline: 'border border-border-base rounded focus:border-accent',
  line: 'ps-0 border-b border-border-base rounded-none focus:border-accent'
}

const PixelInputContainer = styled.div<{ as: string }>`
  position: relative;
  width: 100%;
  &.overFlowCustom {
    overflow: visible !important;
    & > * {
      overflow: visible !important;
      & > * {
        input {
          ${(props: DcProps) =>
            props.invalid === true &&
            css`
              color: red !important;
            `}
        }
      }
    }
  }
  & > * {
    overflow: visible !important;
  }
  textarea {
    resize: none;
    height: 150px;
    min-width: 100%;
    outline: none;
    &::placeholder {
      font-size: 16px;
      padding: 2px;
    }
  }
  .sc-jSMfEi {
    min-height: 38px !important;
    border-radius: 0.25rem !important;
    overflow: hidden;
    &:focus {
      box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha('0.15')} !important;
    }
    &:focus-within {
      box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha('0.15')} !important;
    }
  }
  .eoOphk {
    &:focus {
      background: #00aeef;
    }
  }
  .fdjKYC {
    min-height: 38px !important;
    border-radius: 0.25rem !important;
    overflow: hidden;
    &:focus {
      box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha('0.15')} !important;
    }
  }
  .kvwrSX {
    min-height: 38px !important;
    border-radius: 0.25rem !important;
    overflow: hidden;
    box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha('0.15')} !important;
  }
  label {
    border-radius: 4px !important;
    border: 1px solid #dee2e6 !important;
    & + div {
      z-index: 99999;
    }
  }
  .covbmQ {
    top: 13px !important;
  }
`

const InputError = styled.span`
  font-size: 90%;
  color: rgb(255 0 0 / 64%);
`
const sizeClasses = {
  small: 'text-sm h-10',
  medium: 'h-12',
  big: 'h-14'
}

export const DcInput = React.forwardRef<HTMLInputElement, DcProps>(
  (
    {
      className,
      label,
      name,
      error,
      children,
      variant = 'normal',
      dimension = 'big',
      shadow = false,
      disabled = false,
      isTextarea = false,
      as = 'text',
      type = 'text',
      onChange,
      value,
      inputClassName,
      isMakingInput = false,
      parentStyle = {},
      startDate,
      endDate,
      labelKey,
      noPadding = false,
      invalid = false,
      showsearchicon = 1,
      placeholder = '',
      isShowLabel = true,
      customLabel = '',
      isClearOnSelection = false,
      onSelectedOption = () => {},
      inputSize,
      ...rest
    },
    ref
  ) => {
    const [showDatePicker, setShowDatePicker] = React.useState<any>(
      as === 'dateRange' ? null : false
    )

    if (as === 'textarea') {
      rest['as'] = as
    }
    return (
      <PixelInputContainer
        invalid={invalid}
        className={'overFlowCustom'}
        style={parentStyle}
      >
        <React.Fragment>
          {as === 'datePicker' ? (
            <React.Fragment>
              <DCDatepicker
                ref={ref}
                value={value}
                className={cn(
                  ' px-4 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
                  shadow && 'focus:shadow',
                  variantClasses[variant],
                  sizeClasses[dimension],
                  disabled && 'bg-gray-100 cursor-not-allowed',
                  inputClassName
                )}
                disabled={disabled}
                aria-invalid={error ? 'true' : 'false'}
                rest={rest}
                showResetDate={false}
                showClose={false}
                label={label}
                placeholder={placeholder}
                inputId={name}
                onChange={onChange}
                onDateChange={(data) =>
                  onChange(
                    { target: { value: data.date } },
                    setShowDatePicker(false)
                  )
                }
                onFocusChange={(focusedInput) =>
                  setShowDatePicker(focusedInput)
                }
                showDatepicker={showDatePicker}
              />
            </React.Fragment>
          ) : as === 'typeahead' ? (
            <TypeAHead
              onSelectedOption={onSelectedOption}
              isClearOnSelection={isClearOnSelection}
              customLabel={customLabel}
              isShowLabel={isShowLabel}
              placeholder={placeholder}
              id={name}
              name={name}
              type={type}
              ref={ref}
              labelKey={labelKey}
              className={cn(
                'flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
                shadow && 'focus:shadow',
                variantClasses[variant],
                sizeClasses[dimension],
                disabled && 'bg-gray-100 cursor-not-allowed',
                inputClassName
              )}
              disabled={disabled}
              value={value}
              spellCheck='false'
              onChange={onChange}
              invalid={invalid}
              aria-invalid={error ? 'true' : 'false'}
              {...rest}
            />
          ) : as === 'password' ? (
            <PasswordInput
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              id={name}
              name={name}
              type={type}
              ref={ref}
              spellCheck='false'
              aria-invalid={error ? 'true' : 'false'}
              rest={rest}
              showsearchicon={showsearchicon}
              className={className}
              disabled={disabled}
            />
          ) : (
            <Input
              showsearchicon={showsearchicon}
              size={inputSize}
              placeholder={placeholder}
              id={name}
              name={name}
              type={type}
              ref={ref}
              className={
                noPadding
                  ? cn(
                      'px-1 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
                      shadow && 'focus:shadow',
                      variantClasses[variant],
                      sizeClasses[dimension],
                      disabled && 'bg-gray-100 cursor-not-allowed',
                      inputClassName
                    )
                  : cn(
                      'px-4 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
                      shadow && 'focus:shadow',
                      variantClasses[variant],
                      sizeClasses[dimension],
                      disabled && 'bg-gray-100 cursor-not-allowed',
                      inputClassName
                    )
              }
              disabled={disabled}
              value={value}
              spellCheck='false'
              onChange={onChange}
              aria-invalid={error ? 'true' : 'false'}
              rest={rest}
            />
          )}
        </React.Fragment>

        {error && (
          <InputError className='my-2 text-xs text-red-500'>{error}</InputError>
        )}
      </PixelInputContainer>
    )
  }
)

export default DcInput
