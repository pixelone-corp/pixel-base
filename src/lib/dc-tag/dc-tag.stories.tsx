import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelTag from './dc-tag'

export default {
  title: 'Dc Tag',
  component: PixelTag
} as ComponentMeta<typeof PixelTag>

const Template: ComponentStory<typeof PixelTag> = (args) => {
  return (
    <React.Fragment>
      <PixelTag {...args}>new</PixelTag>
      <PixelTag {...args}>Closed</PixelTag>
      <PixelTag {...args}>Paid</PixelTag>
      <PixelTag {...args}>completed</PixelTag>
      <PixelTag {...args}>Canceled</PixelTag>
      <PixelTag {...args}>Post Delivery</PixelTag>
    </React.Fragment>
  )
}
export const All = Template.bind({})
All.args = {}
