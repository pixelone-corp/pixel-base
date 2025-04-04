import React, { Component, ReactNode } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import {
  //  defaultInputRanges,
  defaultStaticRanges
} from '../../defaultRanges'
import styles from '../../styles'
// @ts-ignore
import { rangeShape, Range, StaticRange } from '../DayCell'
import InputRangeField from '../InputRangeField'
import { $DCprimaryColor } from '../../../styleGuide'
import PixelText from '../../../pixel-text/pixel-text'

interface DefinedRangeProps {
  inputRanges?: StaticRange[]
  staticRanges?: StaticRange[]
  ranges?: Range[]
  focusedRange?: any
  onPreviewChange?: (range?: Range) => void
  onChange?: (ranges: { [key: string]: Range }) => void
  footerContent?: ReactNode
  headerContent?: ReactNode
  rangeColors?: string[]
  className?: string
  renderStaticRangeLabel?: (staticRange: StaticRange) => ReactNode
}

interface DefinedRangeState {
  rangeOffset: number
  focusedInput: number
}

class DefinedRange extends Component<DefinedRangeProps, DefinedRangeState> {
  static propTypes: any
  constructor(props: DefinedRangeProps) {
    super(props)
    this.state = {
      rangeOffset: 0,
      focusedInput: -1
    }
  }

  handleRangeChange = (range: Range): void => {
    const { onChange, ranges, focusedRange } = this.props
    const selectedRange = ranges?.[focusedRange?.[0]] || {}
    if (!onChange || !selectedRange) return
    onChange({
      [selectedRange.key || `range${focusedRange[0] + 1}`]: {
        ...selectedRange,
        ...range
      }
    })
  }

  getRangeOptionValue(option: StaticRange): string {
    const { ranges = [], focusedRange = [] } = this.props

    if (typeof option.getCurrentValue !== 'function') {
      return ''
    }

    const selectedRange = ranges[focusedRange[0]] || {}
    return option.getCurrentValue(selectedRange) || ''
  }

  getSelectedRange(ranges: Range[], staticRange: StaticRange) {
    const focusedRangeIndex = ranges.findIndex((range) => {
      if (!range.startDate || !range.endDate || range.disabled) return false
      return staticRange.isSelected(range)
    })
    const selectedRange = ranges[focusedRangeIndex]
    return { selectedRange, focusedRangeIndex }
  }

  render() {
    const {
      headerContent,
      footerContent,
      onPreviewChange,
      inputRanges,
      staticRanges,
      ranges,
      renderStaticRangeLabel,
      rangeColors,
      className
    } = this.props

    return (
      <div className={cx(styles.definedRangesWrapper, className)}>
        {headerContent}
        <div className={styles.staticRanges}>
          {staticRanges?.map((staticRange, i) => {
            const { selectedRange, focusedRangeIndex } = this.getSelectedRange(
              ranges,
              staticRange
            )
            let labelContent

            if (staticRange.hasCustomRendering) {
              labelContent = renderStaticRangeLabel?.(staticRange)
            } else {
              labelContent = staticRange.label
            }

            return (
              <button
                type='button'
                className={cx(styles.staticRange, {
                  [styles.staticRangeSelected]: Boolean(selectedRange)
                })}
                style={{
                  color: selectedRange
                    ? selectedRange.color || rangeColors?.[focusedRangeIndex]
                    : null
                }}
                key={i}
                onClick={() =>
                  this.handleRangeChange(staticRange.range(this.props))
                }
                onFocus={() =>
                  onPreviewChange &&
                  onPreviewChange(staticRange.range(this.props))
                }
                onMouseOver={() =>
                  onPreviewChange &&
                  onPreviewChange(staticRange.range(this.props))
                }
                onMouseLeave={() => {
                  onPreviewChange && onPreviewChange()
                }}
              >
                <PixelText style={{ fontSize: '13px' }}>
                  <span tabIndex={-1} className={styles.staticRangeLabel}>
                    {labelContent}
                  </span>
                </PixelText>
              </button>
            )
          })}
        </div>
        <div className={styles.inputRanges}>
          <PixelText style={{ fontSize: '20px' }}>
            {inputRanges?.map((rangeOption, i) => (
              <InputRangeField
                key={i}
                // @ts-ignore
                styles={styles}
                label={rangeOption.label}
                onFocus={() =>
                  this.setState({ focusedInput: i, rangeOffset: 0 })
                }
                onBlur={() => this.setState({ rangeOffset: 0 })}
                onChange={(value) =>
                  this.handleRangeChange(rangeOption.range(value, this.props))
                }
                value={this.getRangeOptionValue(rangeOption)}
              />
            ))}
          </PixelText>
        </div>
        {footerContent}
      </div>
    )
  }
}

DefinedRange.propTypes = {
  inputRanges: PropTypes.array,
  staticRanges: PropTypes.array,
  ranges: PropTypes.arrayOf(rangeShape),
  focusedRange: PropTypes.arrayOf(PropTypes.number),
  onPreviewChange: PropTypes.func,
  onChange: PropTypes.func,
  footerContent: PropTypes.node,
  headerContent: PropTypes.node,
  rangeColors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  renderStaticRangeLabel: PropTypes.func
}
// @ts-ignore
DefinedRange.defaultProps = {
  // inputRanges: defaultInputRanges,
  staticRanges: defaultStaticRanges,
  ranges: [],
  rangeColors: [$DCprimaryColor, '#3ecf8e', '#fed14c'],
  focusedRange: [0, 0]
}

export default DefinedRange
