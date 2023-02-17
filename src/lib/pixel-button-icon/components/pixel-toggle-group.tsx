import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelToggleGroupProps {}

const StyledPixelToggleGroup = styled.div`
  color: #1328a0;
`;

export function PixelToggleGroup(props: PixelToggleGroupProps) {
  return (
    <StyledPixelToggleGroup>
      <h1>Welcome to PixelToggleGroup</h1>
    </StyledPixelToggleGroup>
  );
}

export default PixelToggleGroup;