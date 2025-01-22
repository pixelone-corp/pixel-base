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
  variant?: 'default' | 'pills' | 'pills-column'
}

export const DcTabs = React.forwardRef<HTMLDivElement, DcTabsProps>(
  ({ className, tabs, activeTab, handleChange, variant, ...rest }, ref) => {
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
  variant?: 'default' | 'pills' | 'pills-column'
}>`
  display: flex;
  align-items: center;
`

const Tabs = styled.ul<{ variant?: 'default' | 'pills' | 'pills-column' }>`
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
  variant?: 'default' | 'pills' | 'pills-column'
}>`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: #787c9e;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease-in-out, border-bottom-color 0.1s ease-in-out;

  &.active {
    color: #5f38f9;
    border-bottom: ${(props) =>
      props.variant !== 'default' &&
      props.variant !== 'pills' &&
      '2px solid #5f38f9'};
  }

  ${(props) =>
    props.variant === 'default' &&
    css`
      padding: 9px 18px;
      &:hover,
      &.active {
        color: #24214b;
        /* background-color: #5f38f9; */
        border-radius: 0.375rem 0.375rem 0 0 !important;
        padding: 9px 18px !important;

        border-top: 1px solid #e5e7eb !important;
        border-right: 1px solid #e5e7eb !important;
        border-left: 1px solid #e5e7eb !important;
        /* border-bottom: none !important; */
        /* border-bottom: 2px solid #5f38f9; */
      }
    `}

  //on variant default
  ${(props) =>
    props.variant === 'default-pills' &&
    css`
      padding: 9px 18px;
      &:hover,
      &.active {
        color: #24214b;
        /* background-color: #5f38f9; */
        border-radius: 0.375rem 0.375rem 0 0 !important;
        padding: 9px 18px !important;
        border-top: 1px solid #e5e7eb !important;
        border-right: 1px solid #e5e7eb !important;
        border-left: 1px solid #e5e7eb !important;
        /* border-bottom: none !important; */
        /* border-bottom: 2px solid #5f38f9; */
      }
    `}
  ${(props) =>
    props.variant === 'pills' &&
    css`
      padding: 9px 18px;
      border: none;
      &:hover {
        color: #24214b;
      }
      &.active {
        color: #fff;
        background-color: #5f38f9;
        border-radius: 0.375rem !important;
        /* padding: 10px 20px !important; */
        /* border: 1px solid #e5e7eb !important; */
        /* border-bottom: 2px solid #fff !important; */
        /* border-bottom: 2px solid #5f38f9; */
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
