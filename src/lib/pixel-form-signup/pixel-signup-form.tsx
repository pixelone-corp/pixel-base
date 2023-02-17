import React from 'react';
import styled  from 'styled-components';

export interface PixelSignUpFormProps{}

export function PixelSignUpForm(props: PixelSignUpFormProps) {
  return(
    <React.Fragment>
      <SignUpContainer>
        <h1>Pixel Sign Up Form</h1>
      </SignUpContainer>
    </React.Fragment>
  )
};

const SignUpContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelSignUpForm;
