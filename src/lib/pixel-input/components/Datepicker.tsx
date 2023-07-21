import React, { useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import styled from 'styled-components'
import moment  from 'moment'
import { Calendar } from 'react-date-range'
import { $primaryColor } from '../../styleGuide'
import { Popover } from 'react-bootstrap'
import { PixelIcon } from '../../pixel-button-icon/pixel-icon'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import * as locales from 'react-date-range/dist/locale'


const Datepicker = (props) => {
  const [newDate, setNewDate] = useState(moment().format('DD MMM YYYY'))
  const [showPopOver, setShowPopOver] = useState(false)

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

  return (
    <Div ref={datePickerRef}>
      {props.isShowLabel && <Label>Date</Label>}

      <StyledDatePicker
        onClick={() => {
          setShowPopOver(!showPopOver)
        }}
      >
        <PixelIcon color='#737373' icon={faCalendar} />
        {props.value ? props.value : newDate}
      </StyledDatePicker>

      {showPopOver && (
        <React.Fragment>
          <PopOverDiv>
            <Calendar
              width='100%'
              color={$primaryColor}
              onChange={(date) => {
                setShowPopOver(false)
                console.log(date)
                props.onChange(date)
                setNewDate(moment(date).format('DD MMM YYYY'))
              }}
              locale={locales.enUS} 
              date={new Date(newDate)}
            />
          </PopOverDiv>
        </React.Fragment>
      )}
    </Div>
  )
}
const StyledDatePicker = styled.div`
  height: 40px;
  width: 100%;
  padding: 10px 24px 10px 24px;
  cursor: pointer;
  gap: 10px;
  border: 1px solid #dee2e6 !important;
  color: '#737373';
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f7f7 !important;
  position: absolute;
`
const Label = styled.div`
  position: absolute;
  left: 13px;
  top: -8px;
  z-index: 88888888;
  font-size: 11px;
  background: linear-gradient(rgb(255, 255, 255) 52%, transparent 48);
  color: rgb(115, 115, 115);
`
const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`
const PopOverDiv = styled(Popover)`
  max-width: 500px;
  border: none;
  box-shadow: -3px 4px 11px 2px rgba(169, 169, 169, 0.8);
  top: 50px;
  display: block;
  .popover-arrow {
    display: none;
  }
  position: absolute;
`

export default Datepicker
