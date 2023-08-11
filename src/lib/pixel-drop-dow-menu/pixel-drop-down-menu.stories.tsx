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
  variant: 'simple',
  size: 'lg',
  active: true,
  disabled: false,
  margin: '10px',
  padding: '20px',
  tooltip: 'string',
  toggleText: 'Dropdown',
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
export const Grouped = Template.bind({})
Grouped.args = {
  className: 'string',
  variant: 'outline',
  size: 'lg',
  active: true,
  disabled: false,
  isGrouped: true,
  margin: '10px',
  padding: '20px',
  tooltip: 'string',
  toggleText: 'Grouped Dropdown',
  options: [
    {
      label: 'Child 2',

      children: [
        {
          label: 'Test 1', clickHandler: () => {
            console.log('testing')
          },
        },
        { label: 'Test 2' },
        { label: 'Test 323' },
        { label: 'Test 12323' },
      ]
    },
    {
      label: 'Child 3',
      children: [
        { label: 'Test 321' },
        { label: 'Test 13232' },
        { label: 'Test dfd1' },
        { label: 'Test 1fdf' },
      ]
    },
    {
      label: 'Child 4', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    },
    {
      label: 'Child 5', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    },
    {
      label: 'Child 6', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    },
    {
      label: 'Child 7', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    },
    {
      label: 'Child 8', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    },
    {
      label: 'Child 9', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    },
    {
      label: 'Child 10', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    },
    {
      label: 'Child 11', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    },
    {
      label: 'Child 12', children: [
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
        { label: 'Test 1' },
      ]
    }
  ]
}