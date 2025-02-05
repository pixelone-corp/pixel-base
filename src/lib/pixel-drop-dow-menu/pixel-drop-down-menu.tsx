import React from 'react'
import { Dropdown } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { $DCprimaryColor, $secondaryColor } from '../styleGuide'
import { PixelTag } from '../pixel-tag/pixel-tag'
export interface MenuProps {
  className?: string
  variant?: 'outline' | 'simple' | 'secondary' | 'link' | 'tag' | string
  size?: 'lg' | 'sm'
  active?: boolean
  disabled?: boolean
  margin?: string
  padding?: string
  tooltip?: string
  isGrouped?: boolean
  maxheight?: string
  toggleText?: boolean
  options?: OptionsData[]
}
interface OptionsData {
  label: string
  disabled?: boolean
  clickHandler: any
  children?: OptionsData[]
  formatter?: any
}
const DropDownListItem = styled(Dropdown.Item)<{ isGrouped: boolean }>`
  ${(props) =>
    props.isGrouped
      ? css`
          & > div {
            & > div {
              & > a {
                &:active {
                  background-color: ${$DCprimaryColor};
                }
              }
            }
            & > button {
              outline: none !important;
              border: none !important;
              &:focus {
                box-shadow: none;
              }
            }
          }
          &:active {
            background-color: #e9ecef;
          }
        `
      : css`
          &:active {
            background-color: ${$DCprimaryColor};
          }
        `}
  ${(props: MenuProps) =>
    props.variant !== '' ||
    (props.variant === null &&
      css`
        & > div {
          & > button {
            background-color: none;
            color: black;
            &:focus {
              box-shadow: none;
            }
          }
        }
        &:active {
          background-color: #e9ecef;
        }
      `)}
`
const StyledInnerLine = styled(Dropdown.Toggle)``
const StyledPixelButton = styled(Dropdown.Toggle)`
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  margin: ${(props: MenuProps) => props.margin || '0px'};
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  padding: ${(props: MenuProps) => props.padding};
  ${(props: MenuProps) =>
    props.variant === 'outline' &&
    css`
      background-color: transparent;
      border-color: ${$DCprimaryColor} !important;
      color: ${$DCprimaryColor} !important;
      outline: none;
    `}
  ${(props: MenuProps) =>
    props.variant === 'simple' &&
    css`
      background-color: ${$DCprimaryColor} !important;
      border-color: ${$DCprimaryColor} !important;
      color: #fff !important;
      &:hover,
      &:active,
      &:focus {
        background-color: ${$secondaryColor} !important;
        border-color: ${$secondaryColor} !important;
      }
    `}
    ${(props: MenuProps) =>
    props.variant === 'link' &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: ${$DCprimaryColor};
      padding: ${(props: MenuProps) => props.padding || '0.375rem 0.75rem'};
      &:hover,
      &:hover a,
      &:active,
      &:active a,
      &:focus,
      &:focus a {
        color: ${$secondaryColor} !important;
      }
      a {
        color: ${$DCprimaryColor} !important;
      }
    `}
    ${(props: MenuProps) =>
    props.active &&
    css`
      background-color: ${$secondaryColor} !important;
      border-color: ${$secondaryColor} !important;
    `}
    ${(props: MenuProps) =>
    props.variant === 'tag' &&
    css`
      border: none;
      &::after {
        display: none;
      }
    `}
`
const StyledPixelDropDownMenu = styled.div``

export const PixelDropDownMenu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      className,
      toggleText = 'drop-down-button',
      options,
      active,
      variant = 'simple',
      disabled = false,
      margin = '0px',
      tooltip = false,
      maxheight = '250px',
      isGrouped = false,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = React.useState<any>(false)
    const showDropdown = (e) => {
      setShow(!show)
    }
    const hideDropdown = (e) => {
      setShow(false)
    }
    return (
      <StyledPixelDropDownMenu>
        <Dropdown>
          <StyledPixelButton
            aria-pressed={active}
            variant={variant}
            ref={ref}
            className={className}
            disabled={disabled}
            margin={margin}
            {...rest}
          >
            {variant === 'tag' ? (
              <PixelTag>{toggleText}</PixelTag>
            ) : (
              <React.Fragment>{toggleText}</React.Fragment>
            )}
          </StyledPixelButton>

          <DropdownMenu maxheight={maxheight}>
            {options?.map((data, index) => (
              <DropDownListItem
                isGrouped={isGrouped}
                key={index}
                disabled={data.disabled}
                onClick={(e) => {
                  if (isGrouped) {
                    e.stopPropagation()
                  } else {
                    data.clickHandler && data.clickHandler()
                  }
                }}
                onMouseEnter={() => setShow(data.label)}
                onMouseLeave={() => setShow(false)}
                active={false}
              >
                {data.children ? '' : data.label}
                {data.children && (
                  <StyledSubDropdown show={show === data.label}>
                    <StyledInnerLine
                      aria-pressed={active}
                      variant={variant}
                      className={className}
                      disabled={data.disabled}
                      {...rest}
                    >
                      {data.formatter ? data.formatter(data) : data.label}
                    </StyledInnerLine>

                    <DropdownMenu maxheight={maxheight}>
                      {data.children?.map((data, i) => (
                        <DropDownListItem
                          isGrouped={isGrouped}
                          key={i}
                          disabled={data.disabled}
                          onClick={data.clickHandler}
                        >
                          {data.formatter ? data.formatter(data) : data.label}
                        </DropDownListItem>
                      ))}
                    </DropdownMenu>
                  </StyledSubDropdown>
                )}
              </DropDownListItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </StyledPixelDropDownMenu>
    )
  }
)

const StyledSubDropdown = styled(Dropdown)`
  width: 200px;

  .dropdown-toggle {
    width: 100%;
    // display: flex;
    // flex-direction: row;
    // justify-content: flex-start;
    // align-items: flex-start;
    text-align: left;

    &::after {
      display: none;
    }
  }
  & .dropdown-menu {
    transform: translateX(80%) !important;
    max-height: 200px !important;
    overflow: auto !important;
  }
`

const DropdownMenu = styled(Dropdown.Menu)``

export default PixelDropDownMenu
