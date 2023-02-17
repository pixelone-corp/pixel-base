import React from 'react';
import styled  from 'styled-components';

export interface PixelRightPanelProps{}

export function PixelRightPanel(props: PixelRightPanelProps) {
  return(
    <React.Fragment>
      <RightPanelContainer>
        <h1>Pixel Right Panel</h1>
      </RightPanelContainer>
    </React.Fragment>
  )
};

const RightPanelContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelRightPanel;
