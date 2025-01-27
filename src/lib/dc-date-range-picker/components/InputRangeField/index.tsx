import React, { Component, ChangeEvent } from 'react'

interface InputRangeFieldProps {
  value: string | number
  label: React.ReactNode
  placeholder?: string
  styles: {
    inputRange: string
    inputRangeInput: string
    inputRangeLabel: string
  }
  onBlur: () => void
  onFocus: () => void
  onChange: (value: number) => void
}

const MIN = 0
const MAX = 99999

class InputRangeField extends Component<InputRangeFieldProps> {
  constructor(props: InputRangeFieldProps) {
    super(props)
  }

  shouldComponentUpdate(nextProps: InputRangeFieldProps): boolean {
    const { value, label, placeholder } = this.props

    return (
      value !== nextProps.value ||
      label !== nextProps.label ||
      placeholder !== nextProps.placeholder
    )
  }

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { onChange } = this.props

    let value = parseInt(e.target.value, 10)
    value = isNaN(value) ? 0 : Math.max(Math.min(MAX, value), MIN)

    onChange(value)
  }

  render() {
    const {
      label,
      placeholder = '-',
      value,
      styles,
      onBlur,
      onFocus,
    } = this.props

    return (
      <div className={styles.inputRange}>
        <input
          className={styles.inputRangeInput}
          placeholder={placeholder}
          value={value}
          min={MIN}
          max={MAX}
          onChange={this.onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span className={styles.inputRangeLabel}>{label}</span>
      </div>
    )
  }
}

export default InputRangeField
