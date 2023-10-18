import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelCheckBoxGroup from './pixel-checkbox-group'
export default {
  title: 'Pixel Checkbox Group',
  component: PixelCheckBoxGroup,
} as ComponentMeta<typeof PixelCheckBoxGroup>
const Template: ComponentStory<typeof PixelCheckBoxGroup> = (args) => {
  return (
    <React.Fragment>
      <PixelCheckBoxGroup {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  label: 'PixelCheckBoxGroup',
  direction:'column',
  options: [
    {
      value: '1',
      label: 'Checked',
      checked: true
    },
    {
      value: '2',
      label: 'Checkbox 1'
    },
    {
      value: '3',
      label: 'Checkbox 2'
    },
    {
      value: '4',
      label: 'Checkbox 3'
    },
    {
      value: '5',
      label: 'Diabled',
      disabled: true
    }
  ]
}