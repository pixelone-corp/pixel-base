import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelSearchBarProps {}

const StyledPixelSearchBar = styled.div`
  color: #1328a0;
`;

export function PixelSearchBar(props: PixelSearchBarProps) {
  return (
    <StyledPixelSearchBar>
      <h1>Welcome to PixelSearchBar</h1>
    </StyledPixelSearchBar>
  );
}

export default PixelSearchBar;