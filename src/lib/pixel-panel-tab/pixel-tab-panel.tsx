import React from 'react';
import styled  from 'styled-components';

export interface PixelTabPanelProps{}

export function PixelTabPanel(props: PixelTabPanelProps) {
  return(
    <React.Fragment>
      <TabPanelContainer>
        <h1>Pixel Tab Panel</h1>
      </TabPanelContainer>
    </React.Fragment>
  )
};

const TabPanelContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelTabPanel;
