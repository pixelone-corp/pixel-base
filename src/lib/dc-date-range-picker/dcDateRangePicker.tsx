import React, { useEffect, useRef, useState } from 'react'
import DateRangePicker from './components/DateRangePicker/index'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import styled from 'styled-components'
import { Popover } from 'react-bootstrap'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'
import { addDays } from 'date-fns'
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
    <PixelFlexBox
      style={{ width: 'auto', position: 'relative', justifyContent: _position }}
      ref={datePickerRef}
    >
      <StyledDatePicker
        size={size}
        onClick={() => {
          setShowPopOver(!showPopOver)
        }}
      >
        <text
          style={{
            fontSize: size == 'sm' ? '12px' : '14px',
            color: 'rgb(120, 124, 158)',
            fontWeight: '600'
          }}
        >
          <PixelDate
            color='rgb(43, 43, 43)'
            style={{ fontWeight: '600' }}
            showFullDatePopover={false}
            className={'datewithtime'}
            format='pixelStandard'
            value={ranges?.start_date || new Date()}
          />
        </text>
        <span style={{ color: 'rgb(43, 43, 43)', fontWeight: '600' }}>-</span>
        <text
          style={{
            fontSize: size == 'sm' ? '12px' : '14px',
            color: 'rgb(120, 124, 158)',
            fontWeight: '600'
          }}
        >
          <PixelDate
            style={{ fontWeight: '600' }}
            color='rgb(43, 43, 43)'
            showFullDatePopover={false}
            className={'datewithtime'}
            format='pixelStandard'
            value={ranges?.end_date || new Date()}
          />
        </text>
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
          <PixelFlexBox height='auto' justifyContent='flex-end' gap='10px'>
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
          </PixelFlexBox>
        </StyledPopOver>
      )}
    </PixelFlexBox>
  )
})

const StyledDatePicker = styled.div<{ size }>`
  height: ${(props) => (props.size === 'sm' ? '30px' : '44px')};
  /* width:15%; */
  /* max-width: 15%; */
  min-width: ${(props) => (props.size === 'sm' ? '172px' : '215px')};
  padding: ${(props) => (props.size === 'sm' ? '0px 15px' : '0px 20px')};
  /* padding: 0px 20px 0px 0px; */
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
  /* background-color: #f7f7f7 !important; */
  background-color: #ffffff !important;
  position: relative;
`

const StyledPopOver = styled(Popover)<{ size }>`
  max-width: 910px;
  padding: 10px;
  border: 1px solid #e8e7ec;
  box-shadow: 0px 0px 7px 1px #7e7e7e38; /* box-shadow: -3px 4px 11px 2px rgba(169, 169, 169, 0.8); */
  top: ${(props) => (props.size === 'sm' ? '33px' : '50px')};
  /* left: -400px; */
  display: block;
  position: absolute;
  .popover-arrow {
    display: none;
  }
`
export default DcDateRangePicker
