import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelSpinner from './pixel-spinner'

export default {
  title: 'Pixel Spinner',
  component: PixelSpinner,
 
} as ComponentMeta<typeof PixelSpinner>

const Template: ComponentStory<typeof PixelSpinner> = (args) => {
  return (
    <React.Fragment>
      <PixelSpinner isShow={true} size='60px'/>
    </React.Fragment>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  isShow: true
}
