import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelToggleIconProps {}

const StyledPixelToggleIcon = styled.div`
  color: #1328a0;
`;

export function PixelToggleIcon(props: PixelToggleIconProps) {
  return (
    <StyledPixelToggleIcon>
      <h1>Welcome to PixelToggleIcon</h1>
    </StyledPixelToggleIcon>
  );
}

export default PixelToggleIcon;