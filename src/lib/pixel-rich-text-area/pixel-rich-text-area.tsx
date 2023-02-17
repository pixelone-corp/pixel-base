import React from 'react';
import styled  from 'styled-components';

export interface PixelRichTextAreaProps{}

export function PixelRichTextArea(props: PixelRichTextAreaProps) {
  return(
    <React.Fragment>
      <RichTextContainer>
        <h1>Pixel Rich Text Area</h1>
      </RichTextContainer>
    </React.Fragment>
  )
};

const RichTextContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelRichTextArea;
