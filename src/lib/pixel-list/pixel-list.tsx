import React from 'react';
import styled  from 'styled-components';

export interface PixelListProps{}

export function PixelList(props: PixelListProps) {
  return(
    <React.Fragment>
      <ListContainer>
        <h1>Pixel List</h1>
      </ListContainer>
    </React.Fragment>
  )
};

const ListContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelList;
