// @ts-nocheck
import React, { useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PixelDateRangePicker } from '../../index'
import { addDays } from 'date-fns'
import { log } from 'console'
export default {
  title: 'Pixel DateRangePicker',
  component: PixelDateRangePicker
} as ComponentMeta<typeof PixelDateRangePicker>
const Template: ComponentStory<typeof PixelDateRangePicker> = (args) => {
  const [state, setState] = useState({
    start_date: new Date(),
    end_date: addDays(new Date(), 7)
  })

  interface DateRangeItem {
    startDate: Date
    endDate: Date
    key: string
  }
  // const handelChange = (item:any) => {
    
  //   setState({
  //     ...state,
  //     start_date: item?.range1?.startDate,
  //     end_date: item?.range1?.endDate
  //   })
  // }
  const onApply = () => {
    alert('this is applied funtion')
  }
  return (
    <React.Fragment>
      <PixelDateRangePicker
        onChange={(e) => {
          // handelChange(e)
          alert('thsi is alert')
          console.log(e);
          
          setState({
            ...state,
            start_date: e.target.value?.range1?.startDate,
            end_date: item?.range1?.endDate
          })
        }}
        ranges={state}
        month={2}
        onApply={onApply}
        position='right'
        {...args}
        format='dateWithTime'
        size='15px'
      />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
