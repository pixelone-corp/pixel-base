import React from 'react';
import styled from 'styled-components';

export interface PixelContactUsFormPops{}

export function PixelContactUsForm(props: PixelContactUsFormPops) {
  return(
    <React.Fragment>
      <ContactUsContainer>
        <h1>Pixel Conact Us Form</h1>
      </ContactUsContainer>
    </React.Fragment>
  )
}

const ContactUsContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelContactUsForm;
