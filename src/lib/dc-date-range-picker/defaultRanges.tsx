import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays,
  startOfYear,
  addYears,
  endOfYear
} from 'date-fns'

const defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfLastYear: startOfYear(addYears(new Date(), -1)),
  endOfLastYear: endOfYear(addYears(new Date(), -1)),
  startOfThisYear: startOfYear(addYears(new Date(), 0)),
  endOfThisYear: endOfYear(addYears(new Date(), 1)),
  // add last 7 days here
  startOfLast7Days: startOfDay(addDays(new Date(), -6)),
  endOfLast7Days: endOfDay(new Date())
}

const staticRangeHandler = {
  range: {},
  isSelected(range) {
    const definedRange = this.range()
    return (
      isSameDay(range.startDate, definedRange.startDate) &&
      isSameDay(range.endDate, definedRange.endDate)
    )
  }
}

export function createStaticRanges(ranges) {
  return ranges.map((range) => ({ ...staticRangeHandler, ...range }))
}

export const defaultStaticRanges = createStaticRanges([
  {
    label: 'Today',
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday
    })
  },
  {
    label: 'Yesterday',
    range: () => ({
      startDate: defineds.startOfYesterday,
      endDate: defineds.endOfYesterday
    })
  },
  {
    label: 'Last 7 days',
    range: () => ({
      startDate: defineds.startOfLast7Days,
      endDate: defineds.endOfLast7Days
    })
  },
  {
    label: 'Last 30 Days', // Change label to "Last 30 Days"
    range: () => ({
      startDate: addDays(defineds.startOfToday, -29), // Subtract 29 days to get the last 30 days
      endDate: defineds.endOfToday
    })
  },
  {
    label: 'Last 90 Days', // Change label to "Last 90 Days"
    range: () => ({
      startDate: addDays(defineds.startOfToday, -89), // Subtract 89 days to get the last 90 days
      endDate: defineds.endOfToday
    })
  },
  // add this month here
  {
    label: 'This Month',
    range: () => ({
      startDate: defineds.startOfMonth,
      endDate: defineds.endOfToday
    })
  },
  {
    label: 'Last Month',
    range: () => ({
      startDate: defineds.startOfLastMonth,
      endDate: defineds.endOfLastMonth
    })
  },
  {
    label: 'This Year',
    range: () => ({
      startDate: defineds.startOfThisYear,
      endDate: defineds.endOfToday
    })
  },
  {
    label: 'Last Year',
    range: () => ({
      startDate: defineds.startOfLastYear,
      endDate: defineds.endOfLastYear
    })
  }
])

// export const defaultInputRanges = [
//   {
//     label: 'days up to today',
//     range(value) {
//       return {
//         startDate: addDays(
//           defineds.startOfToday,
//           (Math.max(Number(value), 1) - 1) * -1,
//         ),
//         endDate: defineds.endOfToday,
//       }
//     },
//     getCurrentValue(range) {
//       if (!isSameDay(range.endDate, defineds.endOfToday)) return '-'
//       if (!range.startDate) return '∞'
//       return differenceInCalendarDays(defineds.endOfToday, range.startDate) + 1
//     },
//   },
//   {
//     label: 'days starting today',
//     range(value) {
//       const today = new Date()
//       return {
//         startDate: today,
//         endDate: addDays(today, Math.max(Number(value), 1) - 1),
//       }
//     },
//     getCurrentValue(range) {
//       if (!isSameDay(range.startDate, defineds.startOfToday)) return '-'
//       if (!range.endDate) return '∞'
//       return differenceInCalendarDays(range.endDate, defineds.startOfToday) + 1
//     },
//   },
// ]
