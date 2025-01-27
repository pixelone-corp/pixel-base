import React, { useEffect, useRef, useState } from 'react'
import DateRangePicker from './components/DateRangePicker/index'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import styled from 'styled-components'
import { Popover } from 'react-bootstrap'
import { PixelIcon } from '../../lib/pixel-button-icon/pixel-icon'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'
import { addDays } from 'date-fns'
import calendar from './calendaar.svg'
export interface DcDateRangePickerProps {
  onChange?: (item: any) => void
  onApply?: () => void
  ranges?: any
  month?: number
  className?: string
  context?: any
  dateRange?: any
  dateProps?: any
  refs?: any // locale={'enUS from locale'}
  RangeColors?: any
  style?: any
  position?: string
  format?: string
  size?: string
}

import PixelDate from '../pixel-date/pixel-date'
import PixelButton from '../pixel-button/pixel-button'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
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
        onClick={() => {
          setShowPopOver(!showPopOver)
        }}
      >
        {/* <text style={{ fontSize: '0.8vw' }}>
          <LabelLeft>{'Start Date'}</LabelLeft>
        </text>
        <text style={{ fontSize: '0.8vw' }}>
          <Label>{'End Date'}</Label>
        </text> */}
        {/* <PixelIcon color='#737373' icon={faCalendarWeek} /> */}
        {/* <img src={calendar} alt='' height={'60%'} /> */}
        <text style={{ fontSize: '1rem', color: '#2b2b2b' }}>
          <PixelDate
            showFullDatePopover={false}
            className={'datewithtime'}
            format='pixelStandard'
            value={ranges?.start_date || new Date()}
          />
        </text>
        {/* <PixelIcon color='#737373' icon={faArrowRight} /> */}
        <span>to</span>
        <text style={{ fontSize: '1rem', color: '#2b2b2b' }}>
          <PixelDate
            showFullDatePopover={false}
            className={'datewithtime'}
            format='pixelStandard'
            value={ranges?.end_date || new Date()}
          />
        </text>
      </StyledDatePicker>

      {showPopOver && (
        <StyledPopOver style={position ? { right: '0' } : { right: '0' }}>
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
            refs={refs} // locale={'enUS from locale'}
            RangeColors={RangeColors}
            style={style}
            // focusedRange={[]}
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

const StyledDatePicker = styled.div`
  height: 40px;
  /* width:15%; */
  /* max-width: 15%; */
  min-width: 245px;
  padding: 0px 20px;
  /* padding: 0px 20px 0px 0px; */
  min-height: 40px;
  max-height: 40px;
  cursor: pointer;
  gap: 10px;
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
const LabelLeft = styled.div`
  position: absolute;
  left: 50px;
  top: -8px;
  z-index: 88888888;
  font-size: 11px;
  background: linear-gradient(rgb(255, 255, 255) 52%, transparent 48);
  color: rgb(115, 115, 115);
`
const Label = styled.div`
  position: absolute;
  left: 160px;
  top: -8px;
  z-index: 88888888;
  font-size: 11px;
  background: linear-gradient(rgb(255, 255, 255) 52%, transparent 48);
  color: rgb(115, 115, 115);
`

const StyledPopOver = styled(Popover)`
  max-width: 910px;
  padding: 10px;
  border: 1px solid #e8e7ec;
  /* box-shadow: -3px 4px 11px 2px rgba(169, 169, 169, 0.8); */
  top: 50px;
  /* left: -400px; */
  display: block;
  position: absolute;
  .popover-arrow {
    display: none;
  }
`
export default DcDateRangePicker
