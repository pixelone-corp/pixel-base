import React from 'react';
import styled  from 'styled-components';

export interface PixelFluidContainerProps{}

export function PixelFluidContainer(props: PixelFluidContainerProps) {
  return(
    <React.Fragment>
      <FluidContainer>
        <h1>Pixel Fluid Container</h1>
      </FluidContainer>
    </React.Fragment>
  )
};

const FluidContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelFluidContainer;
