import React, { useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import styled from 'styled-components'
import moment from 'moment'
import { Calendar } from 'react-date-range'
import { $primaryColor } from '../../styleGuide'
import { Popover } from 'react-bootstrap'
import * as locales from 'react-date-range/dist/locale'
import PixelFlexBox from '../../pixel-flex-box/pixel-flex-box'
import { parseISO } from 'date-fns'

const DCDatepicker = (props) => {
  const [showPopOver, setShowPopOver] = useState(false)
  const [newDate, setNewDate] = useState(
    props.value ? parseISO(props.value) : new Date() // Convert props.value to Date
  )

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
    <PixelFlexBox
      style={{ marginBottom: '40px' }}
      justifyContent='flex-end'
      ref={datePickerRef}
    >
      <StyledDatePicker
        onClick={() => {
          setShowPopOver(!showPopOver)
        }}
      >
        {props.value
          ? moment(props.value).format('YYYY-MM-DD ')
          : moment().format('YYYY-MM-DD')}
      </StyledDatePicker>

      {showPopOver && (
        <React.Fragment>
          <StyledPopOver>
            <Calendar
              color={$primaryColor}
              onChange={(item) => {
                props.onChange(item) // Pass the new date to parent

                // setNewDate(new Date(item)) // Update state with a proper Date object
                setShowPopOver(false)
              }}
              locale={locales[{ enUS: 'English (United States)' }]}
              date={newDate}
            />
          </StyledPopOver>
        </React.Fragment>
      )}
    </PixelFlexBox>
  )
}
const StyledDatePicker = styled.div`
  appearance: none;
  background-clip: padding-box;
  background-color: #fff;
  border: 0.0625rem solid #d2d4e4;
  border-radius: 0.375rem;
  color: #43476b;
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.5625rem 1.125rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  cursor: pointer;
  gap: 10px;
  color: '#737373';
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
`

const StyledPopOver = styled(Popover)`
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

export default DCDatepicker
