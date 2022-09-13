import { $secondaryWithAlpha } from '../styleGuide'

import { DateRangeInput } from '@datepicker-react/styled'
import cn from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import Datepicker from './components/Datepicker'
import Input from './components/Input'
import Inputmask from './components/Inputmask'
import TypeAHead from './components/TypeAHead'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
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
}

const variantClasses = {
  normal:
    'bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent',
  outline: 'border border-border-base rounded focus:border-accent',
  line: 'ps-0 border-b border-border-base rounded-none focus:border-accent'
}

const StyledLabel = styled.div<{ focus?: string; showsearchicon: any }>`
  &.showLabell {
    background: ${(props) =>
      props.focus === 'true'
        ? 'linear-gradient(180deg, #fff 70%, transparent 30%);'
        : props.focus === 'false' &&
          'linear-gradient(180deg, #fff 52%, transparent 48%);'};
    top: ${(props) =>
      props.focus === 'true' ? '-10px' : props.focus === 'false' && '-8px'};
    opacity: 1;
    z-index: 1;
  }
  font-weight: 400;
  opacity: 0;
  color: #737373;
  position: absolute;
  width: auto;
  top: -10px;
  left: ${(props) => (props.showsearchicon === 0 ? '27px' : '13px')};
  font-size: 11px;
  transition: all 0.2s ease-in-out;
  border-radius: 4px !important;
`
const PixelInputContainer = styled.div`
  position: relative;
  width: 100%;
  &.overFlowCustom {
    overflow: visible !important;
    & > * {
      overflow: visible !important;
      & > * {
        /* overflow: visible !important; */
        input {
          ${(props: Props) =>
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

export const PixelInput = React.forwardRef<HTMLInputElement, Props>(
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

      ...rest
    },
    ref
  ) => {
    const [showDatePicker, setShowDatePicker] = React.useState<any>(
      as === 'dateRange' ? null : false
    )
    const [showLabel, setShowLabel] = React.useState<any>(false)
    const [focus, setFocus] = React.useState<any>(false)
    React.useEffect(() => {
      if (value || customLabel !== '') {
        setShowLabel(true)
      } else if (value === '' || value === null || value === undefined) {
        setShowLabel(false)
      }
    }, [value])
    const truncate = (label, max) => {
      return label?.length > max ? label.substr(0, max - 1) + '...' : label
    }
    if (as === 'textarea') {
      rest['as'] = as
    }
    return (
      <PixelInputContainer
        invalid={invalid}
        className={'overFlowCustom'}
        style={parentStyle}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
      >
        {isShowLabel && (
          <StyledLabel
            focus={focus ? 'true' : 'false'}
            className={showLabel ? 'showLabell' : 'testing'}
            showsearchicon={showsearchicon}
          >
            {truncate(customLabel !== '' ? customLabel : placeholder, 25)}
          </StyledLabel>
        )}

        {isMakingInput ? (
          <Inputmask
            value={value}
            onChange={onChange}
            disabled={disabled}
            rest={rest}
            id={name}
            name={name}
            type={type}
            ref={ref}
            className={cn(
              'px-4 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
              shadow && 'focus:shadow',
              variantClasses[variant],
              sizeClasses[dimension],
              disabled && 'bg-gray-100 cursor-not-allowed',
              inputClassName
            )}
          />
        ) : (
          <React.Fragment>
            {as === 'datePicker' ? (
              <React.Fragment>
                <Datepicker
                  ref={ref}
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
                  date={value ? new Date(value) : new Date()} // Date or null
                  showDatepicker={showDatePicker}
                />
              </React.Fragment>
            ) : as === 'dateRange' ? (
              <React.Fragment>
                <ThemeProvider
                  theme={{
                    breakpoints: ['32em', '48em', '64em'],
                    reactDatepicker: {
                      dateRangeZIndex: -99999
                    }
                  }}
                ></ThemeProvider>
                <StyledDateRangePicker
                  ref={ref}
                  className={cn(
                    ' px-4 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
                    shadow && 'focus:shadow',
                    variantClasses[variant],
                    sizeClasses[dimension],
                    disabled && 'bg-gray-100 cursor-not-allowed',
                    inputClassName
                  )}
                  style={{ display: 'none' }}
                  disabled={disabled}
                  aria-invalid={error ? 'true' : 'false'}
                  {...rest}
                  showResetDate={false}
                  showSelectedDates={false}
                  showClose={false}
                  exactMinBookingDays={false}
                  rtl={false}
                  vertical={false}
                  inputId={name}
                  onDatesChange={(data: any) => {
                    onChange({
                      startDate: data.startDate,
                      endDate: data.endDate
                    })
                    setShowDatePicker(data.focusedInput)
                  }}
                  onFocusChange={(focusedInput) => {
                    setShowDatePicker(focusedInput)
                  }}
                  focusedInput={showDatePicker}
                  endDate={value.endDate}
                  startDate={value.startDate}
                />
              </React.Fragment>
            ) : as === 'typeahead' ? (
              <TypeAHead
                setFocus={setFocus}
                setShowLabel={setShowLabel}
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
            ) : (
              <Input
                showsearchicon={showsearchicon}
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
        )}

        {error && (
          <InputError className='my-2 text-xs text-red-500'>{error}</InputError>
        )}
      </PixelInputContainer>
    )
  }
)
const StyledDateRangePicker = styled(DateRangeInput)`
  .sc-dkzDqf {
    z-index: 99999;
  }
`
export default PixelInput
