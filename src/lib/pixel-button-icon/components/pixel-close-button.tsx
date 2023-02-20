import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelCloseButtonProps {}

const StyledPixelCloseButton = styled.div`
  color: #1328a0;
`;

export function PixelCloseButton(props: PixelCloseButtonProps) {
  return (
    <StyledPixelCloseButton>
      <h1>Welcome to PixelCloseButton</h1>
    </StyledPixelCloseButton>
  );
}

export default PixelCloseButton;