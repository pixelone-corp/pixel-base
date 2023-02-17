import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelBannerProps {}

const StyledPixelBanner = styled.div`
  color: #1328a0;
`;

export function PixelBanner(props: PixelBannerProps) {
  return (
    <StyledPixelBanner>
      <h1>Welcome to PixelBanner</h1>
    </StyledPixelBanner>
  );
}

export default PixelBanner;