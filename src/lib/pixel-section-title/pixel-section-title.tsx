import React from 'react';
import styled  from 'styled-components';

export interface PixelSectionTitleProps{}

export function PixelSectionTitle(props: PixelSectionTitleProps) {
  return(
    <React.Fragment>
      <SectionTitleContainer>
        <h1>Pixel Section Title</h1>
      </SectionTitleContainer>
    </React.Fragment>
  )
};

const SectionTitleContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelSectionTitle;
