import React from 'react'
import { FormControl } from 'react-bootstrap'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import styled, { css } from 'styled-components'
import { $DCprimaryColor, $secondaryWithAlpha } from '../../styleGuide'

const TypeAHead = (props) => {
  const {
    handleSearch,
    isLoading,
    data,
    labelKey,
    placeholder,
    onChange,
    isClearOnSelection,
    value,
    invalid,
    onSelectedOption,
    size,
    ...rest
  } = props

  const filterBy = () => true
  const [options, setOptions] = React.useState(data)
  const ref: any = React.useRef()
  React.useEffect(() => {
    setOptions(data)
  }, [data])

  return (
    <AsyncTypeahead
      positionFixed={true}
      flip={true}
      renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
        <CustomInput
          size={props.size}
          invalid={invalid.toString()}
          {...inputProps}
          ref={(input) => {
            inputRef(input)
            referenceElementRef(input)
          }}
        />
      )}
      id='async-pagination-example'
      autoComplete='off'
      style={{ overflow: 'visible' }}
      filterBy={filterBy}
      ref={ref}
      labelKey={labelKey || 'first_name'}
      isLoading={isLoading}
      onSearch={handleSearch}
      defaultInputValue={value}
      options={options}
      placeholder={props.placeholder}
      renderMenuItemChildren={props.formatter}
      onChange={(d) => {
        props.onChange(d)
        onSelectedOption(d)
        if (isClearOnSelection) {
          if (ref && ref.current) {
            ref?.current?.clear()
          }
        }
      }}
      {...rest}
    />
  )
}
const CustomInput = styled(FormControl)<{ props }>`
  /* border: 0.0625rem solid #d2d4e4; */
  border: none;
  color: #43476b;
  appearance: none;
  background-clip: padding-box;
  border-radius: 0.375rem;
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  padding: ${(props) =>
    props.size === 'sm' ? '2px 0.5rem' : '0.5625rem 1.125rem !important'};
  width: 100%;
  line-height: 1.5rem;
  ${(props) =>
    props.showsearchicon === 0 &&
    css`
      padding-left: 35px !important;
    `}
  background-color: #ffffff !important;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  /* border: 1px solid #dee2e6 !important; */
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
    box-shadow: 0 0 0 1px ${$DCprimaryColor} !important;
  }
  ${(props) =>
    props.invalid === 'true' &&
    css`
      color: red;
      &:focus {
        color: red;
      }
    `}
`

export default TypeAHead
