import React from 'react';
import styled  from 'styled-components';

export interface PixelHeaderPanelProps{}

export function PixelHeaderPanel(props: PixelHeaderPanelProps) {
  return(
    <React.Fragment>
      <HeaderPanelContainer>
        <h1>Pixel Header Panel</h1>
      </HeaderPanelContainer>
    </React.Fragment>
  )
};

const HeaderPanelContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelHeaderPanel;
