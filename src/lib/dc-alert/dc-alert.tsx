import React from 'react'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components'
export interface DcAlertProps {
  className?: string
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | string
  children?: React.ReactNode
  style?: React.CSSProperties
  padding?: string
}

export const DcAlert = React.forwardRef<HTMLDivElement, DcAlertProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      children = 'Dc Alert',
      style,
      className,
      padding
    } = props

    return (
      <StyledAlert
        className={className}
        ref={ref}
        variant={variant}
        style={style}
        padding={padding}
      >
        {children}
      </StyledAlert>
    )
  }
)
const StyledAlert = styled(Alert)<{ variant: string; padding: string }>`
  padding: ${(props) => props.padding && props.padding};

  --bs-primary-text-emphasis: #036;
  --bs-secondary-text-emphasis: #2b2f32;
  --bs-success-text-emphasis: #124f38;
  --bs-info-text-emphasis: #1c3965;
  --bs-warning-text-emphasis: #614b09;
  --bs-danger-text-emphasis: #59181f;
  --bs-light-text-emphasis: #495057;
  --bs-dark-text-emphasis: #495057;
  --bs-primary-bg-subtle: #cce6ff;
  --bs-secondary-bg-subtle: #e2e3e5;
  --bs-success-bg-subtle: #d5f3e8;
  --bs-info-bg-subtle: #dae9fe;
  --bs-warning-bg-subtle: #fcf2d0;
  --bs-danger-bg-subtle: #f9d8dc;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-dark-bg-subtle: #ced4da;
  --bs-primary-border-subtle: #9cf;
  --bs-secondary-border-subtle: #c4c8cb;
  --bs-success-border-subtle: #abe8d1;
  --bs-info-border-subtle: #b5d2fe;
  --bs-warning-border-subtle: #fae4a2;
  --bs-danger-border-subtle: #f2b1b8;
  --bs-light-border-subtle: #e9ecef;
  --bs-dark-border-subtle: #adb5bd;
  --bs-alert-color: var(--bs-primary-text-emphasis);
  --bs-alert-bg: var(--bs-primary-bg-subtle);
  --bs-alert-border-color: var(--bs-primary-border-subtle);
  --bs-alert-link-color: var(--bs-primary-text-emphasis);
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 1rem;
  --bs-alert-padding-y: 0.75rem;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: 1px solid var(--bs-alert-border-color);
  --bs-alert-border-radius: 0.375rem;
  --bs-alert-link-color: inherit;
  background-color: var(--bs-alert-bg);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
  color: var(--bs-alert-color);
  margin-bottom: var(--bs-alert-margin-bottom);
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  position: relative;
  //variant
  background-color: ${(props) =>
    props.variant === 'primary' && 'var(--bs-primary-bg-subtle)'};
  background-color: ${(props) =>
    props.variant === 'secondary' && 'var(--bs-secondary-bg-subtle)'};
  background-color: ${(props) =>
    props.variant === 'success' && 'var(--bs-success-bg-subtle)'};
  background-color: ${(props) =>
    props.variant === 'info' && 'var(--bs-info-bg-subtle)'};
  background-color: ${(props) =>
    props.variant === 'warning' && 'var(--bs-warning-bg-subtle)'};
  background-color: ${(props) =>
    props.variant === 'danger' && 'var(--bs-danger-bg-subtle)'};
  background-color: ${(props) =>
    props.variant === 'light' && 'var(--bs-light-bg-subtle)'};
  background-color: ${(props) =>
    props.variant === 'dark' && 'var(--bs-dark-bg-subtle)'};
  color: ${(props) =>
    props.variant === 'primary' && 'var(--bs-primary-text-emphasis)'};
  color: ${(props) =>
    props.variant === 'secondary' && 'var(--bs-secondary-text-emphasis)'};
  color: ${(props) =>
    props.variant === 'success' && 'var(--bs-success-text-emphasis)'};
  color: ${(props) =>
    props.variant === 'info' && 'var(--bs-info-text-emphasis)'};
  color: ${(props) =>
    props.variant === 'warning' && 'var(--bs-warning-text-emphasis)'};
  color: ${(props) =>
    props.variant === 'danger' && 'var(--bs-danger-text-emphasis)'};
  color: ${(props) =>
    props.variant === 'light' && 'var(--bs-light-text-emphasis)'};
  color: ${(props) =>
    props.variant === 'dark' && 'var(--bs-dark-text-emphasis)'};
  border: ${(props) =>
    props.variant === 'primary' && '1px solid var(--bs-primary-border-subtle)'};
  border: ${(props) =>
    props.variant === 'secondary' &&
    '1px solid var(--bs-secondary-border-subtle)'};
  border: ${(props) =>
    props.variant === 'success' && '1px solid var(--bs-success-border-subtle)'};
  border: ${(props) =>
    props.variant === 'info' && '1px solid var(--bs-info-border-subtle)'};
  border: ${(props) =>
    props.variant === 'warning' && '1px solid #fae4a2 !important'};
  border: ${(props) =>
    props.variant === 'danger' && '1px solid var(--bs-danger-border-subtle)'};
  border: ${(props) =>
    props.variant === 'light' && '1px solid var(--bs-light-border-subtle)'};
  border: ${(props) =>
    props.variant === 'dark' && '1px solid var(--bs-dark-border-subtle)'};
`

export default DcAlert
