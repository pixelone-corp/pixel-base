import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import PixelButton from '../pixel-button/pixel-button';
import PixelDiv from '../pixel-div/pixel-div';
export interface CollapseParams {
  className?: string
  children?: React.ReactNode
  defaultExpanded?: boolean
  disabled?: boolean
  collapsedHeight?: number
  collapseController?: React.ReactNode
  onCollapseStart?: () => void
  onExpandStart?: () => void
  onCollapseChange?: (collapse: boolean) => void
}
interface IGrandChild {
  props?: {
    id?: string
  }
}

export const PixelCollapse = React.forwardRef<
  HTMLButtonElement,
  CollapseParams
>((props, ref) => {
  const {
    className = '',
    children = 'This is the collapsible content. It can be any element or React component you like.',
    defaultExpanded = false,
    collapsedHeight = 0,
    onCollapseStart = () => { },
    onCollapseChange = (collapse: boolean) => { },
    onExpandStart = () => { },
    collapseController = <PixelButton>Collapse</PixelButton>,
    disabled = false,
    ...rest
  } = props
  const collapseHeaderRender = React.Children.map(collapseController, (child) => {
    if (React.isValidElement(child)) {
      const updatedChildren = React.Children.map(child.props.children, (grandChild) => {
        // @ts-ignore
        if (React.isValidElement(grandChild) && grandChild.props?.id === 'collapse-controller') {
          return React.cloneElement(grandChild, {
            // @ts-ignore
            onClick: () => {
              if (disabled) {
                return;
              }
              setIsExpanded(!isExpanded);
              onCollapseChange(!isExpanded);
              if (isExpanded) {
                onCollapseStart && onCollapseStart();
              } else {
                onExpandStart && onExpandStart();
              }
            }
          });
        }
        return grandChild;
      });

      return React.cloneElement(child, { children: updatedChildren });
    }

    return child;
  });

  const [isExpanded, setIsExpanded] = React.useState<boolean>(defaultExpanded)
  return (
    <React.Fragment>
      <PixelDiv width='100%'
        aria-controls="example-collapse-text"
        aria-expanded={isExpanded}
      >
        {collapseHeaderRender}
      </PixelDiv>
      <PixelDiv width='100%'>
        <Collapse in={isExpanded} dimension="height">
          <div id="example-collapse-text">

            {children}
          </div>
        </Collapse>
      </PixelDiv>
    </React.Fragment>

  )
})
export default PixelCollapse

