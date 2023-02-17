import React from 'react';
import styled from 'styled-components';

export interface PixelLoginFormProps{}

export function PixelLoginForm(props: PixelLoginFormProps) {
  return(
    <React.Fragment>
      <LoginContainer>
        <h1>Pixel Login Form</h1>
      </LoginContainer>
    </React.Fragment>
  )
}

const LoginContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelLoginForm
