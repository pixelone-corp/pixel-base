import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDraggable from './pixel-draggable'

export default {
  title: 'Pixel Draggable',
  component: PixelDraggable
} as ComponentMeta<typeof PixelDraggable>

const Template: ComponentStory<typeof PixelDraggable> = (args) => {
  console.log(args)
  return (
    <React.Fragment>
      <PixelDraggable {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
