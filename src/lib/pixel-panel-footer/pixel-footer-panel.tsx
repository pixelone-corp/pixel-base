import React from 'react';
import styled  from 'styled-components';

export interface PixelFooterPanelProps{}

export function PixelFooterPanel(props: PixelFooterPanelProps) {
  return(
    <React.Fragment>
      <FooterPanelContainer>
        <h1>Pixel Footer Panel</h1>
      </FooterPanelContainer>
    </React.Fragment>
  )
};

const FooterPanelContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelFooterPanel;
