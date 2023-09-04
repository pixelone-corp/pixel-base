import classnames from 'classnames'
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  addDays,
} from 'date-fns'

export function calcFocusDate(
  currentFocusedDate: Date | null,
  props: {
    shownDate: Date | null
    date: Date | null
    months: number
    ranges: {
      startDate?: Date
      endDate?: Date
    }[]
    focusedRange: number[]
    displayMode: 'dateRange' | 'date'
  },
): Date {
  const { shownDate, date, months, ranges, focusedRange, displayMode } = props

  // find primary date according to the props
  let targetInterval: {
    start: Date | undefined
    end: Date | undefined
  }

  if (displayMode === 'dateRange') {
    const range = ranges[focusedRange[0]] || {}
    targetInterval = {
      start: range.startDate,
      end: range.endDate,
    }
  } else {
    targetInterval = {
      start: date,
      end: date,
    }
  }

  targetInterval.start = startOfMonth(targetInterval.start || new Date())
  targetInterval.end = endOfMonth(targetInterval.end || targetInterval.start)
  const targetDate =
    targetInterval.start || targetInterval.end || shownDate || new Date()

  // initial focus
  if (!currentFocusedDate) return shownDate || targetDate

  // // just return targetDate for native scrolled calendars
  // if (props.scroll.enabled) return targetDate;
  if (
    differenceInCalendarMonths(targetInterval.start, targetInterval.end) >
    months
  ) {
    // don't change focused if new selection is in view area
    return currentFocusedDate
  }

  return targetDate
}

export function findNextRangeIndex(
  ranges: {
    autoFocus?: boolean
    disabled?: boolean
  }[],
  currentRangeIndex = -1,
): number {
  const nextIndex = ranges.findIndex(
    (range, i) =>
      i > currentRangeIndex && range.autoFocus !== false && !range.disabled,
  )
  if (nextIndex !== -1) return nextIndex

  return ranges.findIndex(
    (range) => range.autoFocus !== false && !range.disabled,
  )
}

export function getMonthDisplayRange(
  date: Date,
  dateOptions: Record<string, any>,
  fixedHeight: boolean,
): {
  start: Date
  end: Date
  startDateOfMonth: Date
  endDateOfMonth: Date
} {
  const startDateOfMonth = startOfMonth(date, dateOptions)
  const endDateOfMonth = endOfMonth(date, dateOptions)
  const startDateOfCalendar = startOfWeek(startDateOfMonth, dateOptions)
  let endDateOfCalendar = endOfWeek(endDateOfMonth, dateOptions)

  if (
    fixedHeight &&
    differenceInCalendarDays(endDateOfCalendar, startDateOfCalendar) <= 34
  ) {
    endDateOfCalendar = addDays(endDateOfCalendar, 7)
  }

  return {
    start: startDateOfCalendar,
    end: endDateOfCalendar,
    startDateOfMonth,
    endDateOfMonth,
  }
}

export function generateStyles(
  sources: Record<string, string>[],
): Record<string, string> {
  if (!sources.length) return {}
  const generatedStyles = sources
    .filter((source) => Boolean(source))
    .reduce((styles, styleSource) => {
      Object.keys(styleSource).forEach((key) => {
        styles[key] = classnames(styles[key], styleSource[key])
      })
      return styles
    }, {} as Record<string, string>)

  return generatedStyles
}
