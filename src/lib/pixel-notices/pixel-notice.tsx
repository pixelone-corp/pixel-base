import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelNoticeProps {}

const StyledPixelNotice = styled.div`
  color: #1328a0;
`;

export function PixelNotice(props: PixelNoticeProps) {
  return (
    <StyledPixelNotice>
      <h1>Welcome to PixelNotice</h1>
    </StyledPixelNotice>
  );
}

export default PixelNotice;