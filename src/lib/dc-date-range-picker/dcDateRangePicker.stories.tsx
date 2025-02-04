import React, { useState, useEffect } from 'react'
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
    end_date: new Date()
  })

  // Set default date range to last 7 days
  useEffect(() => {
    setState({
      start_date: new Date(addDays(new Date(), -90)),
      end_date: new Date()
    })
  }, [])

  const onApply = () => {
    alert('Date range applied!')
  }

  return (
    <React.Fragment>
      <DcDateRangePicker
        onChange={(e: any) => {
          setState({
            start_date: e.range1?.startDate || state.start_date,
            end_date: e.range1?.endDate || state.end_date
          })
        }}
        ranges={{
          start_date: state.start_date,
          end_date: state.end_date
        }}
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
