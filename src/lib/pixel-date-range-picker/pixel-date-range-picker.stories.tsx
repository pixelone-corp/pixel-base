// @ts-nocheck
import React, { useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import {PixelDateRangePicker} from '../../index'
import { addDays } from 'date-fns'
export default {
  title: 'Pixel DatePicker',
  component: PixelDateRangePicker
} as ComponentMeta<typeof PixelDateRangePicker>
const Template: ComponentStory<typeof PixelDateRangePicker> = (args) => {
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
    alert('this is applied funtion')
  }
  return (
    <React.Fragment>
      <PixelDateRangePicker
        onChange={handelChange}
        ranges={state}
        month={2}
        onApply={onApply}
        position='right'
        {...args}
      />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  value: new Date(),
  format: 'dateWithTime',
  size: '15px'
}
