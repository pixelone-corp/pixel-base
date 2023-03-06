import React, { Children } from 'react';
import styled from 'styled-components'
export interface PixelPageContainerProps {
  width?: string
  height?: string
  backgroundColor?: string
  overflow?: string
  padding?: string
  margin?: string
  children?: React.ReactNode
}
export const PixelPageContainer = React.forwardRef<HTMLDivElement, PixelPageContainerProps>(
  (props, ref) => {
    return (
      <React.Fragment>
        <StyledPixelPageContainer  {...props} ref={ref}>
          {props.children}
        </StyledPixelPageContainer>
      </React.Fragment >
    )
  }
)
const StyledPixelPageContainer = styled.div<
  Pick<
    PixelPageContainerProps,
    | 'width'
    | 'height'
    | 'backgroundColor'
    | 'padding'
    | 'overflow'
    | 'margin'
  >
  >`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'calc(100vh - 50px)'};
  background-color: ${props => props.backgroundColor || '#f2f7f8'};
  padding: ${props => props.padding || '20px'};
  overflow: ${props => props.overflow || 'auto'};
  margin : ${props => props.margin || '0px'}
`

export default PixelPageContainer
