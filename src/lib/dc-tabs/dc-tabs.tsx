import React from 'react'
import styled, { css } from 'styled-components'
import { $primaryColor } from '../styleGuide'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface DcTabsProps {
  className?: string
  tabs: { value: any; label: string; icon?: React.ReactNode }[]
  activeTab: any
  handleChange: (value: any) => void
  variant?: 'default' | 'pills' | 'pills-column' | 'outline-pills'
  size?: 'sm' | 'md' | 'lg'
}

export const DcTabs = React.forwardRef<HTMLDivElement, DcTabsProps>(
  (
    { className, tabs, activeTab, handleChange, variant, size, ...rest },
    ref
  ) => {
    const scrollable = React.useRef<HTMLUListElement>(null)
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
        <Tabs variant={variant} ref={scrollable} onScroll={scrollCheck}>
          {tabs.map((item) => (
            <Tab
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
  variant?: 'default' | 'pills' | 'pills-column' | 'outline-pills'
  size?: 'sm' | 'md' | 'lg'
}>`
  display: flex;
  /* height: 40px; */
  align-items: center;
`

const Tabs = styled.ul<{
  variant?: 'default' | 'pills' | 'pills-column' | 'outline-pills'
}>`
  display: flex;
  list-style: none;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 1px solid #e5e7eb;
  ${(props) =>
    props.variant === 'default' &&
    css`
      border-radius: 5px;
      overflow: hidden;
      /* border-bottom: none;
       */
      /* margin-bottom: 1px; */
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
`

const Tab = styled.li<{ variant?: 'default' | 'pills' | 'pills-column' }>`
  flex: 0 0 auto;
  cursor: pointer;
  padding-right: 32px;
  //add variant default
  ${(props) =>
    props.variant === 'default' &&
    css`
      padding: 0px !important;
    `}

  &.active > div {
    animation: borderColorFade 0.3s ease-in-out, colorFade 0.1s ease-in-out;
  }
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


  &.active > div {
    animation: borderColorFade 0.3s ease-in-out, colorFade 0.1s ease-in-out;
  }

  @keyframes borderColorFade {
    from {
      border-bottom-color: transparent;
    }
    to {
      border-bottom-color: #5f38f9;
    }
  }

  @keyframes colorFade {
    from {
      color: #787c9e;
    }
    to {
      color: #5f38f9;
    }
  }
`

const TabContent = styled.div<{
  variant?: 'default' | 'pills' | 'pills-column' | 'outline-pills'
  size?: 'sm' | 'md' | 'lg'
}>`
  font-size: ${(props) =>
    props.size === 'sm' ? '0.75rem' : props.size == 'md' ? '0.875rem' : '1rem'};
  display: flex;
  align-items: center;
  padding: ${(props) =>
    props.size === 'sm'
      ? ' 2px 8px'
      : props.size === 'md'
      ? '5px 10px'
      : '9px 18px'};
  color: #787c9e;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease-in-out, border-bottom-color 0.1s ease-in-out;

  &.active {
    color: #5f38f9;
    border-bottom: 2px solid #5f38f9;
  }
  //on variant default
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
      border-bottom: none;

      &:hover,
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
  color: ${$primaryColor};
`

export default DcTabs
