import React from 'react';
import styled  from 'styled-components';

export interface PixelErrorPageProps{}

export function PixelErrorPage(props: PixelErrorPageProps) {
  return(
    <React.Fragment>
      <PageErrorContainer>
        <h1>Pixel Error Page</h1>
      </PageErrorContainer>
    </React.Fragment>
  )
};

const PageErrorContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelErrorPage;
