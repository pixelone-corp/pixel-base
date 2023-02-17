import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelModalHeaderProps {}

const StyledPixelModalHeader = styled.div`
  color: #1328a0;
`;

export function PixelModalHeader(props: PixelModalHeaderProps) {
  return (
    <StyledPixelModalHeader>
      <h1>Welcome to PixelModalHeader</h1>
    </StyledPixelModalHeader>
  );
}

export default PixelModalHeader;