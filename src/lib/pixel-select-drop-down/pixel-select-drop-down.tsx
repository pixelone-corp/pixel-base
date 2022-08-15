import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
export interface DropDownProps extends InputHTMLAttributes<HTMLDivElement> {
  className?: string
  options?: OptionsData[]
  error?: 'string'
  isgrouped?: boolean
  groupOptionData?: any
  placeholder?: string
  onChange: any
}
interface OptionsData {
  value: string
  label: string
  disabled?: boolean
}
const getGroupedValue = (options, value) => {
  let groupedValue = ''
  Object.keys(options).forEach((group) => {
    options[group].forEach((option) => {
      if (option.value === value) {
        groupedValue = option
      }
    })
  })
  return groupedValue
}
const getValue = (options, value, isgrouped) => {
  const filteredValue = isgrouped
    ? getGroupedValue(options, value)
    : options.find((option) => option.value == value)

  return filteredValue ? filteredValue.label : ''
}

// for search from single options
const filterData = (options, filterText) => {
  if (filterText) {
    return options.filter((option) =>
      option.label.toLowerCase().includes(filterText.toLowerCase())
    )
  }
  return options
}
// for search from grouped options
const filterGroupedData = (options, filterText) => {
  if (filterText) {
    return Object.keys(options).reduce((acc, group) => {
      acc[group] = options[group].filter((option) =>
        option.label.toLowerCase().includes(filterText.toLowerCase())
      )
      return acc
    }, {})
  }
  return options
}

export const PixelDropDown = React.forwardRef<HTMLDivElement, DropDownProps>(
  (
    {
      className,
      options = [],
      error,
      groupOptionData = {},
      isgrouped = false,
      placeholder = '',
      value = '',

      ...rest
    },
    ref
  ) => {
    const [isOptionsOpen, setIsOptionsOpen] = React.useState(false)
    const [filterText, setFilterText] = React.useState('')
    const [position, setPosition] = React.useState({})
    const toggleOptions = () => {
      setIsOptionsOpen(!isOptionsOpen)
      handleMouseMove()
    }

    const toggleRef = React.useRef(null)

    const groupData = filterGroupedData(groupOptionData, filterText)

    const handleClickOutside = (e: any) => {
      if (toggleRef?.current?.contains(e.target)) {
        return
      }
      setIsOptionsOpen(false)
    }
    React.useEffect(() => {
      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [])
    const handleMouseMove = () => {
      if (toggleRef?.current) {
        setPosition(toggleRef?.current.getBoundingClientRect())
      }
    }
    React.useEffect(() => {
      document.addEventListener('scroll', handleMouseMove, true)
      return () => {
        document.removeEventListener('scroll', handleMouseMove, true)
      }
    }, [])

    const handleScroll = () => {
      setIsOptionsOpen(false)
    }
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
      <React.Fragment>
      <DropDown ref={toggleRef} {...rest} className={className}>
        <Toggler onClick={toggleOptions}>
          <OptionLabel>
            {getValue(
              isgrouped ? groupOptionData : options,
              value,
              isgrouped
            ) || placeholder}
          </OptionLabel>
          <FontAwesomeIcon icon={faAngleDown} />
        </Toggler>
        {isOptionsOpen && (
          <React.Fragment>
            {isgrouped ? (
              <React.Fragment>
                <DropDownList position={position}>
                  <SearchPixelInput>
                    <Search
                      placeholder='Search'
                      name='search'
                      onChange={(e) => setFilterText(e.target.value)}
                      value={filterText}
                    />
                  </SearchPixelInput>
                  {Object.keys(groupData).map((key) => {
                    if (groupData[key].length == 0) return null

                    return (
                      <OptGroup label={key}>
                        {groupData[key].map((option) => {
                          return (
                            <Option
                              onClick={() => {
                                rest.onChange &&
                                  rest.onChange({
                                    target: {
                                      value: option.value,
                                      options: [{ text: option.label }],
                                      selectedIndex: 0
                                    }
                                  }),
                                  setIsOptionsOpen(false)
                              }}
                              key={option.value}
                              value={option.value}
                              disabled={option.disabled}
                              className={
                                option.value === value ? 'selected' : ''
                              }
                            >
                              {option.label}
                            </Option>
                          )
                        })}
                      </OptGroup>
                    )
                  })}
                </DropDownList>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {' '}
                <DropDownList position={position}>
                  <SearchPixelInput>
                    <Search
                      placeholder='Search'
                      name='search'
                      onChange={(e) => setFilterText(e.target.value)}
                      value={filterText}
                    />
                  </SearchPixelInput>
                  {filterData(options, filterText)?.map((option) => {
                    return (
                      <Option
                        key={option.value}
                        className={option.value === value ? 'selected' : ''}
                        value={option.value}
                        disabled={option.disabled}
                        onClick={() => {
                          rest.onChange &&
                            rest.onChange({
                              target: {
                                value: option.value,
                                options: [{ text: option.label }],
                                selectedIndex: 0
                              }
                            }),
                            setIsOptionsOpen(false)
                        }}
                      >
                        {option.label}
                      </Option>
                    )
                  })}
                </DropDownList>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </DropDown>
      {error && (
          <InputError className='my-2 text-xs text-red-500'>{error}</InputError>
        )}
      </React.Fragment>
    )
  }
)
const Toggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`
const DropDown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`
const OptionLabel = styled.div``
const DropDownList = styled.div`
  background-color: #fff;
  border: 1px solid #ced4da;
  border-top: none;
  width: ${(props) => props.position.width}px;
  min-width: 300px;
  max-height: 300px;
  overflow: auto;
  padding-top: 60px;
  position: fixed;
  top: ${(props) => props.position.top + props.position.height}px;
  left: ${(props) => props.position.left}px;
  z-index: 99;
`
const Option = styled.option`
  background-color: #ffffff;
  height: 40px;
  padding: 5px 5px 5px 25px;
  max-width: 100% !important;
  cursor: pointer;
  &:hover {
    background-color: #f0f4fa;
  }
  &.selected {
    background-color: #136acd;
    color: #ffffff;
  }
`
const OptGroup = styled.optgroup`
  width: 100%;
  border-top: 1px solid #ced4da;
  padding: 0.375rem 0.75rem;
`
const SearchPixelInput = styled.div`
  padding: 0.375rem 0.75rem;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`
const Search = styled.input`
  background-color: #ffffff; !important;
  width: 100%;
  border: 1px solid #ced4da;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  box-sizeing: border-box;

  &:focus, &:active, &:focus-visible {

    outline: none;
  }
`
const InputError = styled.span`
  font-size: 90%;
  color: rgb(255 0 0 / 64%);
`
export default PixelDropDown
