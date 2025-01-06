import React from 'react'
import styled, { css } from 'styled-components'
import { BrowserView, MobileView } from 'react-device-detect'

export interface DCTopBarProps {
  className: string
  children: any
}

const StyledDCTopBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #fff;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e8e7ec;
  box-shadow: 0 1px 0 rgba(232, 231, 236, 0.5);
  justify-content: space-between;
  min-height: 3.75rem;
  padding: 0.5rem;
  z-index: 1024;
  ${({ isMobile }) =>
    isMobile &&
    css`
      padding-left: 50px;
    `}
`

export const DCTopBar = React.forwardRef<HTMLDivElement, DCTopBarProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <React.Fragment>
        <BrowserView>
          <StyledDCTopBar>{children}</StyledDCTopBar>
        </BrowserView>
        <MobileView>
          <StyledDCTopBar isMobile>{children}</StyledDCTopBar>
        </MobileView>
      </React.Fragment>
    )
  }
)
export default DCTopBar
