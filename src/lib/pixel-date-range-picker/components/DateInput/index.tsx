// @ts-nocheck
import React, { PureComponent, ChangeEvent, KeyboardEvent } from 'react'
import classnames from 'classnames'
import PixelText from '../../../pixel-text/pixel-text'
import { format, parse, isValid } from 'date-fns'
import PropTypes, { InferProps } from 'prop-types'

type DateInputProps = InferProps<typeof DateInput.propTypes>

interface DateInputState {
  invalid: boolean
  changed: boolean
  value: string
}

class DateInput extends PureComponent<DateInputProps, DateInputState> {
  constructor(props: DateInputProps, context: any) {
    super(props, context)

    this.state = {
      invalid: false,
      changed: false,
      value: this.formatDate(props),
    }
  }

  componentDidUpdate(prevProps: DateInputProps) {
    const { value } = prevProps

    if (value !== this.props.value) {
      this.setState({ value: this.formatDate(this.props) })
    }
  }

  formatDate(props: DateInputProps): string {
    const { value, dateDisplayFormat, dateOptions } = props
    if (value && isValid(value)) {
      return format(value, dateDisplayFormat, dateOptions)
    }
    return ''
  }

  update(value: string) {
    const { invalid, changed } = this.state

    if (invalid || !changed || !value) {
      return
    }

    const { onChange, dateDisplayFormat, dateOptions } = this.props
    const parsed = parse(value, dateDisplayFormat, new Date(), dateOptions)

    if (isValid(parsed)) {
      this.setState({ changed: false }, () => onChange(parsed))
    } else {
      this.setState({ invalid: true })
    }
  }

  onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { value } = this.state

    if (e.key === 'Enter') {
      this.update(value)
    }
  }

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.target.value, changed: true, invalid: false })
  }

  onBlur = (): void => {
    const { value } = this.state
    this.update(value)
  }

  render() {
    const { className, readOnly, placeholder, ariaLabel, disabled, onFocus } =
      this.props
    const { value, invalid } = this.state

    return (
      <span className={classnames('rdrDateInput', className)}>
        <PixelText style={{fontSize:'13px'}}>

        <input
          readOnly={readOnly}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          aria-label={ariaLabel}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={onFocus}
          />
        {invalid && <span className="rdrWarning">&#9888;</span>}
          </PixelText>
      </span>
    )
  }
}

DateInput.propTypes = {
  value: PropTypes.instanceOf(Date),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  dateOptions: PropTypes.object,
  dateDisplayFormat: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

DateInput.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: 'MMM D, YYYY',
}

export default DateInput
