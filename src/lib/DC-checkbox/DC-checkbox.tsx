import React, { InputHTMLAttributes } from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export interface DCCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'chekbox'
  value: string
  disabled: boolean
  checked: boolean
  onChange: () => void
  name: string
  label: string
  size?: 'sm' | 'lg'
}
const StyledDCCheckbox = styled.div<{ size }>`
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  justify-content: flex-start;
  align-items: center;
  ${({ size }) =>
    size === 'sm' &&
    `
   align-items: flex-end;
  `}

  ${({ size }) =>
    size === 'lg' &&
    `
   align-items: flex-end;
  `}
  align-content: flex-start;
  /* gap: 10px; */
`
const StyledCheckBoxLabel = styled(Form.Check.Label)`
  font-size: 1rem;
  line-height: 1.75rem;
  padding-left: 0.75rem;
`
const StyledCheckBox = styled(Form.Check.Input)<{ props }>`
  border-radius: 0.25em;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  border: 2px solid #d2d4e4;
  height: 1.25rem;
  width: 1.25rem;
  height: ${(props) => props.size === 'sm' && '1rem'};
  width: ${(props) => props.size === 'sm' && '1rem'};
  height: ${(props) => props.size === 'lg' && '1.5rem'};
  width: ${(props) => props.size === 'lg' && '1.5rem'};
  margin-top: 0.21rem;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  vertical-align: top;
  :focus {
    border-color: #977dfb;
    box-shadow: none !important;
  }
  :checked {
    background-color: #5f38f9;
    border-color: #5f38f9;
  }
`

export const DCCheckbox = React.forwardRef<HTMLInputElement, DCCheckboxProps>(
  (props) => {
    return (
      <StyledDCCheckbox size={props.size}>
        <Form.Check
          type={'checkbox'}
          name={props.name}
          value={props.value}
          disabled={props.disabled}
          checked={props.checked}
        >
          <StyledCheckBox
            type={'checkbox'}
            value={props.value}
            disabled={props.disabled}
            checked={props.checked}
            onChange={props.onChange}
            name={props.name}
            size={props.size}
          />
        </Form.Check>
        {props.label && (
          <StyledCheckBoxLabel>{props.label}</StyledCheckBoxLabel>
        )}
      </StyledDCCheckbox>
    )
  }
)
export default DCCheckbox
