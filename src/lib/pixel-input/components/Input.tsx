import React from 'react'
import { FormControl } from 'react-bootstrap'
import { $secondaryWithAlpha } from '../../styleGuide'
import styled, { css } from 'styled-components'
import SearchIcon from './search.svg'
const Input = (props) => {
  return (
    <React.Fragment>
      <InputContainer display={props.showSearchIcon}>
        <StyledPixelInput
          showSearchIcon={props.showSearchIcon}
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
const InputContainer = styled.div<{ display?: boolean }>`
  &&::after {
    position: absolute;
    width: 25px;
    height: 25px;
    content: '';
    background-repeat: no-repeat;
    background-image: url(${SearchIcon});
    top: 10px;
    left: 6px;
    display: ${(props) => (props.display ? 'block' : 'none')};
  }
`
const StyledPixelInput = styled(FormControl)`
  ${(props) =>
    props.showSearchIcon &&
    css`
      padding-left: 30px !important;
    `}
  background-color: #f7f7f7 !important;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  &:focus {
    box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha('0.15')} !important;
  }
`
export default Input
