import React from 'react'
import styled from 'styled-components'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import ClickOutside from 'rechat-react-click-outside'
import { PixelButton } from '../pixel-button/pixel-button'
export interface PixelPopoverProps {
  className?: string
  PopoverContent?: any
  popoverPlacement?: 'top' | 'right' | 'bottom' | 'left'
  overlayButton?: any
  styledPopover?: object
  hideOnClickOutside?: boolean
  onPopoverExit?: () => {}
}

const StyledPixelPopover = styled(Popover)<{ position: any }>`
  top: ${(props) =>
    props.position.top !== 0 ? `${props.position.top}px !important` : 'none'};
  bottom: ${(props) =>
    props.position.bottom !== 0
      ? `${props.position.bottom}px !important`
      : 'none'};
  left: ${(props) =>
    props.position.left !== 0 ? `${props.position.left}px !important` : 'none'};
  right: ${(props) =>
    props.position.right !== 0
      ? `${props.position.right}px !important`
      : 'none'};
  transform: none !important;
  .popover-arrow {
    display: none;
  }
`
const PixelPopoverContainer = styled.div`
  position: relative;
`
const PopoverButtonContainer = styled.div``

export const PixelPopover = React.forwardRef<HTMLDivElement, PixelPopoverProps>(
  (
    {
      className,
      PopoverContent = 'Popover Content',
      popoverPlacement = 'bottom',
      overlayButton = <PixelButton>Overlay</PixelButton>,
      styledPopover = {},
      hideOnClickOutside = true,
      onPopoverExit = () => {},
      ...rest
    },
    ref
  ) => {
    const [popoverPosition, setPopoverPosition] = React.useState({
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    })
    const [triggerSize, setTriggerSize] = React.useState({
      height: 0,
      width: 0
    })
    const [show, setShow] = React.useState(false)
    const [target, setTarget] = React.useState(null)
    const newRef = React.useRef(null)
    const buttonRef = React.useRef(null)
    const popoverNewPosition = (triggerSize, popoverPlacement) => {
      let position = {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      }
      switch (popoverPlacement) {
        case 'left':
          position = {
            left: 0,
            right: triggerSize.width + 8,
            bottom: 0,
            top: -Number(triggerSize.height) / 2
          }
          break
        case 'right':
          position = {
            left: triggerSize.width + 8,
            right: 0,
            bottom: 0,
            top: -Number(triggerSize.height) / 2
          }
          break
        case 'top':
          position = {
            left: -Number(triggerSize.width) - 8,
            right: 0,
            bottom: triggerSize.height + 8,
            top: 0
          }
          break
        default:
          position = {
            left: -Number(triggerSize.width) - 8,
            right: 0,
            bottom: 0,
            top: Number(triggerSize.height) + 8
          }
          break
      }
      return position
    }
    React.useEffect(() => {
      const height = buttonRef.current.offsetHeight
      const width = buttonRef.current.offsetWidth
      setTriggerSize({
        height: height,
        width: width
      })
    }, [buttonRef])
    const handleClick = (event) => {
      setShow(!show)
      setTarget(event.target)

      const setPosition = popoverNewPosition(triggerSize, popoverPlacement)
      setPopoverPosition({
        left: setPosition.left,
        right: setPosition.right,
        bottom: setPosition.bottom,
        top: setPosition.top
      })
    }
    return (
      <ClickOutside
        onClickOutside={() => {
          if (hideOnClickOutside) {
            setShow(false)
          }
        }}
      >
        <PixelPopoverContainer ref={newRef}>
          <PopoverButtonContainer onClick={handleClick} ref={buttonRef}>
            {overlayButton}
          </PopoverButtonContainer>
          <Overlay
            show={show}
            onExit={onPopoverExit}
            container={newRef}
            containerPadding={20}
            target={target}
            placement={popoverPlacement}
          >
            <StyledPixelPopover
              position={popoverPosition}
              style={styledPopover}
              className={'transform'}
              id='popover-contained'
            >
              {PopoverContent}
            </StyledPixelPopover>
          </Overlay>
        </PixelPopoverContainer>
      </ClickOutside>
    )
  }
)
export default PixelPopover
