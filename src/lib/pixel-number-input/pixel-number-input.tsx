import React from 'react';
import styled  from 'styled-components';

export interface PixelNumberInput{}

export function PixelNumberInput(props: PixelNumberInput) {
  return(
    <React.Fragment>
      <NumberInputContainer>
        <h1>Pixel Number Input</h1>
      </NumberInputContainer>
    </React.Fragment>
  )
};

const NumberInputContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelNumberInput;
