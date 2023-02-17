import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelMultiSelectProps {}

const StyledPixelMultiSelect = styled.div`
  color: #1328a0;
`;

export function PixelMultiSelect(props: PixelMultiSelectProps) {
  return (
    <StyledPixelMultiSelect>
      <h1>Welcome to PixelMultiSelect</h1>
    </StyledPixelMultiSelect>
  );
}

export default PixelMultiSelect;