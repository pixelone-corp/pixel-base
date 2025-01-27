import React from 'react'
import styled from 'styled-components'
import {
  $DCprimaryActiveColor,
  $DCprimaryColor,
  $primaryColor
} from '../styleGuide'
import { PixelIcon } from '../pixel-button-icon/pixel-icon'
import ClickOutside from 'rechat-react-click-outside'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import PixelText from '../pixel-text/pixel-text'
import DcIcon from '../dc-icon/dc-icon'
import DcDiv from '../DC-div/DC-div'

export interface DcInputTagProps {
  className?: string
  tags?: options[]
  onTagUpdate?: any
  options?: options[]
  placeholder?: string
  allowCustomTags?: boolean
  handleTagDelete?: any
  handleTagAdd?: any
  clearAll?: any
  noDataText?: string
  isAllClearable?: boolean
  isShowLabel?: boolean
  inputLabel?: string
  error?: string
}
export interface options {
  label: string
  value: string
}
const StyledPixelInputTag = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  /* background-color: #fff; */

  padding-left: 20px;
  width: 95%;
`
const TagInput = styled.input<{ width?: string }>`
  width: ${(props) => props.width && props.width};
  min-height: 2.75rem;
  border: none;
  outline: none;
  background-color: inherit;
  &.invalid {
    color: red;
  }
`

const Tags = styled.div`
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  display: flex;
  flex-direction: row;
  margin: 0px 2px;
  background: ${$DCprimaryColor};
  font-size: 12px;
  padding: 3px 10px 5px 10px;
  border-radius: 16px;
  color: white;
  font-weight: 700;
`
export const DcInputTag = React.forwardRef<HTMLDivElement, DcInputTagProps>(
  (
    {
      className,
      tags = [],
      onTagUpdate = () => {},
      options = [],
      placeholder,
      handleTagDelete = {},
      handleTagAdd = {},
      allowCustomTags = true,
      clearAll = {},
      noDataText = 'No data found',
      isAllClearable = true,
      isShowLabel = true,
      inputLabel = '',
      error = '',
      ...rest
    },
    ref
  ) => {
    const [filterText, setFilterText] = React.useState('')
    const [localTags, setLocalTags] = React.useState(tags)
    const [isOptionsOpen, setIsOptionsOpen] = React.useState(false)
    const inputTagref = React.useRef(null)
    const optionsref = React.useRef(null)
    const [invalid, setInvalid] = React.useState(false)

    const handleDelete = (value) => {
      setLocalTags(localTags.filter((t) => t.value !== value))
      handleTagDelete &&
        handleTagDelete({
          label: localTags.find((t) => t.value === value).label,
          value: value
        })
    }
    const handleSearch = (key) => {
      if (key === 'Enter') {
        if (filterText)
          if (allowCustomTags) {
            if (localTags.find((t) => t.label.toLowerCase() === filterText)) {
              return
            } else {
              const value = inputTagref.current.value
              const tag = {
                label: value,
                value: value
              }
              setLocalTags([...localTags, tag])
              handleTagAdd(tag)
              setFilterText('')
            }
          } else {
            if (localTags.find((t) => t.label.toLowerCase() === filterText)) {
              return
            } else {
              if (options.find((t) => t.label.toLowerCase() === filterText)) {
                const value = inputTagref.current.value
                setLocalTags([...localTags, { label: value, value: value }])
                setFilterText('')
              }
            }
          }
      }
    }
    const handleOptionClick = (option) => {
      if (localTags.find((t) => t.value === option.value)) {
        return
      } else {
        const newTags = [...localTags, option]
        setLocalTags(newTags)
        setIsOptionsOpen(false)
        setFilterText('')
        onTagUpdate(newTags)
        handleTagAdd &&
          handleTagAdd({
            label: option.label,
            value: option.value
          })
      }

      inputTagref.current.focus()
    }

    const toggleOptions = () => {
      setIsOptionsOpen(true)
    }

    const filterData = (options, filterText) => {
      if (filterText) {
        return options.filter((option) =>
          option.label.toLowerCase().includes(filterText.toLowerCase())
        )
      }
      return options
    }

    React.useEffect(() => {
      if (tags.length) setLocalTags(tags)
      return () => {
        setLocalTags([])
      }
    }, [tags])

    React.useEffect(() => {
      if (filterText.length > 0) {
        setIsOptionsOpen(true)
      }
    }, [filterText])
    const truncate = (label, max) => {
      return label?.length > max ? label.substr(0, max - 1) + '...' : label
    }
    return (
      <ClickOutside
        style={{ width: '100%' }}
        onClickOutside={() => setIsOptionsOpen(false)}
      >
        <Container tabIndex={0}>
          <StyledPixelInputTag
            onClick={() => {
              inputTagref.current.focus()
              toggleOptions()
            }}
          >
            {inputLabel && (
              <StyledLabel className={'showLabell'}>
                {truncate(inputLabel, 25)}
              </StyledLabel>
            )}
            {localTags.length > 0 && (
              <React.Fragment>
                {localTags?.map((tag, i) => {
                  return (
                    <Tags key={i}>
                      {tag.label} &nbsp;
                      <DcDiv
                        color='white'
                        hoverStyle={{ color: '#080885' }}
                        width='10px'
                      >
                        <DcIcon
                          color='inherit'
                          width={'10px'}
                          icon={faXmark}
                          fontSize='12px'
                          onClick={() => {
                            handleDelete(tag.value)

                            setIsOptionsOpen(false)
                          }}
                        />
                      </DcDiv>
                    </Tags>
                  )
                })}
              </React.Fragment>
            )}

            <TagInput
              onBlur={() => {}}
              width={filterText.length > 8 ? '40%' : '40%'}
              placeholder={placeholder}
              className={invalid ? 'invalid' : ''}
              value={filterText || ''}
              ref={inputTagref}
              onKeyPress={(e) => e.key && handleSearch(e.key)}
              onChange={(e) => {
                setFilterText(e.target.value)
                if (e.target.value !== '') {
                  const isInvalid = options.find((item) => {
                    return (
                      item.label.toLowerCase() === e.target.value.toLowerCase()
                    )
                  })
                  if (isInvalid) {
                    setInvalid(false)
                  } else {
                    setInvalid(true)
                  }
                }
              }}
            />
          </StyledPixelInputTag>
          {isOptionsOpen && (
            <DropDownList>
              {filterData(options, filterText).length > 0 ? (
                <React.Fragment>
                  {filterData(options, filterText).map((option, i) => {
                    return (
                      <Option
                        className={
                          localTags.find((tag) => tag.value === option.value)
                            ? 'selected'
                            : ''
                        }
                        ref={optionsref}
                        key={i}
                        onClick={() => {
                          handleOptionClick(option)
                        }}
                      >
                        {option.label}
                      </Option>
                    )
                  })}
                </React.Fragment>
              ) : (
                <Option>{noDataText && noDataText}</Option>
              )}
            </DropDownList>
          )}
          {isAllClearable && (
            <React.Fragment>
              {localTags.length > 0 && (
                <ClearAll
                  onClick={() => {
                    setLocalTags([])
                    clearAll && clearAll()
                  }}
                >
                  <DcIcon color='inherit' fontSize='18px' icon={faXmark} />
                </ClearAll>
              )}
            </React.Fragment>
          )}
        </Container>
        {error !== '' && (
          <PixelText customColor={'rgb(255 0 0 / 64%)'}>{error}</PixelText>
        )}
      </ClickOutside>
    )
  }
)
const ClearAll = styled.div`
  width: 12px;
  right: 7px;
  top: 10px;
  position: absolute;
  display: none;
  margin-right: 20px;
  color: #d2d4e4;
  &:hover {
    color: ${$DCprimaryActiveColor};
  }
`
const Container = styled.div`
  position: relative;
  min-height: 38px;
  border-radius: 4px;
  transition: border-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  background-color: #fff;
  border: 0.0625rem solid #d2d4e4;
  color: #43476b;
  appearance: none;
  background-clip: padding-box;
  border-radius: 0.375rem;
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: text;
  position: relative;
  width: 100%;
  /* padding: 0.5625rem 1.125rem !important; */
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
    border: 1px solid ${$DCprimaryColor};
    box-shadow: 0 0 0 1px ${$DCprimaryColor} !important;
  }
  border-radius: 4px;
  &:hover {
    ${ClearAll} {
      display: block;
    }
  }
`

const DropDownList = styled.div`
  background-color: #fff;
  border: 1px solid #ced4da;
  border-top: none;
  width: 100%;
  min-width: 300px;
  max-height: 300px;
  overflow: auto;

  padding-top: 6px;
  position: absolute;
  z-index: 99;
`
const Option = styled.option`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  background-color: #ffffff;
  min-width: 100%;
  height: 40px;
  padding: 5px 5px 5px 25px;
  cursor: pointer;
  &:hover {
    background-color: #f0f4fa;
  }
  &.selected {
    cursor: not-allowed;
    background-color: ${$DCprimaryColor};
    color: #ffffff;
  }
`
const StyledLabel = styled.div`
  &.showLabell {
    background: linear-gradient(180deg, #fff 52%, transparent 48%);
    top: -9px;
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

export default DcInputTag
