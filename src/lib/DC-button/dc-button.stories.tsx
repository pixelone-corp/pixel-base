import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcButton from './dc-button'

export default {
  title: 'DC Button',
  component: DcButton
} as ComponentMeta<typeof DcButton>

const Template: ComponentStory<typeof DcButton> = (args) => {
  return (
    <React.Fragment>
      <DcButton {...args}>DC Button</DcButton>
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {}
export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline-primary'
}
export const OutlineSecondary = Template.bind({})
OutlineSecondary.args = {
  variant: 'outline-secondary'
}
export const OutlineSuccess = Template.bind({})
OutlineSuccess.args = {
  variant: 'outline-success'
}
export const OutlineWarning = Template.bind({})
OutlineWarning.args = {
  variant: 'outline-warning'
}
export const OutlineDanger = Template.bind({})
OutlineDanger.args = {
  variant: 'outline-danger'
}
export const OutlineInfo = Template.bind({})
OutlineInfo.args = {
  variant: 'outline-info'
}
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary'
}
export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary'
}
export const Success = Template.bind({})
Success.args = {
  variant: 'success'
}
export const Warning = Template.bind({})
Warning.args = {
  variant: 'warning'
}
export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger'
}
export const Info = Template.bind({})
Info.args = {
  variant: 'info'
}
export const Light = Template.bind({})
Light.args = {
  variant: 'light'
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
