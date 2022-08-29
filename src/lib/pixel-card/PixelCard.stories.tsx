import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pixelcard from './pixel-card'
import PixelButton from '../pixel-button/pixel-button'

export default {
  title: 'Pixel Card',
  component: Pixelcard
} as ComponentMeta<typeof Pixelcard>

const Template: ComponentStory<typeof Pixelcard> = (args) => {
  return (
    <React.Fragment>
      <Pixelcard {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  cardTitle: 'Card Title',
  subTitle: 'Sub Title',
  children: (
    <React.Fragment>
      Pixel React Components Libray By Pixel Software Solutions
    </React.Fragment>
  ),
  headerActions: (
    <React.Fragment>
      <PixelButton>Header Actions</PixelButton>
    </React.Fragment>
  ),
  footerActions: (
    <React.Fragment>
      <PixelButton>Footer Actions</PixelButton>
    </React.Fragment>
  )
}
