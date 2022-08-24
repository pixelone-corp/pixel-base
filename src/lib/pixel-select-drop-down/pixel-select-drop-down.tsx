import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { NavItem } from 'react-bootstrap'
export interface DropDownProps extends InputHTMLAttributes<HTMLDivElement> {
  className?: string
  options?: OptionsData[]
  error?: string
  isgrouped?: boolean
  groupOptionData?: any
  placeholder?: string
  onChange: any
  required?: any
  isShowLabel?: boolean
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
      error = '',
      groupOptionData = {},
      isgrouped = false,
      placeholder = '',
      value = '',
      required = false,
      isShowLabel = true,

      ...rest
    },
    ref
  ) => {
    const [isOptionsOpen, setIsOptionsOpen] = React.useState(false)
    const [filterText, setFilterText] = React.useState('')
    const [position, setPosition] = React.useState({})
    const [showLabel, setShowLabel] = React.useState<any>(false)
    const toggleOptions = () => {
      setIsOptionsOpen(!isOptionsOpen)
      handleMouseMove()
    }
    React.useEffect(() => {
      const Value = getValue(options, value, isgrouped)
      if (Value) {
        setShowLabel(true)
      } else if (Value === '' || Value === null || Value === undefined) {
        setShowLabel(false)
      }
    }, [getValue(options, value, isgrouped)])

    const toggleRef = React.useRef(null)
    const inputRef = React.useRef(null)

    const groupData = filterGroupedData(groupOptionData, filterText)

    const handleClickOutside = (e: any) => {
      if (toggleRef?.current?.contains(e.target)) {
        return
      }
      setIsOptionsOpen(false)
    }
    const getValues = async () => {
      return new Promise((resolve) => {
        resolve(value)
      })
    }

    React.useEffect(() => {
      const parent = toggleRef.current?.closest('form')
      if (parent) {
        parent.addEventListener('submit', async (e) => {
          const val = toggleRef.current.getAttribute('data-value')

          if (`${val}`.length === 0) {
            e.preventDefault()
            // e.stopPropagation()
            parent.reportValidity()
          }
        })
      }

      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [value])
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
      <Mainconatiner>
        <HiddenInput
          type='text'
          ref={inputRef}
          value={value}
          required={required}
          onChange={() => {}}
        />
        {isShowLabel && (
          <StyledLabel className={showLabel ? 'showLabell' : 'testing'}>
            {placeholder}
          </StyledLabel>
        )}
        <DropDown
          ref={toggleRef}
          {...rest}
          className={className}
          data-value={value}
        >
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
                          {groupData[key].map((option, index) => {
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
                                key={index}
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
                    {filterData(options, filterText)?.map((option, index) => {
                      return (
                        <Option
                          key={index}
                          className={option.value === value ? 'selected' : ''}
                          value={option.value}
                          disabled={option.disabled}
                          onClick={() => {
                            rest.onChange &&
                              rest.onChange({
                                target: {
                                  value: option.value,
                                  options: [{ text: option.label }],
                                  label: option.label,
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
        {error !== '' && <Error>{error}</Error>}
      </Mainconatiner>
    )
  }
)
const Mainconatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`
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
const Error = styled.span`
  font-size: 90%;
  color: rgb(255 0 0 / 64%);
`
const HiddenInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
`

const StyledLabel = styled.div`
  &.showLabell {
    background: linear-gradient(180deg, #fff 52%, transparent 48%);
    top: -8px;
    opacity: 1;
    left: 13px;
    z-index: 1;
  }
  font-weight: 400;
  opacity: 0;
  color: #737373;
  position: absolute;
  width: auto;
  top: -10px;
  left: '15px';
  font-size: 11px;
  transition: all 0.2s ease-in-out;
  border-radius: 4px !important;
`
export default PixelDropDown
