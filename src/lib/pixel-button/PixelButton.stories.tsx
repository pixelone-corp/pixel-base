import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelButton from './pixel-button'

export default {
  title: 'Pixel Button',
  component: PixelButton
} as ComponentMeta<typeof PixelButton>

const Template: ComponentStory<typeof PixelButton> = (args) => {
  return (
    <React.Fragment>
      <PixelButton {...args}>Pixel Button</PixelButton>
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {}
export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline'
}
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary'
}
export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary'
}
export const Link = Template.bind({})
Link.args = {
  variant: 'link'
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg'
}
export const Small = Template.bind({})
Small.args = {
  size: 'sm'
}
export const Active = Template.bind({})
Active.args = {
  active: true
}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}
export const Padding = Template.bind({})
Padding.args = {
  padding: '10px'
}
export const Margin = Template.bind({})
Margin.args = {
  margin: '10px'
}

