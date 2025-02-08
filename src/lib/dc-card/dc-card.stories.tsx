import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DcCard from './dc-card'

export default {
  title: 'DC Card',
  component: DcCard
} as ComponentMeta<typeof DcCard>

const Template: ComponentStory<typeof DcCard> = (args) => {
  return (
    <React.Fragment>
      <DcCard cursor='pointer' {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  variant: 'simple',
  data: {
    title: 'Card Title',
    text: 'Card Value',
    button: 'faTrademark',
    header: 'Card Header'
  },
  onClick: () => {}
}
export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline-primary',
  data: {
    title: 'Card Title',
    text: 'Card Value',
    button: 'faTrademark',
    header: 'Card Header'
  },
  onClick: () => {}
}
