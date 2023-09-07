import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelDateRange from './pixelDateRangePicker'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'
import { addDays } from 'date-fns'
export default {
  title: 'Pixel DatePicker',
  component: PixelDateRange,
} as ComponentMeta<typeof PixelDateRange>
const Template: ComponentStory<typeof PixelDateRange> = (args) => {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  interface DateRangeItem {
    selection: {
      startDate: Date
      endDate: Date
      key: string
    }
  }
  const handelChange = (item: DateRangeItem) => {
    
    setState([item.selection])
  }
  const onApply = () => {
    
    // setState([item.selection])
    
  }
  return (
    <React.Fragment>
      <PixelFlexBox
        justifyContent='flex-start'
        alignItems='center'
        alignContent='center'
        height='500px'
        margin='100px'
      >
        <PixelDateRange  onChange={handelChange} ranges={state} month={2} handelApply={onApply}  {...args} />
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
