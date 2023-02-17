import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelStepperProps {}

const StyledPixelStepper = styled.div`
  color: #1328a0;
`;

export function PixelStepper(props: PixelStepperProps) {
  return (
    <StyledPixelStepper>
      <h1>Welcome to PixelStepper</h1>
    </StyledPixelStepper>
  );
}

export default PixelStepper;