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
  scrollStep?: number // New prop for scroll sensitivity
}

export const DcTabs = React.memo(
  React.forwardRef<HTMLDivElement, DcTabsProps>(
    (
      {
        className,
        tabs,
        activeTab,
        handleChange,
        variant = 'default',
        scrollStep = 50,
        ...rest
      },
      ref
    ) => {
      const scrollable = React.useRef<HTMLUListElement>(null)
      const [scrollX, setScrollX] = React.useState(0)
      const [scrollEnd, setScrollEnd] = React.useState(true)

      const updateScroll = React.useCallback(() => {
        if (scrollable.current) {
          setScrollX(scrollable.current.scrollLeft)
          setScrollEnd(
            Math.floor(
              scrollable.current.scrollWidth - scrollable.current.scrollLeft
            ) <= scrollable.current.offsetWidth
          )
        }
      }, [])

      const slide = React.useCallback(
        (shift: number) => {
          if (scrollable.current) {
            scrollable.current.scrollLeft += shift
            updateScroll()
          }
        },
        [updateScroll]
      )

      React.useEffect(() => {
        updateScroll()
      }, [tabs, updateScroll])

      const handleKeyDown = (
        e: React.KeyboardEvent<HTMLLIElement>,
        value: any
      ) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleChange(value)
        }
      }

      return (
        <TabsContainer
          variant={variant}
          className={className}
          ref={ref}
          {...rest}
        >
          {scrollX > 0 && (
            <Arrow onClick={() => slide(-scrollStep)} aria-label='Scroll Left'>
              <FontAwesomeIcon icon={faLessThan} />
            </Arrow>
          )}
          <Tabs
            variant={variant}
            ref={scrollable}
            onScroll={updateScroll}
            role='tablist'
          >
            {tabs.map((item) => (
              <Tab
                variant={variant}
                key={item.value}
                className={activeTab === item.value ? 'active' : ''}
                onClick={() => handleChange(item.value)}
                onKeyDown={(e) => handleKeyDown(e, item.value)}
                role='tab'
                aria-selected={activeTab === item.value}
                tabIndex={activeTab === item.value ? 0 : -1}
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
            <Arrow onClick={() => slide(scrollStep)} aria-label='Scroll Right'>
              <FontAwesomeIcon icon={faGreaterThan} />
            </Arrow>
          )}
        </TabsContainer>
      )
    }
  )
)

const TabsContainer = styled.div<{
  variant?: 'default' | 'pills' | 'pills-column'
}>`
  display: flex;
  align-items: center;
  position: relative;
`

const Tabs = styled.ul<{ variant?: 'default' | 'pills' | 'pills-column' }>`
  display: flex;
  list-style: none;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.variant === 'pills-column' &&
    css`
      flex-direction: column;
      overflow-x: hidden;
    `}
`

const Tab = styled.li<{ variant?: 'default' | 'pills' | 'pills-column' }>`
  flex: 0 0 auto;
  cursor: pointer;
  padding: 0 16px;
  outline: none;

  &:focus-visible {
    outline: 2px solid ${$primaryColor};
    outline-offset: 2px;
  }

  &.active > div {
    animation: borderColorFade 0.3s ease-in-out, colorFade 0.1s ease-in-out;
  }

  ${(props) =>
    props.variant === 'pills' &&
    css`
      padding: 0;
    `}
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
    border-bottom-color: #5f38f9;
  }

  ${(props) =>
    props.variant === 'pills' &&
    css`
      color: #787c9e;
      border-radius: 0.375rem;
      padding: 10px;
      &.active {
        color: #fff;
        background-color: #5f38f9;
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

  &:focus-visible {
    outline: 2px solid ${$primaryColor};
    outline-offset: 2px;
  }
`

const TabIcon = styled.div`
  margin-right: 8px;
`

export default DcTabs
