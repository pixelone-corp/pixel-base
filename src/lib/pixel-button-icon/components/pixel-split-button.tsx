import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelSplitButtonProps {}

const StyledPixelSplitButton = styled.div`
  color: #1328a0;
`;

export function PixelSplitButton(props: PixelSplitButtonProps) {
  return (
    <StyledPixelSplitButton>
      <h1>Welcome to PixelSplitButton</h1>
    </StyledPixelSplitButton>
  );
}

export default PixelSplitButton;