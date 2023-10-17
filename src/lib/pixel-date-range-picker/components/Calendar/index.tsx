// @ts-nocheck
import React, { PureComponent, ReactNode } from 'react'
import ReactList from 'react-list'
import classnames from 'classnames'
import PixelText from '../../../pixel-text/pixel-text'
import {
  addMonths,
  subMonths,
  format,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameDay,
  setYear,
  setMonth,
  differenceInCalendarMonths,
  startOfMonth,
  endOfMonth,
  addDays,
  isSameMonth,
  differenceInDays,
  min,
  max
} from 'date-fns'
import defaultLocale from 'date-fns/locale/en-US'
import PropTypes from 'prop-types'
import { shallowEqualObjects } from 'shallow-equal'
import { ariaLabelsShape } from '../../accessibility/index'
import coreStyles from '../../styles'
import {
  calcFocusDate,
  generateStyles,
  getMonthDisplayRange
} from '../../utils'
import DateInput from '../DateInput/index'
import { rangeShape } from '../DayCell'
import Month from '../Month'
import PixelFlexBox from '../../../pixel-flex-box/pixel-flex-box'

interface Range {
  startDate: Date
  endDate: Date
  color?: string
}

interface DragState {
  status: boolean
  range: Range
  disablePreview: boolean
}

interface ScrollArea {
  enabled: boolean
  monthHeight?: number
  longMonthHeight?: number
  calendarWidth?: any
  calendarHeight?: number
}

interface CalendarProps {
  showMonthArrow?: boolean
  showMonthAndYearPickers?: boolean
  disabledDates?: Date[]
  disabledDay?: (date: Date) => boolean
  minDate?: Date | null |  undefined
  maxDate?: Date | null |  undefined
  date?: Date | null |  undefined
  onChange?: any | null |  undefined
  onPreviewChange?: (val: Date | null) => void
  onRangeFocusChange?: (focusedRange: [number, number]) => void
  classNames?: Record<string, string>
  locale?: Record<string, any>
  shownDate?: Date | undefined
  onShownDateChange?: (date: Date) => void
  ranges?: Range[]
  preview?: {
    startDate: Date
    endDate: Date
    color: string
  }
  dateDisplayFormat?: string
  monthDisplayFormat?: string
  weekdayDisplayFormat?: string
  weekStartsOn?: number
  dayDisplayFormat?: string
  focusedRange?: [number, number]
  initialFocusedRange?: [number, number]
  months?: number
  className?: string
  showDateDisplay?: boolean
  showPreview?: boolean
  displayMode?: 'dateRange' | 'date'
  color?: string
  updateRange?: (val: any) => void
  scroll?: ScrollArea
  direction?: 'vertical' | 'horizontal'
  startDatePlaceholder?: string
  endDatePlaceholder?: string
  navigatorRenderer?: (
    focusedDate: Date,
    changeShownDate: (value: number, mode: string) => void,
    props: CalendarProps
  ) => ReactNode
  rangeColors?: string[]
  editableDateInputs?: boolean
  dragSelectionEnabled?: boolean
  fixedHeight?: boolean
  calendarFocus?: 'forwards' | 'backwards'
  preventSnapRefocus?: boolean
  ariaLabels?: any
  calendar?: any
}

class Calendar extends PureComponent<CalendarProps> {
  private dateOptions: { locale: Record<string, any>; weekStartsOn?: number }
  private styles: Record<string, any>
  private listSizeCache: Record<number, number>
  private isFirstRender: boolean
  private list: ReactList | null
  static propTypes: any

  constructor(props: any, context: any) {
    super(props, context)
    this.dateOptions = { locale: props.locale }
    if (props.weekStartsOn !== undefined)
      this.dateOptions.weekStartsOn = props.weekStartsOn
    this.styles = generateStyles([coreStyles, props.classNames])
    this.listSizeCache = {}
    this.isFirstRender = true
    this.list = null
    this.state = {
      monthNames: this.getMonthNames(),
      focusedDate: calcFocusDate(null, props),
      drag: {
        status: false,
        range: { startDate: null, endDate: null },
        disablePreview: false
      },
      scrollArea: this.calcScrollArea(props)
    }
  }

  getMonthNames() {
    return [...Array(12).keys()].map((i) => this.props.locale.localize.month(i))
  }

  calcScrollArea(props: any): ScrollArea {
    const { direction, months, scroll } = props
    if (!scroll.enabled) return { enabled: false }

    const longMonthHeight = scroll.longMonthHeight || scroll.monthHeight
    if (direction === 'vertical') {
      return {
        enabled: true,
        monthHeight: scroll.monthHeight || 220,
        longMonthHeight: longMonthHeight || 260,
        calendarWidth: 'auto',
        calendarHeight:
          (scroll.calendarHeight || longMonthHeight || 240) * months
      }
    }
    return {
      enabled: true,
      monthWidth: scroll.monthWidth || 332,
      calendarWidth:
        (scroll.calendarWidth || scroll.monthWidth || 332) * months,
      monthHeight: longMonthHeight || 300,
      calendarHeight: longMonthHeight || 300
    }
  }

  focusToDate = (
    date: any,
    props: CalendarProps = this.props,
    preventUnnecessary = true
  ) => {
    if (!props.scroll.enabled) {
      if (preventUnnecessary && props.preventSnapRefocus) {
        const focusedDateDiff = differenceInCalendarMonths(
          date,
          this.state.focusedDate
        )
        const isAllowedForward =
          props.calendarFocus === 'forwards' && focusedDateDiff >= 0
        const isAllowedBackward =
          props.calendarFocus === 'backwards' && focusedDateDiff <= 0
        if (
          (isAllowedForward || isAllowedBackward) &&
          Math.abs(focusedDateDiff) < props.months
        ) {
          return
        }
      }
      this.setState({ focusedDate: date })
      return
    }
    const targetMonthIndex = differenceInCalendarMonths(
      date,
      props.minDate,
      this.dateOptions
    )
    const visibleMonths = this.list!.getVisibleRange()
    if (preventUnnecessary && visibleMonths.includes(targetMonthIndex)) return
    this.isFirstRender = true
    this.list!.scrollTo(targetMonthIndex)
    this.setState({ focusedDate: date })
  }

  updateShownDate = (props: CalendarProps = this.props) => {
    const newProps = props.scroll.enabled
      ? {
          ...props,
          months: this.list!.getVisibleRange().length
        }
      : props
    const newFocus = calcFocusDate(this.state.focusedDate, newProps)
    this.focusToDate(newFocus, newProps)
  }

  updatePreview = (val: Date | null) => {
    if (!val) {
      this.setState({ preview: null })
      return
    }
    const preview = {
      startDate: val,
      endDate: val,
      color: this.props.color || ''
    }
    this.setState({ preview })
  }

  componentDidMount() {
    if (this.props.scroll.enabled) {
      // prevent react-list's initial render focus problem
      setTimeout(() => this.focusToDate(this.state.focusedDate))
    }
  }

  componentDidUpdate(prevProps: CalendarProps) {
    const propMapper: Record<string, string> = {
      dateRange: 'ranges',
      date: 'date'
    }
    const targetProp = propMapper[this.props.displayMode || '']
    if (this.props[targetProp!] !== prevProps[targetProp!]) {
      this.updateShownDate(this.props)
    }

    if (
      prevProps.locale !== this.props.locale ||
      prevProps.weekStartsOn !== this.props.weekStartsOn
    ) {
      this.dateOptions = { locale: this.props.locale }
      if (this.props.weekStartsOn !== undefined)
        this.dateOptions.weekStartsOn = this.props.weekStartsOn
      this.setState({
        monthNames: this.getMonthNames()
      })
    }

    if (!shallowEqualObjects(prevProps.scroll, this.props.scroll)) {
      this.setState({ scrollArea: this.calcScrollArea(this.props) })
    }
  }

  changeShownDate = (value: number, mode = 'set') => {
    const { focusedDate } = this.state
    const { onShownDateChange, minDate, maxDate } = this.props
    const modeMapper: Record<string, () => Date> = {
      monthOffset: () => addMonths(focusedDate, value),
      setMonth: () => setMonth(focusedDate, value),
      setYear: () => setYear(focusedDate, value),
      set: () => value as unknown as Date
    }

    const newDate = min([max([modeMapper[mode](), minDate]), maxDate])
    this.focusToDate(newDate, this.props, false)
    onShownDateChange && onShownDateChange(newDate)
  }

  handleRangeFocusChange = (rangesIndex: number, rangeItemIndex: number) => {
    this.props.onRangeFocusChange &&
      this.props.onRangeFocusChange([rangesIndex, rangeItemIndex])
  }

  handleScroll = () => {
    const { onShownDateChange, minDate } = this.props
    const { focusedDate } = this.state
    const { isFirstRender } = this

    const visibleMonths = this.list!.getVisibleRange()
    // prevent scroll jump with wrong visible value
    if (visibleMonths[0] === undefined) return
    const visibleMonth = addMonths(minDate, visibleMonths[0] || 0)
    const isFocusedToDifferent = !isSameMonth(visibleMonth, focusedDate)
    if (isFocusedToDifferent && !isFirstRender) {
      this.setState({ focusedDate: visibleMonth })
      onShownDateChange && onShownDateChange(visibleMonth)
    }
    this.isFirstRender = false
  }

  renderMonthAndYear = (
    focusedDate: Date,
    changeShownDate: (value: number, mode: string) => void,
    props: CalendarProps
  ) => {
    const {
      showMonthArrow,
      minDate,
      maxDate,
      showMonthAndYearPickers,
      ariaLabels
    } = props
    const upperYearLimit = (
      maxDate || Calendar.defaultProps!.maxDate
    ).getFullYear()
    const lowerYearLimit = (
      minDate || Calendar.defaultProps!.minDate
    ).getFullYear()
    const styles = this.styles
    return (
      <div
        onMouseUp={(e) => e.stopPropagation()}
        className={styles.monthAndYearWrapper}
      >
        {showMonthArrow ? (
          <button
            type='button'
            className={classnames(styles.nextPrevButton, styles.prevButton)}
            onClick={() => changeShownDate(-1, 'monthOffset')}
            aria-label={ariaLabels.prevButton}
          >
            <i />
          </button>
        ) : null}
        {showMonthAndYearPickers ? (
          <span className={styles.monthAndYearPickers}>
            <span className={styles.monthPicker}>
              <select
                value={focusedDate.getMonth()}
                onChange={(e) =>
                  changeShownDate(
                    e.target.value as unknown as number,
                    'setMonth'
                  )
                }
                aria-label={ariaLabels.monthPicker}
              >
                {this.state.monthNames.map((monthName, i) => (
                  <option key={i} value={i}>
                    {/* {console.log(monthName)} */}
                    {/* <PixelFlexBox justifyContent='flex-start'> */}

                    {/* <PixelText> */}
                      {monthName}
                    {/* </PixelText> */}
                    {/* </PixelFlexBox> */}
                  </option>
                ))}
              </select>
            </span>
            <span className={styles.monthAndYearDivider} />
            <span className={styles.yearPicker}>
              <select
                value={focusedDate.getFullYear()}
                onChange={(e) =>
                  changeShownDate(
                    e.target.value as unknown as number,
                    'setYear'
                  )
                }
                aria-label={ariaLabels.yearPicker}
              >
                {new Array(upperYearLimit - lowerYearLimit + 1)
                  .fill(upperYearLimit)
                  .map((val, i) => {
                    const year = val - i
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  })}
              </select>
            </span>
          </span>
        ) : (
          <span className={styles.monthAndYearPickers}>
            {this.state.monthNames[focusedDate.getMonth()]}{' '}
            {focusedDate.getFullYear()}
          </span>
        )}
        {showMonthArrow ? (
          <button
            type='button'
            className={classnames(styles.nextPrevButton, styles.nextButton)}
            onClick={() => changeShownDate(1, 'monthOffset')}
            aria-label={ariaLabels.nextButton}
          >
            <i />
          </button>
        ) : null}
      </div>
    )
  }

  renderWeekdays() {
    const now = new Date()
    return (
      <div className={this.styles.weekDays}>
        {eachDayOfInterval({
          start: startOfWeek(now, this.dateOptions),
          end: endOfWeek(now, this.dateOptions)
        }).map((day, i) => (
          <span className={this.styles.weekDay} key={i}>
            {format(day, this.props.weekdayDisplayFormat, this.dateOptions)}
          </span>
        ))}
      </div>
    )
  }

  renderDateDisplay = () => {
    const {
      focusedRange,
      color,
      ranges,
      rangeColors,
      dateDisplayFormat,
      editableDateInputs,
      startDatePlaceholder,
      endDatePlaceholder,
      ariaLabels
    } = this.props

    const defaultColor = rangeColors[focusedRange[0]] || color
    const styles = this.styles

    return (
      <div className={styles.dateDisplayWrapper}>
        {ranges.map((range, i) => {
          if (
            range.showDateDisplay === false ||
            (range.disabled && !range.showDateDisplay)
          )
            return null
          return (
            <div
              className={styles.dateDisplay}
              key={i}
              style={{ color: range.color || defaultColor }}
            >
              <DateInput
                className={classnames(styles.dateDisplayItem, {
                  [styles.dateDisplayItemActive]:
                    focusedRange[0] === i && focusedRange[1] === 0
                })}
                readOnly={!editableDateInputs}
                disabled={range.disabled}
                value={range.startDate}
                placeholder={startDatePlaceholder}
                dateOptions={this.dateOptions}
                dateDisplayFormat={dateDisplayFormat}
                ariaLabel={
                  ariaLabels.dateInput &&
                  ariaLabels.dateInput[range.key] &&
                  ariaLabels.dateInput[range.key].startDate
                }
                onChange={this.onDragSelectionEnd}
                onFocus={() => this.handleRangeFocusChange(i, 0)}
              />
              <DateInput
                className={classnames(styles.dateDisplayItem, {
                  [styles.dateDisplayItemActive]:
                    focusedRange[0] === i && focusedRange[1] === 1
                })}
                readOnly={!editableDateInputs}
                disabled={range.disabled}
                value={range.endDate}
                placeholder={endDatePlaceholder}
                dateOptions={this.dateOptions}
                dateDisplayFormat={dateDisplayFormat}
                ariaLabel={
                  ariaLabels.dateInput &&
                  ariaLabels.dateInput[range.key] &&
                  ariaLabels.dateInput[range.key].endDate
                }
                onChange={this.onDragSelectionEnd}
                onFocus={() => this.handleRangeFocusChange(i, 1)}
              />
            </div>
          )
        })}
      </div>
    )
  }

  onDragSelectionStart = (date: Date) => {
    const { onChange, dragSelectionEnabled } = this.props

    if (dragSelectionEnabled) {
      this.setState({
        drag: {
          status: true,
          range: { startDate: date, endDate: date },
          disablePreview: true
        }
      })
    } else {
      onChange && onChange(date)
    }
  }

  onDragSelectionEnd = (date: Date) => {
    const { updateRange, displayMode, onChange, dragSelectionEnabled } =
      this.props

    if (!dragSelectionEnabled) return

    if (displayMode === 'date' || !this.state.drag.status) {
      onChange && onChange(date)
      return
    }
    const newRange = {
      startDate: this.state.drag.range.startDate,
      endDate: date
    }
    if (displayMode !== 'dateRange' || isSameDay(newRange.startDate, date)) {
      this.setState(
        { drag: { status: false, range: {} } },
        () => onChange && onChange(date)
      )
    } else {
      this.setState({ drag: { status: false, range: {} } }, () => {
        updateRange && updateRange(newRange)
      })
    }
  }

  onDragSelectionMove = (date: Date) => {
    const { drag } = this.state
    if (!drag.status || !this.props.dragSelectionEnabled) return
    this.setState({
      drag: {
        status: drag.status,
        range: { startDate: drag.range.startDate, endDate: date },
        disablePreview: true
      }
    })
  }

  estimateMonthSize = (index: number, cache?: Record<number, number>) => {
    const { direction, minDate } = this.props
    const { scrollArea } = this.state
    if (cache) {
      this.listSizeCache = cache
      if (cache[index]) return cache[index]
    }
    if (direction === 'horizontal') return scrollArea!.monthWidth!
    const monthStep = addMonths(minDate, index)
    const { start, end } = getMonthDisplayRange(monthStep, this.dateOptions)
    const isLongMonth =
      differenceInDays(end, start, this.dateOptions) + 1 > 7 * 5
    return isLongMonth ? scrollArea!.longMonthHeight! : scrollArea!.monthHeight!
  }

  render() {
    const {
      showDateDisplay,
      onPreviewChange,
      scroll,
      direction,
      disabledDates,
      disabledDay,
      maxDate,
      minDate,
      rangeColors,
      color,
      navigatorRenderer,
      className,
      preview
    } = this.props
    const { scrollArea, focusedDate } = this.state
    const isVertical = direction === 'vertical'
    const monthAndYearRenderer = navigatorRenderer || this.renderMonthAndYear

    const ranges = this.props.ranges.map((range, i) => ({
      ...range,
      color: range.color || rangeColors[i] || color
    }))
    return (
      <div
        className={classnames(this.styles.calendarWrapper, className)}
        onMouseUp={() => this.setState({ drag: { status: false, range: {} } })}
        onMouseLeave={() => {
          this.setState({ drag: { status: false, range: {} } })
        }}
      >
        {showDateDisplay && this.renderDateDisplay()}
        {monthAndYearRenderer(focusedDate, this.changeShownDate, this.props)}
        {scroll.enabled ? (
          <div>
            {isVertical && this.renderWeekdays(this.dateOptions)}
            <div
              className={classnames(
                this.styles.infiniteMonths,
                isVertical
                  ? this.styles.monthsVertical
                  : this.styles.monthsHorizontal
              )}
              onMouseLeave={() => onPreviewChange && onPreviewChange()}
              style={{
                width: scrollArea!.calendarWidth! + 11,
                height: scrollArea!.calendarHeight! + 11
              }}
              onScroll={this.handleScroll}
            >
              <ReactList
                length={differenceInCalendarMonths(
                  endOfMonth(maxDate!),
                  addDays(startOfMonth(minDate!), -1),
                  this.dateOptions
                )}
                treshold={500}
                type='variable'
                ref={(target) => (this.list = target)}
                itemSizeEstimator={this.estimateMonthSize}
                axis={isVertical ? 'y' : 'x'}
                itemRenderer={(index, key) => {
                  const monthStep = addMonths(minDate!, index)
                  return (
                    <Month
                      {...this.props}
                      onPreviewChange={onPreviewChange || this.updatePreview}
                      preview={preview || this.state.preview}
                      ranges={ranges}
                      key={key}
                      drag={this.state.drag}
                      dateOptions={this.dateOptions}
                      disabledDates={disabledDates}
                      disabledDay={disabledDay}
                      month={monthStep}
                      onDragSelectionStart={this.onDragSelectionStart}
                      onDragSelectionEnd={this.onDragSelectionEnd}
                      onDragSelectionMove={this.onDragSelectionMove}
                      onMouseLeave={() => onPreviewChange && onPreviewChange()}
                      styles={this.styles}
                      style={
                        isVertical
                          ? { height: this.estimateMonthSize(index) }
                          : {
                              height: scrollArea!.monthHeight!,
                              width: this.estimateMonthSize(index)
                            }
                      }
                      showMonthName
                      showWeekDays={!isVertical}
                    />
                  )
                }}
              />
            </div>
          </div>
        ) : (
          <div
            className={classnames(
              this.styles.months,
              isVertical
                ? this.styles.monthsVertical
                : this.styles.monthsHorizontal
            )}
          >
            {new Array(this.props.months!).fill(null).map((_, i) => {
              let monthStep = addMonths(this.state.focusedDate, i)
              if (this.props.calendarFocus === 'backwards') {
                monthStep = subMonths(
                  this.state.focusedDate,
                  this.props.months! - 1 - i
                )
              }
              return (
                <Month
                  {...this.props}
                  onPreviewChange={onPreviewChange || this.updatePreview}
                  preview={preview || this.state.preview}
                  ranges={ranges}
                  key={i}
                  drag={this.state.drag}
                  dateOptions={this.dateOptions}
                  disabledDates={disabledDates}
                  disabledDay={disabledDay}
                  month={monthStep}
                  onDragSelectionStart={this.onDragSelectionStart}
                  onDragSelectionEnd={this.onDragSelectionEnd}
                  onDragSelectionMove={this.onDragSelectionMove}
                  onMouseLeave={() => onPreviewChange && onPreviewChange()}
                  styles={this.styles}
                  showWeekDays={!isVertical}
                />
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

Calendar.defaultProps = {
  showMonthArrow: true,
  disabledDates: [],
  classNames: {},
  locale: defaultLocale,
  monthDisplayFormat: 'MMMM yyyy',
  weekdayDisplayFormat: 'EEEEE',
  dayDisplayFormat: 'd',
  dateDisplayFormat: 'MMM d, yyyy',
  showDateDisplay: true,
  showPreview: true,
  showMonthAndYearPickers: true,
  disabledDay: () => false,
  minDate: subMonths(new Date(), 48),
  maxDate: addMonths(new Date(), 48),
  initialFocusedRange: [],
  focusedRange: [],
  date: null,
  ranges: [],
  preview: null,
  scroll: {
    enabled: false
  },
  direction: 'vertical',
  months: 1,
  dragSelectionEnabled: true,
  fixedHeight: false,
  calendarFocus: 'forwards',
  preventSnapRefocus: false,
  ariaLabels: {
    prevButton: 'Previous Month',
    nextButton: 'Next Month',
    monthPicker: 'Choose month',
    yearPicker: 'Choose year',
    dateInput: []
  }
}

// import PropTypes from 'prop-types';

Calendar.propTypes = {
  showMonthArrow: PropTypes.bool,
  showMonthAndYearPickers: PropTypes.bool,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)), // Use instanceOf for date objects
  disabledDay: PropTypes.func,
  minDate: PropTypes.any, // It seems minDate should be a function
  maxDate: PropTypes.any, // It seems maxDate should be a function
  date: PropTypes.func, // It seems date should be a function
  onChange: PropTypes.func,
  onPreviewChange: PropTypes.func,
  onRangeFocusChange: PropTypes.func,
  classNames: PropTypes.objectOf(PropTypes.string),
  locale: PropTypes.objectOf(PropTypes.any),
  shownDate: PropTypes.func, // It seems shownDate should be a function
  onShownDateChange: PropTypes.func,
  ranges: PropTypes.arrayOf(PropTypes.shape({})), // You need to define shape for range objects
  preview: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    color: PropTypes.string
  }),
  dateDisplayFormat: PropTypes.string,
  monthDisplayFormat: PropTypes.string,
  weekdayDisplayFormat: PropTypes.string,
  weekStartsOn: PropTypes.number,
  dayDisplayFormat: PropTypes.string,
  focusedRange: PropTypes.arrayOf(PropTypes.number),
  initialFocusedRange: PropTypes.arrayOf(PropTypes.number),
  months: PropTypes.number,
  className: PropTypes.string,
  showDateDisplay: PropTypes.bool,
  showPreview: PropTypes.bool,
  displayMode: PropTypes.string,
  color: PropTypes.string,
  updateRange: PropTypes.func,
  scroll: PropTypes.shape({
    enabled: PropTypes.bool,
    monthHeight: PropTypes.number,
    longMonthHeight: PropTypes.number,
    calendarWidth: PropTypes.number,
    calendarHeight: PropTypes.number
  }),
  direction: PropTypes.string,
  startDatePlaceholder: PropTypes.string,
  endDatePlaceholder: PropTypes.string,
  navigatorRenderer: PropTypes.func,
  rangeColors: PropTypes.arrayOf(PropTypes.string),
  editableDateInputs: PropTypes.bool,
  dragSelectionEnabled: PropTypes.bool,
  fixedHeight: PropTypes.bool,
  calendarFocus: PropTypes.oneOf(['forwards', 'backwards']),
  preventSnapRefocus: PropTypes.bool,
  ariaLabels: PropTypes.shape({
    prevButton: PropTypes.string,
    nextButton: PropTypes.string,
    monthPicker: PropTypes.string,
    yearPicker: PropTypes.string,
    dateInput: PropTypes.arrayOf(
      PropTypes.shape({
        startDate: PropTypes.string,
        endDate: PropTypes.string
      })
    )
  })
};


export default Calendar
