import React from 'react'
import styled from 'styled-components'
import { $primaryColor } from '../styleGuide'
import { ActionIcon } from '../common-styled-component/section'
import ClickOutside from 'rechat-react-click-outside'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export interface InputTagProps {
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

  padding-left: 20px;
  width: 95%;
`
const TagInput = styled.input<{ width?: string }>`
  width: ${(props) => props.width && props.width};
  min-height: 38px;
  border: none;
  outline: none;
  background-color: inherit;
  &.invalid {
    color: red;
  }
`
const CloseIcon = styled.div`
  padding-left: 3px;
  cursor: pointer;
`
const Tags = styled.div`
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  display: flex;
  flex-direction: row;
  margin: 0px 2px;
  background: ${$primaryColor};
  font-size: 12px;
  padding: 1px 5px 1px 5px;
  border-radius: 11px;
  color: white;
  font-weight: 700;
`
export const PixelInputTag = React.forwardRef<HTMLDivElement, InputTagProps>(
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
      inputLabel = 'label',

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
            {isShowLabel && (
              <StyledLabel className={'showLabell'}>
                {inputLabel?.length > 25 ? (
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip id={`tooltip-top`}>{`${inputLabel} `}</Tooltip>
                    }
                  >
                    <div> {truncate(inputLabel, 25)}</div>
                  </OverlayTrigger>
                ) : (
                  `${truncate(inputLabel, 25)}`
                )}
              </StyledLabel>
            )}
            {localTags.length > 0 && (
              <React.Fragment>
                {localTags?.map((tag, i) => {
                  return (
                    <Tags key={i}>
                      {tag.label}
                      <CloseIcon
                        onClick={() => {
                          handleDelete(tag.value)

                          setIsOptionsOpen(false)
                        }}
                      >
                        x
                      </CloseIcon>
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
                  <ActionIcon size='28px' icon={faXmark} />
                </ClearAll>
              )}
            </React.Fragment>
          )}
        </Container>
      </ClickOutside>
    )
  }
)
const ClearAll = styled.div`
  width: 5%;
  right: 7px;
  top: 4px;
  position: absolute;
  display: none;
`
const Container = styled.div`
  position: relative;
  min-height: 38px;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid #ced4da;
  background-color: #f7f7f7;
  cursor: text;
  position: relative;
  width: 100%;
  &:focus {
    box-shadow: 0 0 0 0.25rem #db01f926 !important;
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
    background-color: #136acd;
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

export default PixelInputTag
