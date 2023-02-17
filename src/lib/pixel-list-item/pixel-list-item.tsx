import React from 'react';
import styled  from 'styled-components';

export interface PixelListItemProps{}

export function PixelListItem(props: PixelListItemProps) {
  return(
    <React.Fragment>
      <ListItemContainer>
        <h1>Pixel List Item</h1>
      </ListItemContainer>
    </React.Fragment>
  )
};

const ListItemContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelListItem;
