import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelBadgeProps {}

const StyledPixelBadge = styled.div`
  color: #1328a0;
`;

export function PixelBadge(props: PixelBadgeProps) {
  return (
    <StyledPixelBadge>
      <h1>Welcome to PixelBadge</h1>
    </StyledPixelBadge>
  );
}

export default PixelBadge;