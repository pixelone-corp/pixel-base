import React from 'react';
import styled  from 'styled-components';

export interface PixelFileDropTargetProps{}

export function PixelFileDropTarget(props: PixelFileDropTargetProps) {
  return(
    <React.Fragment>
      <FileDropTargetContainer>
        <h1>Pixel File Drop Target</h1>
      </FileDropTargetContainer>
    </React.Fragment>
  )
};

const FileDropTargetContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelFileDropTarget;
