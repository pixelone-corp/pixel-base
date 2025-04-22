"use client"

import React, { useState } from "react"
import { $DCprimaryColor } from "../../styleGuide"
import styled, { css } from "styled-components"

const Input = (props) => {
  const [showTooltip, setShowTooltip] = useState(false)
  console.log("Input props:", { isShowError: props.isShowError, errorMessage: props.errorMessage })

  return (
    <React.Fragment>
      <InputContainer
        size={props.size}
        display={props.showsearchicon === 0 ? "true" : ""}
        isShowError={props.isShowError}
      >
        <DCInput
          isShowError={props.isShowError}
          errorMessage={props.errorMessage}
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
          aria-invalid={props.error || props.isShowError}
          height={props.height}
          size={props.size}
          {...props.rest}
        />
        {props.isShowError && (
          <ErrorIcon
            className="error-icon"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {showTooltip && <ErrorTooltip>{props.errorMessage}</ErrorTooltip>}
          </ErrorIcon>
        )}
      </InputContainer>
    </React.Fragment>
  )
}

const InputContainer = styled.div<{ size?: string; display?: string; isShowError?: boolean }>`
  position: relative;
  
  &&::after {
    position: absolute;
    width: 25px;
    height: 20px;
    ${(props) =>
    props.size === "sm" &&
    css`
        width: 20px;
        height: 20px;
      `}
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12px' height='5px' fill='%23D1D5DB' viewBox='0 0 712 712'%3E%3C!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z' /%3E%3C/svg%3E");
    background-repeat: no-repeat no-repeat;
    background-position: center center;
    background-size: cover;
    top: 8px;
    //add if props.size === 'sm' then top: 8px
    ${(props) =>
    props.size === "sm" &&
    css`
        top: 8px !important;
      `}

    left: 10px;
    display: ${(props) => (props.display === "true" ? "block" : "none")};
  }
`

const ErrorIcon = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 5;
  display: block !important;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23EF4444'%3E%3C!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    display: block;
  }
`

const ErrorTooltip = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  background-color: #EF4444;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #EF4444;
  }
`

const DCInput = styled.input<{
  isShowError?: boolean
  errorMessage?: string
  showsearchicon?: number
  size?: string
  height?: string
}>`
  padding: ${(props) => (props.size === "sm" ? "2px 0.5rem" : "0.5625rem 1.125rem !important")};
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
    box-shadow: 0 0 0 1px ${(props) => (props.isShowError ? "#EF4444" : $DCprimaryColor)} !important;
  }
  ${(props) =>
    props.showsearchicon === 0 &&
    css`
      padding-left: 35px !important;
    `}
  ${(props) =>
    props.isShowError === true &&
    css`
      padding-right: 35px !important;
      background-color: #FEF2F2 !important;
      border-color: #EF4444 !important;
    `}
  border: .0625rem solid ${(props) => (props.isShowError ? "#EF4444" : "#d2d4e4")};
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
  background-color: ${(props) => (props.isShowError ? "#FEF2F2" : "#ffffff")} !important;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`

export default Input
