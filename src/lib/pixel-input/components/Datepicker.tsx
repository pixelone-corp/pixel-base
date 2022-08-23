import React from 'react'
import { DateSingleInput } from '@datepicker-react/styled'
import styled from 'styled-components'
import moment from 'moment'
const Datepicker = (props) => {
  return (
    <Date>
      {' '}
      <StyledDatePicker
        ref={props.ref}
        className={props.className}
        disabled={props.disabled}
        aria-invalid={props.error}
        {...props.rest}
        showResetDate={props.showResetDate}
        showClose={props.showClose}
        inputId={props.inputId}
        onChange={props.onChange}
        onDateChange={props.onDateChange}
        onFocusChange={props.onFocusChange}
        date={props.date} // Date or null
        showDatepicker={props.showDatepicker}
        displayFormat={(date) => {
          return moment(date).utc().format('YYYY-MM-DD')
        }}
      />
    </Date>
  )
}
const StyledDatePicker = styled(DateSingleInput)``
const Date = styled.div`
  .sc-iBkjds {
    min-height: 38px !important;
    border-radius: 0.25rem !important;
    overflow: hidden;
  }
`
export default Datepicker
