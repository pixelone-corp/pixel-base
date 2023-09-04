import React, { Component, RefObject } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import coreStyles from '../../styles'
import { findNextRangeIndex, generateStyles } from '../../utils'
import DateRange from '../DateRange/index'
import DefinedRange from '../DefinedRange/index'

interface DateRangePickerProps {
  ranges: any[] // Replace 'any' with the actual type of your ranges.
  className?: any
}

interface DateRangePickerState {
  styles:{focusedRange: [number, number]}

}

class DateRangePicker extends Component<
  DateRangePickerProps,
  DateRangePickerState
> {
  private dateRange: RefObject<any> // Replace 'any' with the actual type of DateRange.

  constructor(props: DateRangePickerProps) {
    super(props)
    console.log(props.ranges)

    this.state = {
      focusedRange: [findNextRangeIndex(props?.ranges), 0],
    }
    console.log(this)

    this.dateRange = React.createRef()
    this.styles = generateStyles([coreStyles, props.className])
  }

  render() {
    const { focusedRange } = this.state

    return (
      <div
        className={classnames(
          this.styles.dateRangePickerWrapper,
          this.props.className,
        )}
      >
        <DefinedRange
          focusedRange={focusedRange}
          onPreviewChange={(value) =>
            this.dateRange.current?.updatePreview(
              value
                ? this.dateRange.current?.calcNewSelection(
                    value,
                    typeof value === 'string',
                  )
                : null,
            )
          }
          {...this.props}
          range={this.props.ranges[focusedRange[0]]}
          className={undefined}
        />
        <DateRange
          onRangeFocusChange={(focusedRange) => this.setState({ focusedRange })}
          focusedRange={focusedRange}
          {...this.props}
          ref={this.dateRange}
          className={undefined}
        />
      </div>
    )
  }
}

DateRangePicker.defaultProps = {}

DateRangePicker.propTypes = {
  ...DateRange.propTypes,
  ...DefinedRange.propTypes,
  className: PropTypes.string,
}

export default DateRangePicker
