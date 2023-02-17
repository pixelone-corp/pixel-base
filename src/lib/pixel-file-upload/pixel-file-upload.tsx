import React from 'react';
import styled  from 'styled-components';

export interface PixelFileUplaodProps{}

export function PixelFileUplaod(props: PixelFileUplaodProps) {
  return(
    <React.Fragment>
      <FileUplaodContainer>
        <h1>Pixel File Uplaod</h1>
      </FileUplaodContainer>
    </React.Fragment>
  )
};

const FileUplaodContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelFileUplaod;
