import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelTableHeaderProps {}

const StyledPixelTableHeader = styled.div`
  color: #1328a0;
`;

export function PixelTableHeader(props: PixelTableHeaderProps) {
  return (
    <StyledPixelTableHeader>
      <h1>Welcome to PixelTableHeader</h1>
    </StyledPixelTableHeader>
  );
}

export default PixelTableHeader;