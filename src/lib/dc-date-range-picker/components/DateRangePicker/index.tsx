import React, { Component, createRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../../styles';
import { findNextRangeIndex, generateStyles  } from '../../utils';
import DateRange from '../DateRange/index';
import DefinedRange from '../DefinedRange/index';

interface DateRangePickerProps {
  className?: Record<string, string>;
  ranges: any[];
  onChange: (array) => void ;
  showSelectionPreview: boolean;
  moveRangeOnFirstSelection: boolean;
  months: number | undefined;
  direction: string;
  context: object |undefined;
  dateRange: unknown;
  RangeColors: unknown;
  style:unknown
}

interface DateRangePickerState {
  focusedRange: number[];
}

class DateRangePicker extends Component<DateRangePickerProps, DateRangePickerState> {
  private dateRange = createRef<any>();
  // private styles: Record<string, string>;
  private styles: any;

  static propTypes = {
    ...DateRange.propTypes,
    ...DefinedRange.propTypes,
    className: PropTypes.string,
  };

  constructor(props: DateRangePickerProps) {
    super(props);
    this.state = {
      focusedRange: [findNextRangeIndex(props.ranges), 0],
    };
    this.dateRange = createRef();
    this.styles = generateStyles([styles, props.className]);

  }

  handlePreviewChange = (value: any) => {
    if (this.dateRange.current) {
      const newSelection = value
        ? this.dateRange.current.calcNewSelection(value, typeof value === 'string')
        : null;
      this.dateRange.current.updatePreview(newSelection);
    }
  };

  handleRangeFocusChange = (focusedRange: number[]) => {
    this.setState({ focusedRange });
  };

  render() {
    const { focusedRange } = this.state;

    return (
      <div
        className={classnames(this.styles.dateRangePickerWrapper, this.props.className)}
      >
        <DefinedRange
          focusedRange={focusedRange}
          onPreviewChange={this.handlePreviewChange}
          {...this.props}
          range={this.props.ranges[focusedRange[0]]}
          className={undefined}
        />
        <DateRange
          onRangeFocusChange={this.handleRangeFocusChange}
          focusedRange={focusedRange}
          {...this.props}
          ref={this.dateRange}
          className={undefined}
        />
      </div>
    );
  }
}

export default DateRangePicker;
