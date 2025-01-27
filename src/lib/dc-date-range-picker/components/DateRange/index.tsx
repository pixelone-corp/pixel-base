import React, { Component, RefObject } from 'react'
import classnames from 'classnames'
import {
  isBefore,
  differenceInCalendarDays,
  addDays,
  min,
  isWithinInterval,
  max
} from 'date-fns'
import PropTypes from 'prop-types'
import coreStyles from '../../styles'
import { findNextRangeIndex, generateStyles } from '../../utils'
import Calendar from '../Calendar'
import { rangeShape } from '../DayCell'
import { $DCprimaryColor } from '../../../styleGuide'

interface DateRangeProps {
  ranges: any[] // Replace 'any' with the actual type of your ranges.
  moveRangeOnFirstSelection?: boolean
  retainEndDateOnFirstSelection?: boolean
  rangeColors?: string[]
  disabledDates?: Date[]
  onRangeFocusChange?: (focusedRange: [number, number]) => void
  focusedRange: any
  onChange: any
  maxDate: any
  className: any
}

interface DateRangeState {
  focusedRange: [number, number]
  preview:
    | any
    | {
        range: {
          startDate: Date
          endDate: Date
        }
        color: string
      }
}

class DateRange extends Component<DateRangeProps, DateRangeState> {
  private calendar: RefObject<Calendar>
  static propTypes: any
  styles: any
  static defaultProps: {
    classNames: {}
    ranges: any[]
    moveRangeOnFirstSelection: boolean
    retainEndDateOnFirstSelection: boolean
    rangeColors: string[]
    disabledDates: any[]
  }

  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      focusedRange: props.initialFocusedRange || [
        findNextRangeIndex(props.ranges),
        0
      ],
      preview: null
    }
    this.styles = generateStyles([coreStyles, props.classNames])
    this.calendar = React.createRef()
  }

  calcNewSelection = (value: any, isSingleValue = true) => {
    const focusedRange = this.props.focusedRange || this.state.focusedRange
    const {
      ranges,
      onChange,
      maxDate,
      moveRangeOnFirstSelection,
      retainEndDateOnFirstSelection,
      disabledDates
    } = this.props
    const focusedRangeIndex = focusedRange[0]
    const selectedRange = ranges[focusedRangeIndex]
    if (!selectedRange || !onChange) return {}
    let { startDate, endDate } = selectedRange
    const now = new Date()
    let nextFocusRange

    if (!isSingleValue) {
      startDate = value.startDate
      endDate = value.endDate
    } else if (focusedRange[1] === 0) {
      // startDate selection
      const dayOffset = differenceInCalendarDays(endDate || now, startDate)
      const calculateEndDate = () => {
        if (moveRangeOnFirstSelection) {
          return addDays(value, dayOffset)
        }
        if (retainEndDateOnFirstSelection) {
          if (!endDate || isBefore(value, endDate)) {
            return endDate
          }
          return value
        }
        return value || now
      }
      startDate = value
      endDate = calculateEndDate()
      if (maxDate) endDate = min([endDate, maxDate])
      nextFocusRange = [focusedRange[0], 1]
    } else {
      endDate = value
    }

    // Reverse dates if startDate before endDate
    let isStartDateSelected = focusedRange[1] === 0
    if (isBefore(endDate, startDate)) {
      isStartDateSelected = !isStartDateSelected
      ;[startDate, endDate] = [endDate, startDate]
    }

    const inValidDatesWithinRange = disabledDates.filter((disabledDate) =>
      isWithinInterval(disabledDate, {
        start: startDate,
        end: endDate
      })
    )

    if (inValidDatesWithinRange.length > 0) {
      if (isStartDateSelected) {
        startDate = addDays(max(inValidDatesWithinRange), 1)
      } else {
        endDate = addDays(min(inValidDatesWithinRange), -1)
      }
    }

    if (!nextFocusRange) {
      const nextFocusRangeIndex = findNextRangeIndex(
        this.props.ranges,
        focusedRange[0]
      )
      nextFocusRange = [nextFocusRangeIndex, 0]
    }
    return {
      wasValid: !(inValidDatesWithinRange.length > 0),
      range: { startDate, endDate },
      nextFocusRange: nextFocusRange
    }
  }

  setSelection = (value: Date, isSingleValue: boolean) => {
    const { onChange, ranges, onRangeFocusChange } = this.props
    const focusedRange = this.props.focusedRange || this.state.focusedRange
    const focusedRangeIndex = focusedRange[0]
    const selectedRange = ranges[focusedRangeIndex]
    if (!selectedRange) return
    const newSelection = this.calcNewSelection(value, isSingleValue)
    onChange!({
      [selectedRange.key || `range${focusedRangeIndex + 1}`]: {
        ...selectedRange,
        ...newSelection.range
      }
    })
    this.setState({
      focusedRange: newSelection.nextFocusRange,
      preview: null
    })
    onRangeFocusChange && onRangeFocusChange(newSelection.nextFocusRange)
  }

  handleRangeFocusChange = (focusedRange: [number, number]) => {
    this.setState({ focusedRange })
    this.props.onRangeFocusChange && this.props.onRangeFocusChange(focusedRange)
  }

  updatePreview = (
    val: any | { range: { startDate: Date; endDate: Date }; color: any }
  ) => {
    if (!val) {
      this.setState({ preview: null })
      return
    }
    const { rangeColors, ranges } = this.props

    const focusedRange = this.props.focusedRange || this.state.focusedRange
    const color =
      ranges[focusedRange[0]]?.color || rangeColors[focusedRange[0]] || 'color' // Update with the actual default color
    this.setState({ preview: { ...val.range, color } })
  }

  render() {
    return (
      <Calendar
        focusedRange={this.state.focusedRange}
        onRangeFocusChange={this.handleRangeFocusChange}
        preview={this.state.preview}
        onPreviewChange={(value) => {
          this.updatePreview(value ? this.calcNewSelection(value) : null)
        }}
        {...this.props}
        displayMode='dateRange'
        className={classnames(
          this.styles.dateRangeWrapper,
          this.props.className
        )}
        onChange={this.setSelection}
        updateRange={(val) => this.setSelection(val, false)}
        ref={(target) => {
          // @ts-ignore
          this.calendar = target
        }}
      />
    )
  }
}

DateRange.defaultProps = {
  classNames: {},
  ranges: [],
  moveRangeOnFirstSelection: false,
  retainEndDateOnFirstSelection: false,
  rangeColors: [$DCprimaryColor, '#3ecf8e', '#fed14c'],
  disabledDates: []
}

DateRange.propTypes = {
  ...Calendar.propTypes,
  onChange: PropTypes.func,
  onRangeFocusChange: PropTypes.func,
  className: PropTypes.string,
  ranges: PropTypes.arrayOf(rangeShape),
  moveRangeOnFirstSelection: PropTypes.bool,
  retainEndDateOnFirstSelection: PropTypes.bool
}

export default DateRange
