import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from "react"
import { CollapsibleMenu, type MenuItemProps } from "./dc-collapsible-menu"
import { Home, Settings, Users, FileText, ShoppingCart, BarChart, HelpCircle } from "lucide-react"

export default {
  title: 'DC CollapsibleMenu',
  component: CollapsibleMenu
} as ComponentMeta<typeof CollapsibleMenu>

const Template: ComponentStory<typeof CollapsibleMenu> = (args) => {
  const [activeItem, setActiveItem] = useState<string | number>("dashboard")

  const menuItems: MenuItemProps[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: "users",
      label: "Users",
      icon: <Users className="w-4 h-4" />,
      items: [
        {
          id: "user-management",
          label: "User Management",
        },
        {
          id: "permissions",
          label: "Permissions",
        },
        {
          id: "roles",
          label: "Roles",
          items: [
            {
              id: "admin-roles",
              label: "Admin Roles",
            },
            {
              id: "user-roles",
              label: "User Roles",
            },
          ],
        },
      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: <BarChart className="w-4 h-4" />,
      items: [
        {
          id: "sales-report",
          label: "Sales Report",
        },
        {
          id: "analytics",
          label: "Analytics",
        },
      ],
    },
    {
      id: "orders",
      label: "Orders",
      icon: <ShoppingCart className="w-4 h-4" />,
      content: <div className="text-sm text-gray-500">You have 5 pending orders</div>,
    },
    {
      id: "documents",
      label: "Documents",
      icon: <FileText className="w-4 h-4" />,
      disabled: true,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      id: "help",
      label: "Help & Support",
      icon: <HelpCircle className="w-4 h-4" />,
    },
  ]
  const handleItemClick = (item: MenuItemProps) => {
    setActiveItem(item.id)
    console.log(`Clicked on: ${item.label}`)
  }

  return (
    <div className="w-full max-w-xs p-4 border rounded-lg shadow-sm">
      <h2 className="mb-4 text-lg font-medium">Menu Example</h2>
      <CollapsibleMenu
        items={menuItems}
        onItemClick={handleItemClick}
        activeItemId={activeItem}
        defaultExpandedIds={["users", "reports"]}
        variant="default"
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  gap: '10px',
  padding: '15px',
  margin: '5px'
}
