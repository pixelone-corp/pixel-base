import React from 'react'
import styled from 'styled-components'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { PixelButton } from '../pixel-button/pixel-button'
export interface NAMEHEREProps {
  className?: string
  PopoverContent: any
  popoverPlacement?: placements
  overlayButton?: any
  styledPopover?: object
  hideOnClickoutside?: boolean
  onPopoverExit?: () => {}
}
type placements =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start'
const StyledPixelPopover = styled(Popover)``

export const PixelPopover = React.forwardRef<HTMLDivElement, NAMEHEREProps>(
  (
    {
      className,
      PopoverContent = 'Popover Content',
      popoverPlacement = 'auto',
      overlayButton = <PixelButton>Overlay</PixelButton>,
      styledPopover = {},
      hideOnClickoutside = true,
      onPopoverExit = () => {},
      ...rest
    },
    ref
  ) => {
    const popover = (
      <StyledPixelPopover
        style={styledPopover}
        className={className}
        id='popover-basic'
      >
        {PopoverContent}
      </StyledPixelPopover>
    )
    return (
      <OverlayTrigger
        rootClose={hideOnClickoutside}
        onExit={onPopoverExit}
        trigger='click'
        placement={popoverPlacement}
        overlay={popover}
      >
        {overlayButton}
      </OverlayTrigger>
    )
  }
)
export default PixelPopover
