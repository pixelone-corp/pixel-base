import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DcDateRangePicker from './dcDateRangePicker'
import { addDays } from 'date-fns'
export default {
  title: 'DC DateRangePicker',
  component: DcDateRangePicker
} as ComponentMeta<typeof DcDateRangePicker>
const Template: ComponentStory<typeof DcDateRangePicker> = (args) => {
  const [state, setState] = useState<any>({
    start_date: new Date(),
    end_date: addDays(new Date(), 7)
  })

  const onApply = () => {
    alert('this is applied funtion')
  }
  return (
    <React.Fragment>
      <DcDateRangePicker
        onChange={(e: any) => {
          setState({
            ...state,
            start_date: e.target.value?.range1?.startDate,
            end_date: e?.range1?.endDate
          })
        }}
        ranges={state}
        month={2}
        onApply={onApply}
        position='right'
        {...args}
        format='dateWithTime'
      />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
