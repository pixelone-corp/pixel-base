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
  checkboxSize?: 'sm' | 'lg'
}
const StyledDCCheckbox = styled.div<{ checkboxSize }>`
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  justify-content: flex-start;
  align-items: center;
  ${({ checkboxSize }) =>
    checkboxSize === 'sm' &&
    `
   align-items: flex-end;
  `}

  ${({ checkboxSize }) =>
    checkboxSize === 'lg' &&
    `
   align-items: flex-end;
  `}
  align-content: flex-start;
  /* gap: 10px; */
`
const StyledCheckBoxLabel = styled(Form.Check.Label)<{ checkboxSize }>`
  //for sm 14px for lg 18px otherwise 16px
  font-size: ${({ checkboxSize }) => {
    if (checkboxSize === 'sm') return '0.875rem !important' // 14px
    if (checkboxSize === 'lg') return '1.125rem !important' // 18px
    return '1rem' // 16px (default)
  }};

  line-height: 1.75rem;
  padding-left: 0.75rem;
`
const StyledCheckBox = styled(Form.Check.Input)<{ checkboxSize }>`
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
  height: ${(props) => props.checkboxSize === 'sm' && '1rem'};
  width: ${(props) => props.checkboxSize === 'sm' && '1rem'};
  height: ${(props) => props.checkboxSize === 'lg' && '1.5rem'};
  width: ${(props) => props.checkboxSize === 'lg' && '1.5rem'};
  margin-top: 0.21rem;
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
      <StyledDCCheckbox checkboxSize={props.checkboxSize}>
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
            checkboxSize={props.checkboxSize}
          />
        </Form.Check>
        {props.label && (
          <StyledCheckBoxLabel checkboxSize={props.checkboxSize}>
            {props.label}
          </StyledCheckBoxLabel>
        )}
      </StyledDCCheckbox>
    )
  }
)
export default DCCheckbox
