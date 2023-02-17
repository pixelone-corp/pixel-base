import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelIconButtonProps {}

const StyledPixelIconButton = styled.div`
  color: #1328a0;
`;

export function PixelIconButton(props: PixelIconButtonProps) {
  return (
    <StyledPixelIconButton>
      <h1>Welcome to PixelIconButton</h1>
    </StyledPixelIconButton>
  );
}

export default PixelIconButton;