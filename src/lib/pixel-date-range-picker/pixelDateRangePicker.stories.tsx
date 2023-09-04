import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDate from './pixelDateRangePicker'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'

export default {
  title: 'Pixel DatePicker',
  component: PixelDate,
} as ComponentMeta<typeof PixelDate>

const Template: ComponentStory<typeof PixelDate> = (args) => {
  console.log(args)
  return (
    <React.Fragment>
      <PixelFlexBox
        justifyContent='flex-start'
        alignItems='center'
        alignContent='center'
        height='500px'
        margin='100px'
      >
        <PixelDate  {...args} />
      </PixelFlexBox>

    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  value: new Date(),
  format: 'dateWithTime',
  size: '15px',
}
