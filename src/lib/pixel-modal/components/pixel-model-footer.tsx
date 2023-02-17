import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelModalFooterProps {}

const StyledPixelModalFooter = styled.div`
  color: #1328a0;
`;

export function PixelModalFooter(props: PixelModalFooterProps) {
  return (
    <StyledPixelModalFooter>
      <h1>Welcome to PixelModalFooter</h1>
    </StyledPixelModalFooter>
  );
}

export default PixelModalFooter;