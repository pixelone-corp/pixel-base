import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelToastProps {}

const StyledPixelToast = styled.div`
  color: #1328a0;
`;

export function PixelToast(props: PixelToastProps) {
  return (
    <StyledPixelToast>
      <h1>Welcome to PixelToast</h1>
    </StyledPixelToast>
  );
}

export default PixelToast;