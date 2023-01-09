import React from 'react'
import { FormControl } from 'react-bootstrap'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import styled, { css } from 'styled-components'
import { $secondaryWithAlpha } from '../../styleGuide'

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
const CustomInput = styled(FormControl)`
  ${(props) =>
    props.showsearchicon === 0 &&
    css`
      padding-left: 35px !important;
    `}
  background-color: #f7f7f7 !important;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  border: 1px solid #dee2e6 !important;
  &:focus {
    box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha('0.15')} !important;
    border: 1px solid #dee2e6 !important;
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
