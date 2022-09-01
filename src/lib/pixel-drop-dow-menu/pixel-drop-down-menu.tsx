import React from 'react'
import { Dropdown } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { $primaryColor, $secondaryColor } from '../styleGuide'
import { PixelTag } from '../pixel-tag/pixel-tag'
export interface MenuProps {
  className?: string
  variant?: 'outline' | 'primary' | 'secondary' | 'link' | 'tag' | string
  size?: 'lg' | 'sm'
  active?: boolean
  disabled?: boolean
  margin?: string
  padding?: string
  tooltip?: string

  maxHeight?: string
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
  ${(props: MenuProps) =>
    props.variant === 'outline' &&
    css`
      background-color: transparent;
      border-color: ${$primaryColor} !important;
      color: ${$primaryColor} !important;
      outline: none;
    `}
  ${(props: MenuProps) =>
    props.variant === 'primary' &&
    css`
      background-color: ${$primaryColor} !important;
      border-color: ${$primaryColor} !important;
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
      color: ${$primaryColor};
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
        color: ${$primaryColor} !important;
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
      variant = 'primary',
      disabled = false,
      margin = '0px',
      tooltip = false,
      maxHeight = '250px',
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

          <DropdownMenu maxHeight={maxHeight}>
            {options?.map((data) => (
              <Dropdown.Item
                key={index}
                disabled={data.disabled}
                onClick={data.clickHandler}
                onMouseEnter={() => setShow(data.label)}
                onMouseLeave={() => setShow(false)}
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

                    <DropdownMenu maxHeight={maxHeight}>
                      {data.children?.map((data) => (
                        <Dropdown.Item
                          key={index}
                          disabled={data.disabled}
                          onClick={data.clickHandler}
                        >
                          {data.formatter ? data.formatter(data) : data.label}
                        </Dropdown.Item>
                      ))}
                    </DropdownMenu>
                  </StyledSubDropdown>
                )}
              </Dropdown.Item>
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
    // transform: translateX(80%) !important;
    max-height: 200px !important;
    overflow: auto !important;
  }
`

const DropdownMenu = styled(Dropdown.Menu)`
  max-height: ${(props: MenuProps) => props.maxHeight || '250px'};
  overflow: auto !important;
`
export default PixelDropDownMenu
