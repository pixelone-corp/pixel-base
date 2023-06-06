import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDropDown from './pixel-drop-down-menu'
import PixelProfile from '../pixel-user-profile/pixel-user-profile'

export default {
  title: 'Pixel Dropdown Menu',
  component: PixelDropDown
} as ComponentMeta<typeof PixelDropDown>

const Template: ComponentStory<typeof PixelDropDown> = (args) => {
  return (
    <React.Fragment>
      <PixelDropDown {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  className: 'string',
  variant: 'outline',
  size: 'lg',
  active: true,
  disabled: false,
  margin: '10px',
  padding: '20px',
  tooltip: 'string',
  toggleText: 'Dropdown Button',
  options: [
   
    {
      label: 'Child 2'
    },
    {
      label: 'Child 3'
    },
    {
      label: 'Child 4'
    },
    {
      label: 'Child 5'
    },
    {
      label: 'Child 6'
    },
    {
      label: 'Child 7'
    },
    {
      label: 'Child 8'
    },
    {
      label: 'Child 9'
    },
    {
      label: 'Child 10'
    },
    {
      label: 'Child 11'
    },
    {
      label: 'Child 12'
    }
  ]
}
