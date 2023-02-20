import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelTableColumnProps {}

const StyledPixelTableColumn = styled.div`
  color: #1328a0;
`;

export function PixelTableColumn(props: PixelTableColumnProps) {
  return (
    <StyledPixelTableColumn>
      <h1>Welcome to PixelTableColumn</h1>
    </StyledPixelTableColumn>
  );
}

export default PixelTableColumn;