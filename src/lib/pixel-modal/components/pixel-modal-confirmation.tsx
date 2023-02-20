import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelModalConfirmationProps {}

const StyledPixelModalConfirmation = styled.div`
  color: #1328a0;
`;

export function PixelModalConfirmation(props: PixelModalConfirmationProps) {
  return (
    <StyledPixelModalConfirmation>
      <h1>Welcome to PixelModalConfirmation</h1>
    </StyledPixelModalConfirmation>
  );
}

export default PixelModalConfirmation;