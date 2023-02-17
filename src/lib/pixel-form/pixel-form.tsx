import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelFormProps {}

const StyledPixelForm = styled.div`
  color: #1328a0;
`;

export function PixelForm(props: PixelFormProps) {
  return (
    <StyledPixelForm>
      <h1>Welcome to PixelForm</h1>
    </StyledPixelForm>
  );
}

export default PixelForm;