import React from 'react';
import styled  from 'styled-components';

export interface PixelLoaderProps{}

export function PixelLoader(props: PixelLoaderProps) {
  return(
    <React.Fragment>
      <LoaderContainer>
        <h1>Pixel Loader</h1>
      </LoaderContainer>
    </React.Fragment>
  )
};

const LoaderContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelLoader;
