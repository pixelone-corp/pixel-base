import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { $DCprimaryColor } from '../../styleGuide'

const PasswordInput = (props) => {
  const [password, setPassword] = useState(props.value || '')
  const [strength, setStrength] = useState('')
  const [hover, setHover] = useState(false)

  const passwordRequirements = [
    { regex: /.{8,}/, label: 'At least 8 characters' },
    { regex: /[A-Z]/, label: 'At least one uppercase letter' },
    { regex: /[a-z]/, label: 'At least one lowercase letter' },
    { regex: /\d/, label: 'At least one digit' },
    { regex: /[!@#$%^&*]/, label: 'At least one special character (!@#$%^&*)' }
  ]

  const evaluateStrength = (pwd) => {
    let passedRules = passwordRequirements.filter((req) => req.regex.test(pwd))
    const strengthLevel = {
      0: '',
      1: 'Weak',
      2: 'Weak',
      3: 'Moderate',
      4: 'Strong',
      5: 'Very Strong'
    }
    setStrength(strengthLevel[passedRules.length])
  }

  const getStrengthColor = () => {
    switch (strength) {
      case 'Weak':
        return 'red'
      case 'Moderate':
        return 'orange'
      case 'Strong':
        return 'green'
      case 'Very Strong':
        return 'darkgreen'
      default:
        return 'black'
    }
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    evaluateStrength(newPassword)
    if (props.onChange) props.onChange(e)
  }

  return (
    <PasswordInputContainer>
      <DCPasswordInput
        strength={strength}
        type='password'
        value={password}
        onChange={handlePasswordChange}
        showsearchicon={props.showsearchicon}
        placeholder={props.placeholder || 'Enter your password'}
        id={props.id}
        name={props.name}
        ref={props.ref}
        className={props.className}
        disabled={props.disabled}
        spellCheck={props.spellCheck}
        aria-invalid={props.error}
        height={props.height}
        {...props.rest}
      />
      <PasswordStrength
        style={{ color: getStrengthColor() }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {strength}
        {hover && (
          <PasswordTooltip>
            <PasswordTooltipP>
              Requirements for a strong password:
            </PasswordTooltipP>
            <PasswordTooltipUl>
              {passwordRequirements.map((req, index) => (
                <PasswordTooltipLi
                  key={index}
                  style={{ color: req.regex.test(password) ? 'green' : 'red' }}
                >
                  {req.label}
                </PasswordTooltipLi>
              ))}
            </PasswordTooltipUl>
          </PasswordTooltip>
        )}
      </PasswordStrength>
    </PasswordInputContainer>
  )
}

const PasswordInputContainer = styled.div`
  width: 100%;
`

const PasswordStrength = styled.div`
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  position: absolute;
  right: 10px;
  top: -5px;
`
const DCPasswordInput = styled.input`
  &:focus {
    border: none;
    outline: none;
    ${(props) =>
      props.strength == 'Very Strong'
        ? css`
            border: 1px solid green !important;
            box-shadow: 0 0 0 1px #46c556 !important ;
          `
        : props.strength == 'Weak'
        ? css`
            border: 1px solid red !important;
            box-shadow: 0 0 0 1px #ff2d2d !important ;
          `
        : props.strength == 'Strong' || props.strength == 'Moderate'
        ? css`
            border: 0.0625rem solid orange !important;
            box-shadow: 0 0 0 1px orange !important ;
          `
        : css`
            border: 0.0625rem solid #dee2e6 !important;
            box-shadow: 0 0 0 1px ${$DCprimaryColor} !important ;
          `}
  }
  ${(props) =>
    props.showsearchicon === 0 &&
    css`
      padding-left: 35px !important;
    `}
  border:  .0625rem solid #dee2e6;
  padding: 0;
  padding: 0.5625rem 6.25rem 0.5625rem 1.125rem !important;
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

  ${(props) =>
    props.strength == 'Strong' || props.strength == 'Very Strong'
      ? css`
          border: 1px solid green !important;
          box-shadow: 0 0 0 1px #46c556 !important ;
        `
      : props.strength == 'Weak' || props.strength == 'Moderate'
      ? css`
          border: 1px solid red !important;
          box-shadow: 0 0 0 1px #ff2d2d !important ;
        `
      : css`
          background-color: #ffffff;
        `}
`

const PasswordTooltip = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  top: 40px;
  right: 0;
  width: 250px;
  z-index: 10;
`

const PasswordTooltipP = styled.p`
  font-size: 14px;
  margin: 0 0 5px 0;
`

const PasswordTooltipUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const PasswordTooltipLi = styled.li`
  font-size: 12px;
  margin: 2px 0;
`

export default PasswordInput
