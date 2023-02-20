import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelMoreMenuProps {}

const StyledPixelMoreMenu = styled.div`
  color: #1328a0;
`;

export function PixelMoreMenu(props: PixelMoreMenuProps) {
  return (
    <StyledPixelMoreMenu>
      <h1>Welcome to PixelMoreMenu</h1>
    </StyledPixelMoreMenu>
  );
}

export default PixelMoreMenu;