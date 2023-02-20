import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelSelectProps {}

const StyledPixelSelect = styled.div`
  color: #1328a0;
`;

export function PixelSelect(props: PixelSelectProps) {
  return (
    <StyledPixelSelect>
      <h1>Welcome to PixelSelect</h1>
    </StyledPixelSelect>
  );
}

export default PixelSelect;