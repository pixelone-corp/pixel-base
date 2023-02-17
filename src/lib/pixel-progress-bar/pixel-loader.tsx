import React from 'react';
import styled  from 'styled-components';

export interface PixelProgressBarProps{}

export function PixelProgressBar(props: PixelProgressBarProps) {
  return(
    <React.Fragment>
      <ProgressBarContainer>
        <h1>Pixel Progress Bar</h1>
      </ProgressBarContainer>
    </React.Fragment>
  )
};

const ProgressBarContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelProgressBar;
