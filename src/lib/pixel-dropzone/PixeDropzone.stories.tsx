import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDropzone from './pixel-dropzone'

export default {
  title: 'Pixel Dropzone',
  component: PixelDropzone
} as ComponentMeta<typeof PixelDropzone>
const Template: ComponentStory<typeof PixelDropzone> = (args) => {
  return (
    <React.Fragment>
      <PixelDropzone {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {}
