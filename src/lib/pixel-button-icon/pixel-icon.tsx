import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelIconProps {}

const StyledPixelIcon = styled.div`
  color: #1328a0;
`;

export function PixelIcon(props: PixelIconProps) {
  return (
    <StyledPixelIcon>
      <h1>Welcome to PixelIcon</h1>
    </StyledPixelIcon>
  );
}

export default PixelIcon;