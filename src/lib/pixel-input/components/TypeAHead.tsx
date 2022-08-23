import React from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

const TypeAHead = (props) => {
  const { handleSearch, isLoading, data, labelKey, placeholder, ...rest } =
    props
  const filterBy = () => true
  const [options, setOptions] = React.useState(data)
  const ref: any = React.useRef()

  React.useEffect(() => {
    setOptions(data)
  }, [data])

  return (
    <AsyncTypeahead
      autoComplete='off'
      style={{ overflow: 'visible' }}
      filterBy={filterBy}
      id='async-example'
      ref={ref}
      labelKey={labelKey || 'first_name'}
      isLoading={isLoading}
      onSearch={handleSearch}
      defaultInputValue={props.value}
      options={options}
      placeholder={props.placeholder}
      renderMenuItemChildren={props.formatter}
      invalid={props.invalid}
      onChange={(d) => {
        props.onChange(d)
        if (ref && ref.current) {
          ref?.current?.clear()
        }
      }}
      {...rest}
    />
  )
}

export default TypeAHead
