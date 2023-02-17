import React from 'react';
import styled  from 'styled-components';

export interface PixelLeftPanelProps{}

export function PixelLeftPanel(props: PixelLeftPanelProps) {
  return(
    <React.Fragment>
      <LeftPanelContainer>
        <h1>Pixel Left Panel</h1>
      </LeftPanelContainer>
    </React.Fragment>
  )
};

const LeftPanelContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelLeftPanel;
