import styled from 'styled-components'

import React from 'react'

/* eslint-disable-next-line */
export interface PixelFormProps {}

const StyledPixelForm = styled.div`
  color: #1328a0;
`

export function PixelForm(props: PixelFormProps) {
  return (
    <StyledPixelForm>
      <Form>Welcome to PixelForm</Form>
    </StyledPixelForm>
  )
}
const Form = styled.from`
  height: auto;
  width: auto;
`

export default PixelForm
