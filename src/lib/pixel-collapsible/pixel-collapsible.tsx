import React from 'react';
import styled  from 'styled-components';

export interface PixelCollapsibleProps{}

export function PixelCollapsible(props: PixelCollapsibleProps) {
  return(
    <React.Fragment>
      <CollapsibleContainer>
        <h1>Pixel Collapsible</h1>
      </CollapsibleContainer>
    </React.Fragment>
  )
};

const CollapsibleContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelCollapsible;
