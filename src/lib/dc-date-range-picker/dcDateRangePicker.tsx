import React, { useEffect, useRef, useState } from 'react'
import DateRangePicker from './components/DateRangePicker/index'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import styled from 'styled-components'
import { Popover } from 'react-bootstrap'
import {
  addDays,
  endOfMonth,
  endOfYear,
  isSameDay,
  startOfDay,
  startOfMonth,
  startOfYear,
  subMonths,
  subYears
} from 'date-fns'
export interface DcDateRangePickerProps {
  onChange?: (item: any) => void
  onApply?: () => void
  ranges?: any
  month?: number
  className?: string
  context?: any
  dateRange?: any
  dateProps?: any
  refs?: any
  RangeColors?: any
  style?: any
  position?: string
  format?: string
  size?: string
}

import PixelDate from '../pixel-date/pixel-date'
import DcButton from '../DC-button/DC-button'
import DCFlexBox from '../DC-flex-box/DC-flex-box'
export const DcDateRangePicker = React.forwardRef<
  HTMLDivElement,
  DcDateRangePickerProps
>((props, ref) => {
  const {
    onChange = () => {},
    ranges,
    month,
    onApply,
    context,
    dateRange,
    dateProps,
    refs,
    RangeColors,
    style,
    size,
    position = 'right',
    ...rest
  } = props
  const [showPopOver, setShowPopOver] = useState(false)

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7)
    }
  ])
  useEffect(() => {
    if (ranges) {
      setRange([
        {
          ...range,
          startDate: new Date(ranges?.start_date),
          endDate: new Date(ranges?.end_date)
        }
      ])
    }
  }, [ranges])

  const showDate = (date, size) => {
    const today = startOfDay(new Date()) // Normalize to start of today
    const yesterday = startOfDay(addDays(today, -1))
    const last7Days = startOfDay(addDays(today, -6))
    const last30Days = startOfDay(addDays(today, -30))
    const last90Days = startOfDay(addDays(today, -90))

    const lastYearStart = startOfYear(subYears(today, 1)) // Jan 1 of last year
    const lastYearEnd = endOfYear(subYears(today, 1)) // Dec 31 of last year

    const lastMonthStart = startOfMonth(subMonths(today, 1)) // Start of last month
    const lastMonthEnd = endOfMonth(subMonths(today, 1)) // End of last month

    if (
      isSameDay(date[0].startDate, today) &&
      isSameDay(date[0].endDate, today)
    ) {
      return <DateLable size={size}>Today</DateLable>
    } else if (
      isSameDay(date[0].startDate, yesterday) &&
      isSameDay(date[0].endDate, yesterday)
    ) {
      return <DateLable size={size}>Yesterday</DateLable>
    } else if (
      isSameDay(date[0].startDate, last7Days) &&
      isSameDay(date[0].endDate, today)
    ) {
      return <DateLable size={size}>Last 7 days</DateLable>
    } else if (
      isSameDay(date[0].startDate, last30Days) &&
      isSameDay(date[0].endDate, today)
    ) {
      return <DateLable size={size}>Last 30 days</DateLable>
    } else if (
      isSameDay(date[0].startDate, last90Days) &&
      isSameDay(date[0].endDate, today)
    ) {
      return <DateLable size={size}>Last 90 days</DateLable>
    } else if (
      isSameDay(date[0].startDate, lastYearStart) &&
      isSameDay(date[0].endDate, lastYearEnd)
    ) {
      return <DateLable size={size}>Last year</DateLable>
    } else if (
      isSameDay(date[0].startDate, lastMonthStart) &&
      isSameDay(date[0].endDate, lastMonthEnd)
    ) {
      return <DateLable size={size}>Last month</DateLable>
    } else {
      return (
        <React.Fragment>
          {' '}
          <DateLable size={size}>
            <PixelDate
              color='rgb(43, 43, 43)'
              style={{ fontWeight: '600' }}
              showFullDatePopover={false}
              className={'datewithtime'}
              format='pixelStandard'
              value={date[0].startDate || new Date()}
            />
          </DateLable>
          <span style={{ color: 'rgb(43, 43, 43)', fontWeight: '600' }}>-</span>
          <DateLable size={size}>
            <PixelDate
              style={{ fontWeight: '600' }}
              color='rgb(43, 43, 43)'
              showFullDatePopover={false}
              className={'datewithtime'}
              format='pixelStandard'
              value={date[0].endDate || new Date()}
            />
          </DateLable>
        </React.Fragment>
      )
    }
  }

  const datePickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowPopOver(false)
      }
    }

    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [])

  const handelApply = () => {
    setShowPopOver(false)
    onApply()
  }

  const _position = position === 'left' ? 'flex-start' : 'flex-end'
  const handleChange = (item) => {
    onChange(item)
  }
  return (
    <DCFlexBox
      style={{ width: 'auto', position: 'relative', justifyContent: _position }}
      ref={datePickerRef}
    >
      <StyledDatePicker
        size={size}
        onClick={() => {
          setShowPopOver(!showPopOver)
        }}
      >
        {showDate(range)}
      </StyledDatePicker>

      {showPopOver && (
        <StyledPopOver
          size={size}
          style={position ? { right: '0' } : { right: '0' }}
        >
          <DateRangePicker
            onChange={(e) => {
              handleChange(e)
            }}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            months={month}
            ranges={range}
            direction='horizontal'
            context={context}
            dateRange={dateRange}
            props={dateProps}
            refs={refs}
            RangeColors={RangeColors}
            style={style}
          />
          <DCFlexBox height='auto' justifyContent='flex-end' gap='10px'>
            <DcButton
              size='sm'
              variant='outline-secondary'
              onClick={() => setShowPopOver(!showPopOver)}
            >
              Close
            </DcButton>
            <DcButton size='sm' onClick={handelApply}>
              Apply
            </DcButton>
          </DCFlexBox>
        </StyledPopOver>
      )}
    </DCFlexBox>
  )
})

const DateLable = styled.div<{ size }>`
  font-size: ${(props) => (props.size == 'sm' ? '12px' : '14px')};
  color: rgb(43, 43, 43);
  font-weight: 600;
  // change font size 12px to 10px on screen size below 1400px
  @media (max-width: 1400px) {
    font-size: 10px !important;
  }
`
const StyledDatePicker = styled.div<{ size }>`
  height: ${(props) => (props.size === 'sm' ? '30px' : '44px')};

  /* min-width: ${(props) => (props.size === 'sm' ? '172px' : '215px')}; */
  padding: ${(props) => (props.size === 'sm' ? '0px 15px' : '0px 20px')};
  min-height: ${(props) => (props.size === 'sm' ? '30px' : '44px')};
  max-height: ${(props) => (props.size === 'sm' ? '30px' : '44px')};
  cursor: pointer;
  gap: ${(props) => (props.size === 'sm' ? '3px' : '10px')};
  border: 1px solid #dee2e6 !important;
  color: '#737373';
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff !important;
  position: relative;
`

const StyledPopOver = styled(Popover)<{ size }>`
  max-width: 910px;
  padding: 10px;
  border: 1px solid #e8e7ec;
  box-shadow: 0px 0px 7px 1px #7e7e7e38;
  top: ${(props) => (props.size === 'sm' ? '33px' : '50px')};
  display: block;
  position: absolute;
  .popover-arrow {
    display: none;
  }
`
export default DcDateRangePicker
