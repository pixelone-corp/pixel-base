import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelTableRowProps {}

const StyledPixelTableRow = styled.div`
  color: #1328a0;
`;

export function PixelTableRow(props: PixelTableRowProps) {
  return (
    <StyledPixelTableRow>
      <h1>Welcome to PixelTableRow</h1>
    </StyledPixelTableRow>
  );
}

export default PixelTableRow;