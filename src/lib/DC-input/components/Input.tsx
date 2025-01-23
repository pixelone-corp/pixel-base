import React from 'react'
import { $DCprimaryColor } from '../../styleGuide'
import styled, { css } from 'styled-components'
const Input = (props) => {
  return (
    <React.Fragment>
      <InputContainer display={props.showsearchicon === 0 ? 'true' : ''}>
        <DCInput
          showsearchicon={props.showsearchicon}
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          type={props.type}
          ref={props.ref}
          className={props.className}
          disabled={props.disabled}
          value={props.value}
          spellCheck={props.spellCheck}
          onChange={props.onChange}
          aria-invalid={props.error}
          height={props.height}
          {...props.rest}
        />
      </InputContainer>
    </React.Fragment>
  )
}
const InputContainer = styled.div<{ display?: string }>`
  &&::after {
    position: absolute;
    width: 25px;
    height: 25px;
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12px' height='5px' fill='%23D1D5DB' viewBox='0 0 712 712'%3E%3C!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z' /%3E%3C/svg%3E");
    background-repeat: no-repeat no-repeat;
    background-position: center center;
    background-size: cover;
    top: 13px;
    left: 10px;
    display: ${(props) => (props.display === 'true' ? 'block' : 'none')};
  }
`
const DCInput = styled.input`
  padding: 0.5625rem 1.125rem !important;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
    box-shadow: 0 0 0 1px ${$DCprimaryColor} !important;
  }
  ${(props) =>
    props.showsearchicon === 0 &&
    css`
      padding-left: 35px !important;
    `}
  border: .0625rem solid #E8E7CC;
  color: #43476b;
  appearance: none;
  background-clip: padding-box;
  border-radius: 0.375rem;
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  width: 100%;
  line-height: 1.5rem;
  ::placeholder {
    color: #d1d5db;
    font-size: 0.875rem;
  }
  background-color: #ffffff !important;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`
export default Input
