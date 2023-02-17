import React from 'react';
import styled  from 'styled-components';

export interface PixelImageProps{}

export function PixelImage(props: PixelImageProps) {
  return(
    <React.Fragment>
      <ImageContainer>
        <h1>Pixel Image</h1>
      </ImageContainer>
    </React.Fragment>
  )
};

const ImageContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelImage;
