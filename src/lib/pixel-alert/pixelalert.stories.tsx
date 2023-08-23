import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelAlert, { PixelAlertProps } from './pixel-alert'

export default {
  title: 'Pixel Alert',
  component: PixelAlert
} as ComponentMeta<typeof PixelAlert>

const Template: ComponentStory<typeof PixelAlertProps> = (args) => {

  return (
    <React.Fragment>

      <PixelAlert {...args}>
        Pixel Alert
      </PixelAlert>

    </React.Fragment>
  )
}

export const Simple = Template.bind({})

Simple.args = {
  variant: 'info',
}
