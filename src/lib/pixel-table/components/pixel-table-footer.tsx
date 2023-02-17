import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelTableFooterProps {}

const StyledPixelTableFooter = styled.div`
  color: #1328a0;
`;

export function PixelTableFooter(props: PixelTableFooterProps) {
  return (
    <StyledPixelTableFooter>
      <h1>Welcome to PixelTableFooter</h1>
    </StyledPixelTableFooter>
  );
}

export default PixelTableFooter;