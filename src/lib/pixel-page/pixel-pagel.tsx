import React from 'react';
import styled  from 'styled-components';

export interface PixelPageProps{}

export function PixelPage(props: PixelPageProps) {
  return(
    <React.Fragment>
      <PageContainer>
        <h1>Pixel Page</h1>
      </PageContainer>
    </React.Fragment>
  )
};

const PageContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelPage;
