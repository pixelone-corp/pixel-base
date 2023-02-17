import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelButtonGroupProps {}

const StyledPixelButtonGroup = styled.div`
  color: #1328a0;
`;

export function PixelButtonGroup(props: PixelButtonGroupProps) {
  return (
    <StyledPixelButtonGroup>
      <h1>Welcome to PixelButtonGroup</h1>
    </StyledPixelButtonGroup>
  );
}

export default PixelButtonGroup;