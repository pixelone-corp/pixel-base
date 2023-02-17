import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelSearchAbleSelectProps {}

const StyledPixelSearchAbleSelect = styled.div`
  color: #1328a0;
`;

export function PixelSearchAbleSelect(props: PixelSearchAbleSelectProps) {
  return (
    <StyledPixelSearchAbleSelect>
      <h1>Welcome to PixelSearchAbleSelect</h1>
    </StyledPixelSearchAbleSelect>
  );
}

export default PixelSearchAbleSelect;