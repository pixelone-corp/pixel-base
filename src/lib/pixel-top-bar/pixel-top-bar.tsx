import React from 'react'
import styled, { css } from 'styled-components'
import { BrowserView, MobileView } from 'react-device-detect'

export interface TopBarProps {
  className: string
  children: any
}

const StyledPixelTopBar = styled.div`
  /* position: sticky; */
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e6e6e6;
`

export const PixelTopBar = React.forwardRef<HTMLDivElement, TopBarProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <React.Fragment>
        <BrowserView>
          <StyledPixelTopBar>{children}</StyledPixelTopBar>
        </BrowserView>
        <MobileView>
          <StyledPixelTopBar></StyledPixelTopBar>
        </MobileView>
      </React.Fragment>
    )
  }
)
export default PixelTopBar
