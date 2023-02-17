import React from 'react';
import styled  from 'styled-components';

export interface PixelHeadingProps{}

export function PixelHeading(props: PixelHeadingProps) {
  return(
    <React.Fragment>
      <HeadingContainer>
        <h1>Pixel Heading</h1>
      </HeadingContainer>
    </React.Fragment>
  )
};

const HeadingContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelHeading;
