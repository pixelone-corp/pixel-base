import React, { ChangeEvent, useState } from 'react'
import DateRangePicker from './components/DateRangePicker/index'

export interface PixelDateRangePickerProps {
  className?: string
}
import { addDays } from 'date-fns'

const PixelDateRangePicker = React.forwardRef<
  HTMLDivElement,
  PixelDateRangePickerProps
>(({ ...rest }, ref) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])
  interface DateRangeItem {
    selection: {
      startDate: Date;
      endDate: Date;
      key: string;
    };
  }
  console.log(state); 
  const handelChange = (item: DateRangeItem) => {
   
    setState([item.selection])
  }


  
  return (
    <DateRangePicker
      onChange={ handelChange
      }
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction='horizontal'
      // locale={'enUS from locale'}
    />
  )
})

export default PixelDateRangePicker
