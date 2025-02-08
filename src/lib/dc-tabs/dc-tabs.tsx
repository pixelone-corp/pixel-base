import React from 'react'
import styled, { css } from 'styled-components'
import { $DCprimaryActiveColor, $primaryColor } from '../styleGuide'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DCFlexBox from '../DC-flex-box/DC-flex-box'

export interface DcTabsProps {
  className?: string
  tabs: { value: any; label: string; icon?: React.ReactNode }[]
  activeTab: any
  handleChange: (value: any) => void
  variant?:
    | 'default'
    | 'pills'
    | 'pills-column'
    | 'outline-pills'
    | 'simple'
    | 'sub-simple'
  size?: 'sm' | 'md' | 'lg' | 'small'
  withSubTabs?: boolean
  subTabs?: { value: any; label: string }[]
}

export const DcTabs = React.forwardRef<HTMLDivElement, DcTabsProps>(
  (
    {
      className,
      tabs,
      activeTab,
      handleChange,
      variant,
      size,
      withSubTabs,
      subTabs,
      ...rest
    },
    ref
  ) => {
    const scrollable = React.useRef<HTMLUListElement>(null)
    const reference = React.useRef<HTMLUListElement>(null)
    const [scrollX, setScrollX] = React.useState(0)
    const [scrollEnd, setScrollEnd] = React.useState(true)

    const slide = (shift: number) => {
      if (scrollable.current) {
        scrollable.current.scrollLeft += shift
        setScrollX(scrollable.current.scrollLeft)
        setScrollEnd(
          Math.floor(
            scrollable.current.scrollWidth - scrollable.current.scrollLeft
          ) <= scrollable.current.offsetWidth
        )
      }
    }

    const scrollCheck = () => {
      if (scrollable.current) {
        setScrollX(scrollable.current.scrollLeft)
        setScrollEnd(
          Math.floor(
            scrollable.current.scrollWidth - scrollable.current.scrollLeft
          ) <= scrollable.current.offsetWidth
        )
      }
    }

    React.useEffect(() => {
      scrollCheck()
    }, [tabs])

    return (
      <TabsContainer
        variant={variant}
        size={size}
        className={className}
        ref={ref}
        {...rest}
      >
        {scrollX !== 0 && (
          <Arrow onClick={() => slide(-50)}>
            <FontAwesomeIcon icon={faLessThan} />
          </Arrow>
        )}
        <Tabs
          variant={variant}
          ref={scrollable}
          withSubTabs={withSubTabs}
          onScroll={scrollCheck}
        >
          {tabs.map((item) => (
            <Tab
              ref={reference}
              // Apply position: relative to the active tab when withSubTabs is true
              style={
                withSubTabs && activeTab === item.value
                  ? { position: 'relative' }
                  : {}
              }
              variant={variant}
              key={item.value}
              className={activeTab === item.value ? 'active' : ''}
              onClick={() => handleChange(item.value)}
            >
              <TabContent
                size={size}
                variant={variant}
                className={activeTab === item.value ? 'active' : ''}
              >
                {item.icon && <TabIcon>{item.icon}</TabIcon>}
                {item.label}
              </TabContent>
              {/* Render sub-tabs inside the active tab */}
              {withSubTabs && activeTab === item.value && (
                <DCFlexBox
                  style={{
                    position: 'absolute',
                    top: '50px', // Position below the active tab
                    // left: 0,
                    width: 'auto',
                    zIndex: 1, // Ensure sub-tabs appear above other content
                    background: 'white', // Add background to make sub-tabs visible
                    border: '1px solid #ccc', // Add border for visibility
                    padding: '10px', // Add padding for spacing
                    display: 'flex', // Ensure sub-tabs are displayed in a row,
                    borderRadius: '5px' // Add border radius for rounded corners
                  }}
                >
                  {subTabs &&
                    subTabs.map((subItem) => (
                      <TabContent
                        size={size}
                        variant={variant}
                        key={subItem.value}
                        className={activeTab === 'subtabs' ? 'active' : ''}
                        onClick={() => handleChange('subtabs')}
                      >
                        {subItem.label}
                      </TabContent>
                    ))}
                </DCFlexBox>
              )}
            </Tab>
          ))}
        </Tabs>
        {!scrollEnd && (
          <Arrow onClick={() => slide(50)}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </Arrow>
        )}
      </TabsContainer>
    )
  }
)

const TabsContainer = styled.div<{
  variant?:
    | 'default'
    | 'pills'
    | 'pills-column'
    | 'outline-pills'
    | 'simple'
    | 'sub-simple'
  size?: 'sm' | 'md' | 'lg' | 'small'
}>`
  display: flex;
  align-items: center;
  overflow: visible;
`

const Tabs = styled.ul<{
  variant?:
    | 'default'
    | 'pills'
    | 'pills-column'
    | 'outline-pills'
    | 'simple'
    | 'sub-simple'
  withSubTabs?: boolean
}>`
  display: flex;
  list-style: none;
  overflow-x: ${(props) => (props.withSubTabs ? 'visible' : 'scroll')};
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  /* border-bottom: 1px solid #e5e7eb; */
  ${(props) =>
    props.variant === 'default' &&
    css`
      border-radius: 5px;
      overflow: visible; // Ensure sub-tabs are not clipped
    `}

  ${(props) =>
    props.variant === 'outline-pills' &&
    css`
      border-bottom: none;
    `}

  ${(props) =>
    props.variant === 'pills' &&
    css`
      border-bottom: none;
    `}

  ${(props) =>
    props.variant === 'simple' &&
    css`
      border-bottom: none;
    `}
`

const Tab = styled.li<{
  variant?: 'default' | 'pills' | 'pills-column' | 'simple' | 'sub-simple'
  position?: string
}>`
  flex: 0 0 auto;
  cursor: pointer;
  position: ${(props) => props.position};
  /* padding-right: 32px; */

  ${(props) =>
    props.variant === 'default' &&
    css`
      padding: 0px !important;
    `}

  ${(props) =>
    props.variant === 'simple' &&
    css`
      padding: 0px !important;
      border-radius: 'none';
    `}

  ${(props) =>
    props.variant === 'pills' &&
    css`
      padding: 0px !important;
    `}

  ${(props) =>
    props.variant === 'outline-pills' &&
    css`
      padding: 0px !important;
    `}
`

const TabContent = styled.div<{
  variant?:
    | 'default'
    | 'pills'
    | 'pills-column'
    | 'outline-pills'
    | 'simple'
    | 'sub-simple'
  size?: 'sm' | 'md' | 'lg' | 'small'
  position?: string
}>`
  border: 1px solid lightgrey;
  position: ${(props) => props.position};
  font-size: ${(props) =>
    props.size === 'sm' ? '0.75rem' : props.size == 'md' ? '0.875rem' : '1rem'};
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 10px !important;
    `}
  display: flex;
  align-items: center;
  padding: ${(props) =>
    props.size === 'sm'
      ? ' 2px 8px'
      : props.size === 'md'
      ? '5px 10px'
      : '9px 18px'};
  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 4px 10px;
    `}
  color: #787c9e;

  &.active {
    color: #5f38f9;
    border-bottom: 2px solid #5f38f9;
  }
  ${(props) =>
    props.variant === 'default' &&
    css`
      padding: ${(props) =>
        props.size === 'sm'
          ? ' 2px 8px'
          : props.size === 'md'
          ? '5px 10px'
          : '9px 18px'};
      border-top: 1px solid transparent;
      border-right: 1px solid transparent;
      border-left: 1px solid transparent;
      border-bottom: 1px solid lightgrey;

      &:hover {
        color: #24214b;
        border-radius: 0.375rem 0.375rem 0 0 !important;
        padding: ${(props) =>
          props.size === 'sm'
            ? ' 2px 8px'
            : props.size === 'md'
            ? '5px 10px'
            : '9px 18px'};
        border-top: 1px solid #d1d5db !important;
        border-right: 1px solid #d1d5db !important;
        border-left: 1px solid #d1d5db !important;
        /* border-bottom: none; */
      }
      &.active {
        color: #24214b;
        border-radius: 0.375rem 0.375rem 0 0 !important;
        padding: ${(props) =>
          props.size === 'sm'
            ? ' 2px 8px'
            : props.size === 'md'
            ? '5px 10px'
            : '9px 18px'};
        border-top: 1px solid #d1d5db !important;
        border-right: 1px solid #d1d5db !important;
        border-left: 1px solid #d1d5db !important;
        border-bottom: none;
      }
    `}

  ${(props) =>
    props.variant === 'pills' &&
    css`
      padding: ${(props) =>
        props.size === 'sm'
          ? ' 2px 8px'
          : props.size === 'md'
          ? '5px 10px'
          : '9px 18px'};
      border: none;
      &:hover {
        color: #24214b;
      }
      &.active {
        color: #fff;
        background-color: #5f38f9;
        border-radius: 0.375rem !important;
      }
    `}

    ${(props) =>
    props.variant === 'outline-pills' &&
    css`
      padding: ${(props) =>
        props.size === 'sm'
          ? ' 2px 8px'
          : props.size === 'md'
          ? '5px 10px'
          : '9px 18px'};

      border: 1px solid transparent;
      &:hover {
        color: #24214b;
      }
      &.active {
        color: #5f38f9;
        background-color: #ffffff;
        border-radius: 0.375rem !important;

        border: 1px solid #5f38f9;
      }
    `}

    ${(props) =>
    props.variant === 'simple' &&
    css`
      padding: ${(props) =>
        props.size === 'sm'
          ? ' 2px 8px'
          : props.size === 'md'
          ? '5px 10px'
          : props.size === 'small'
          ? '4px 10px'
          : '9px 18px'};
      border: 1px solid transparent;

      &:hover {
        color: ${$DCprimaryActiveColor};
      }
      &.active {
        color: ${$DCprimaryActiveColor};
        background-color: #ffffff;
        font-weight: 600;
      }
    `}
    ${(props) =>
    props.variant === 'sub-simple' &&
    css`
      border: 1px solid lightgrey;
      margin-right: 5px;
      border-radius: 4px;
      padding: ${(props) =>
        props.size === 'sm'
          ? ' 2px 8px'
          : props.size === 'md'
          ? '5px 10px'
          : props.size === 'small'
          ? '4px 10px'
          : '9px 18px'};

      &:hover {
        color: ${$DCprimaryActiveColor};
      }
      &.active {
        color: ${$DCprimaryActiveColor};
        background-color: #ffffff;
        font-weight: 600;
      }
    `}
`

const Arrow = styled.button`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #787c9e;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #5f38f9;
  }
`

const TabIcon = styled.div`
  margin-right: 10px;
  color: 'inherit';
`

export default DcTabs
