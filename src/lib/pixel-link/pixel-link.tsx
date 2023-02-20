import styled from "styled-components";

import React from "react";

export interface PixelLinkProps {}

const StyledPixelLink = styled.div`
  color: #1328a0;
`;

export function PixelLink(props: PixelLinkProps) {
  return (
    <StyledPixelLink>
      <h1>Welcome to PixelLink</h1>
    </StyledPixelLink>
  );
}

export default PixelLink;