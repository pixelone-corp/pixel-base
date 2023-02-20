import React from 'react';
import styled  from 'styled-components';

export interface PixelFeedbackFormProps{}

export function PixelFeedbackForm(props: PixelFeedbackFormProps) {
  return(
    <React.Fragment>
      <FeedbackContainer>
        <h1>Pixel Feedback Form</h1>
      </FeedbackContainer>
    </React.Fragment>
  )
};

const FeedbackContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelFeedbackForm;
