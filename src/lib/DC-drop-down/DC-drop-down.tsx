import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
export interface DcDropDownProps extends InputHTMLAttributes<HTMLDivElement> {
  className?: string
  options?: OptionsData[]
  error?: string
  isgrouped?: boolean
  groupOptionData?: any
  placeholder?: string
  onChange: any
  required?: any
  isShowLabel?: boolean
  disabled?: boolean
  customLabel: string
}
interface OptionsData {
  value: string
  label: string
  disabled?: boolean
}
import {
  $DCprimaryActiveColor,
  $DCprimaryColor,
  $DCprimaryShadowColor
} from '../styleGuide'
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
      option?.label?.toLowerCase()?.includes(filterText?.toLowerCase())
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

export const DcDropDown = React.forwardRef<HTMLDivElement, DcDropDownProps>(
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
      disabled = false,
      customLabel = '',
      onChange = () => {},
      ...rest
    },
    ref
  ) => {
    const [isOptionsOpen, setIsOptionsOpen] = React.useState(false)
    const [filterText, setFilterText] = React.useState('')
    const [position, setPosition] = React.useState({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0
    })
    const [dropdownPosition, setDropdownPosition] = React.useState({
      top: '',
      left: '-5000px',
      width: ''
    })
    const [showLabel, setShowLabel] = React.useState<any>(false)
    const toggleOptions = () => {
      setIsOptionsOpen(!isOptionsOpen)
      handleMouseMove()
    }
    React.useEffect(() => {
      const Value = getValue(options, value, isgrouped)

      if (placeholder === Value) {
        setShowLabel(false)
      } else {
        if (Value || customLabel !== '') {
          setShowLabel(true)
        } else if (Value === '' || Value === null || Value === undefined) {
          setShowLabel(false)
        }
      }
    }, [getValue(options, value, isgrouped)])

    const toggleRef = React.useRef(null)
    const inputRef = React.useRef(null)
    const dropdownRef = React.useRef(null)

    const requriedHeight = () => {
      const windowheight = window.innerHeight
      const dropdownHeight = dropdownRef?.current?.offsetHeight
      const dropdownToTop = position?.top
      const neededHeight = windowheight - dropdownToTop - dropdownHeight
      return neededHeight
    }
    const groupData = filterGroupedData(groupOptionData, filterText)
    React.useEffect(() => {
      const height = requriedHeight()
      const topPosition =
        height > 0
          ? `${position.top + position.height}px`
          : `${position.top - dropdownRef?.current?.offsetHeight}px`
      if (isOptionsOpen) {
        setDropdownPosition({
          top: topPosition,
          left: `${position?.left === 0 ? '-500' : position?.left}px`,
          width: `${position?.width}px`
        })
      } else {
        setDropdownPosition({
          top: '',
          left: '-5000px',
          width: ''
        })
      }
    }, [position, filterText])
    const handleClickOutside = (e: any) => {
      if (toggleRef?.current?.contains(e.target)) {
        return
      }
      setIsOptionsOpen(false)
      setDropdownPosition({
        ...dropdownPosition,
        left: '-5000px'
      })
    }
    // const getValues = async () => {
    //   return new Promise((resolve) => {
    //     resolve(value)
    //   })
    // }

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
      setDropdownPosition({
        ...dropdownPosition,
        left: '-5000px'
      })
    }
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    // const truncate = (label, max) => {
    //   return label?.length > max ? label.substr(0, max - 1) + '...' : label
    // }
    return (
      <Mainconatiner>
        <HiddenInput
          type='text'
          ref={inputRef}
          value={value}
          required={required}
          onChange={() => {}}
        />
        {/* {isShowLabel && (
          <StyledLabel className={showLabel ? 'showLabell' : 'testing'}>
            {truncate(customLabel !== '' ? customLabel : placeholder, 25)}
          </StyledLabel>
        )} */}
        <DropDown
          ref={toggleRef}
          {...rest}
          className={className}
          data-value={value}
        >
          <Toggler
            disable={disabled}
            onClick={() => {
              if (disabled) {
                return
              }
              toggleOptions()
            }}
          >
            <OptionLabel
              color={isgrouped ? '#000' : showLabel ? '' : '#A1A3B5'}
            >
              {getValue(
                isgrouped ? groupOptionData : options,
                value,
                isgrouped
              ) || placeholder}
            </OptionLabel>
            {isOptionsOpen ? (
              <FontAwesomeIcon
                color='#787C9E'
                width={'10px'}
                icon={faAngleUp}
              />
            ) : (
              <FontAwesomeIcon
                color='#787C9E'
                width={'10px'}
                icon={faAngleDown}
              />
            )}
          </Toggler>
          <React.Fragment>
            {isgrouped ? (
              <React.Fragment>
                <DropDownList
                  ref={dropdownRef}
                  display={isOptionsOpen}
                  position={dropdownPosition}
                  inputPosition={requriedHeight() < 0}
                >
                  {options && options?.length > 5 && (
                    <SearchPixelInput>
                      <Search
                        placeholder='Search'
                        name='search'
                        onChange={(e) => setFilterText(e.target.value)}
                        value={filterText}
                      />
                    </SearchPixelInput>
                  )}
                  <OptionalContainer>
                    {Object.keys(groupData).map((key) => {
                      if (groupData[key].length == 0) return null

                      return (
                        <OptGroup label={key}>
                          {groupData[key].map((option, index) => {
                            return (
                              <Options
                                onClick={() => {
                                  onChange &&
                                    onChange({
                                      target: {
                                        value: option.value,
                                        options: [{ text: option.label }],
                                        selectedIndex: 0
                                      }
                                    }),
                                    setIsOptionsOpen(false)
                                  setDropdownPosition({
                                    ...dropdownPosition,
                                    left: '-5000px'
                                  })
                                }}
                                key={index}
                                value={option.value}
                                disabled={option.disabled}
                                className={
                                  option.value === value ? 'selected' : ''
                                }
                              >
                                {option.label}
                              </Options>
                            )
                          })}
                        </OptGroup>
                      )
                    })}
                  </OptionalContainer>
                </DropDownList>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <DropDownList
                  ref={dropdownRef}
                  display={isOptionsOpen}
                  position={dropdownPosition}
                  inputPosition={requriedHeight() < 0}
                >
                  {options && options?.length > 5 && (
                    <SearchPixelInput>
                      <InputContainer>
                        <Search
                          placeholder='Search'
                          name='search'
                          onChange={(e) => setFilterText(e.target.value)}
                          value={filterText}
                        />
                        {filterText?.length > 0 && (
                          <React.Fragment>
                            {filterData(options, filterText)?.length === 0 && (
                              <NoFoundError>No Data Found</NoFoundError>
                            )}
                          </React.Fragment>
                        )}
                      </InputContainer>
                    </SearchPixelInput>
                  )}

                  <OptionalContainer>
                    {options && options.length > 0 ? (
                      <React.Fragment>
                        {' '}
                        {filterData(options, filterText)?.map(
                          (option, index) => {
                            return (
                              <Option
                                key={index}
                                className={
                                  option.value === value ? 'selected' : ''
                                }
                                value={option.value}
                                disabled={option.disabled}
                                onClick={() => {
                                  onChange &&
                                    onChange({
                                      target: {
                                        value: option.value,
                                        options: [{ text: option.label }],
                                        label: option.label,
                                        selectedIndex: 0
                                      }
                                    })
                                  setIsOptionsOpen(false)
                                  setDropdownPosition({
                                    ...dropdownPosition,
                                    left: '-5000px'
                                  })
                                }}
                              >
                                {option.label}
                              </Option>
                            )
                          }
                        )}
                      </React.Fragment>
                    ) : (
                      <Option>No data available</Option>
                    )}
                  </OptionalContainer>
                </DropDownList>
              </React.Fragment>
            )}
          </React.Fragment>
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
const Toggler = styled.button<{ disable: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus {
    border: 1px solid ${$DCprimaryColor};
    box-shadow: 0 0 5px 0 ${$DCprimaryShadowColor};
  }
  background-color: #fff;
  border: 1px solid #d2d4e4;
  border-radius: 0.375rem;
  display: inline-flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
  min-height: 2.75rem;
  overflow: hidden;
  padding: 0.5625rem 18px;
  width: 100%;
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  background: ${(props) => (props.disable ? '#f7f7f7' : 'none')};
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
const OptionalContainer = styled.div`
  width: 100%;
  max-height: 250px;
  overflow: auto;
`
const OptionLabel = styled.div<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : 'black')};
`

const DropDownList = styled.div<{
  position?: any
  display: boolean
  inputPosition?: boolean
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.inputPosition ? 'column-reverse' : 'column'};
  opacity: ${(props) => (props.display ? 1 : 0)};
  background-color: #fff;
  width: ${(props) => props.position.width};
  position: fixed;
  top: ${(props) => props.position?.top};
  left: ${(props) => props.position?.left};
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 2px 12px -1px rgba(67, 71, 107, 0.2);
  overflow: hidden;

  will-change: visibility;
  word-break: break-all;
  z-index: 99;
`
const Option = styled.div`
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
const Options = styled.option`
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
const InputContainer = styled.div`
  position: relative;
`
const NoFoundError = styled.div`
  font-size: 11px;
  position: absolute;
  top: 21px;
  right: 6px;
  color: red;
`
const SearchPixelInput = styled.div`
  padding: 0.375rem 0.75rem;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  left: 0;
`
const Search = styled.input`
  background-color: #ffffff !important;
  width: 100%;
  border: 1px solid #dbe2e9;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  /* box-sizeing: border-box; */

  &:focus,
  &:active,
  &:focus-visible {
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

// const StyledLabel = styled.div`
//   &.showLabell {
//     background: linear-gradient(180deg, #fff 52%, transparent 48%);
//     top: -8px;
//     opacity: 1;
//     left: 13px;
//     z-index: 1;
//   }
//   font-weight: 400;
//   opacity: 0;
//   color: #737373;
//   position: absolute;
//   width: auto;
//   top: -10px;
//   left: '15px';
//   font-size: 11px;
//   transition: all 0.2s ease-in-out;
//   border-radius: 4px !important;
// `
export default DcDropDown
