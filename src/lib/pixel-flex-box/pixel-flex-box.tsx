import React from 'react';
import styled  from 'styled-components';

export interface PixelFlexBoxProps{}

export function PixelFlexBox(props: PixelFlexBoxProps) {
  return(
    <React.Fragment>
      <FlexBoxContainer>
        <h1>Pixel Flex Box</h1>
      </FlexBoxContainer>
    </React.Fragment>
  )
};

const FlexBoxContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelFlexBox;
