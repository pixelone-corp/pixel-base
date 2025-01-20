import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DcUl from './dc-ul'
import DcLi from '../dc-li/dc-li'

export default {
  title: 'DC Ul',
  component: DcUl
} as ComponentMeta<typeof DcUl>

const Template: ComponentStory<typeof DcUl> = (args) => {
  return (
    <DcUl {...args}>
      <DcLi>Item 1</DcLi>
      <DcLi isActive>Item 2</DcLi>
      <DcLi>Item 3</DcLi>
    </DcUl>
  )
}

export const Default = Template.bind({})
Default.args = {
  gap: '10px',
  padding: '15px',
  margin: '5px'
}
