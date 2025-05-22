import React from "react"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import styled from "styled-components"

export interface MenuItemProps {
  id: string | number
  label: string
  content?: React.ReactNode
  items?: MenuItemProps[]
  icon?: React.ReactNode
  disabled?: boolean
}

interface CollapsibleMenuProps {
  items: MenuItemProps[]
  defaultExpandedIds?: (string | number)[]
  onItemClick?: (item: MenuItemProps) => void
  activeItemId?: string | number
  variant?: "default" | "bordered" | "minimal"
  iconPosition?: "left" | "right"
}

// Styled components
const MenuContainer = styled.div`
  width: 100%;
`

interface MenuItemContainerProps {
  level: number
}

const MenuItemContainer = styled.div<MenuItemContainerProps>`
  width: 100%;
`

interface MenuItemButtonProps {
  isActive: boolean
  isDisabled: boolean
  variant: "default" | "bordered" | "minimal"
  level: number
}

const MenuItemButton = styled.div<MenuItemButtonProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  padding-left: ${(props) => props.level * 12 + 12}px;
  text-align: left;
  font-size: 14px;
  transition: background-color 0.2s, color 0.2s;
  border-radius: 6px;
  
  ${(props) =>
    props.isActive &&
    `
    background-color: #f3f4f6;
    font-weight: 500;
  `}
  
  ${(props) =>
    props.isDisabled
      ? `
    opacity: 0.5;
    cursor: not-allowed;
  `
      : `
    cursor: pointer;
  `}
  
  ${(props) =>
    props.variant === "default" &&
    `
    &:hover {
      background-color: #f3f4f6;
    }
  `}
  
  ${(props) =>
    props.variant === "bordered" &&
    `
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    margin-bottom: 4px;
  `}
  
  ${(props) =>
    props.variant === "minimal" &&
    `
    &:hover {
      background-color: transparent;
    }
  `}
  
  @media (prefers-color-scheme: dark) {
    ${(props) =>
    props.isActive &&
    `
      background-color: #1f2937;
    `}
    
    ${(props) =>
    props.variant === "default" &&
    `
      &:hover {
        background-color: #1f2937;
      }
    `}
    
    ${(props) =>
    props.variant === "bordered" &&
    `
      border-color: #374151;
    `}
  }
`

const IconWrapper = styled.span`
  margin-right: 8px;
`

const RightIconWrapper = styled.span`
  margin-left: 8px;
`

const LabelWrapper = styled.span`
  flex-grow: 1;
`

interface ToggleButtonProps {
  isExpanded: boolean
}

const ToggleButton = styled.button<ToggleButtonProps>`
  padding: 4px;
  margin-left: auto;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #e5e7eb;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #d1d5db;
  }
  
  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #374151;
    }
    
    &:focus {
      box-shadow: 0 0 0 2px #4b5563;
    }
  }
`

const SubMenuContainer = styled.div`
  margin-top: 4px;
`

interface ContentContainerProps {
  level: number
}

const ContentContainer = styled.div<ContentContainerProps>`
  padding: 8px 12px;
  padding-left: ${(props) => props.level * 12 + 24}px;
  margin-top: 4px;
  font-size: 14px;
`

export const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
  items,
  defaultExpandedIds = [],
  onItemClick,
  activeItemId,
  variant = "default",
  iconPosition = "left",
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string | number>>(new Set(defaultExpandedIds))

  const toggleItem = (id: string | number, e: React.MouseEvent) => {
    e.stopPropagation()
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleItemClick = (item: MenuItemProps) => {
    if (onItemClick && !item.disabled) {
      onItemClick(item)
    }
  }

  const renderMenuItem = (item: MenuItemProps, level = 0) => {
    const hasChildren = item.items && item.items.length > 0
    const isExpanded = expandedItems.has(item.id)
    const isActive = item.id === activeItemId

    return (
      <MenuItemContainer key={item.id} level={level} data-testid={`menu-item-${item.id}`}>
        <MenuItemButton
          isActive={isActive}
          isDisabled={!!item.disabled}
          variant={variant}
          level={level}
          onClick={() => handleItemClick(item)}
          data-testid={`item-${item.id}`}
          role="button"
          tabIndex={item.disabled ? -1 : 0}
          aria-expanded={hasChildren ? isExpanded : undefined}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleItemClick(item)
              e.preventDefault()
            }
          }}
        >
          {iconPosition === "left" && item.icon && <IconWrapper>{item.icon}</IconWrapper>}

          <LabelWrapper>{item.label}</LabelWrapper>

          {hasChildren && (
            <ToggleButton
              isExpanded={isExpanded}
              onClick={(e) => toggleItem(item.id, e)}
              aria-label={isExpanded ? "Collapse" : "Expand"}
              data-testid={`toggle-${item.id}`}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </ToggleButton>
          )}

          {iconPosition === "right" && item.icon && <RightIconWrapper>{item.icon}</RightIconWrapper>}
        </MenuItemButton>

        {hasChildren && isExpanded && (
          <SubMenuContainer data-testid={`submenu-${item.id}`}>
            {item.items!.map((subItem) => renderMenuItem(subItem, level + 1))}
          </SubMenuContainer>
        )}

        {item.content && isExpanded && (
          <ContentContainer level={level} data-testid={`content-${item.id}`}>
            {item.content}
          </ContentContainer>
        )}
      </MenuItemContainer>
    )
  }

  return (
    <MenuContainer role="menu" data-testid="collapsible-menu">
      {items.map((item) => renderMenuItem(item))}
    </MenuContainer>
  )
}
