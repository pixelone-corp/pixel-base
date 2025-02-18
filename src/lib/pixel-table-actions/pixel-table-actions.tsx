import React, { InputHTMLAttributes, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'
interface actionsData {
  icon: any
  clickHandler: any
  title?: string
  disabled?: boolean
  type?: string
  options?: any
}
export interface tableActionProps extends InputHTMLAttributes<HTMLDivElement> {
  className?: string
  row?: any
  action?: actionsData[]
}
// const NewAction = [
//   {
//     icon: "icon",
//     clickHandler: "click",
//   },
// ];

const StyledPixelTableAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`

const ActionItem = styled.div`
  position: relative;
  ${(props: any) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      color: grey !important;
      svg {
        color: grey !important;
      }
    `}
`

const isDisabled = (data, row) => {
  return typeof data.disabled === 'function'
    ? data.disabled(row)
    : data.disabled
}
const StyledDropDownToggle = styled(Dropdown.Toggle)`
  padding: 0 !important;
  margin: 0 !important;
  background: none !important;
  border: none !important;
  &:after {
    display: none !important;
  }
`
export const PixelTableAction = React.forwardRef<
  HTMLDivElement,
  tableActionProps
>(({ className, row, action, ...rest }, ref) => {
  return (
    <StyledPixelTableAction>
      {action?.map((data) => {
        const [show, setshow] = React.useState(false)
        return (
          <React.Fragment>
            <OverlayTrigger
              show={show}
              placement={'top'}
              overlay={<Tooltip id={`tooltip-${'top'}`}>{data.title}</Tooltip>}
            >
              {data.type === 'dropdown' ? (
                <Dropdown>
                  <StyledDropDownToggle>
                    <ActionItem
                      {...rest}
                      // disabled={isDisabled(data, row)}
                      onMouseEnter={() => setshow(true)}
                      onMouseLeave={() => setshow(false)}
                      // action={action}
                    >
                      {data.icon}
                    </ActionItem>
                  </StyledDropDownToggle>
                  <Dropdown.Menu>
                    {data.options?.map((data) => (
                      <Dropdown.Item
                        disabled={data.disabled}
                        onClick={() => data.clickHandler(row)}
                      >
                        {data.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <ActionItem
                  {...rest}
                  // disabled={isDisabled(data, row)}
                  onMouseEnter={() => setshow(true)}
                  onMouseLeave={() => setshow(false)}
                  // action={action}
                  onClick={() => {
                    if (isDisabled(data, row) && data.type === 'dropdown')
                      return
                    data.clickHandler(row)
                    setshow(false)
                  }}
                >
                  {data.icon}
                </ActionItem>
              )}
            </OverlayTrigger>
          </React.Fragment>
        )
      })}
    </StyledPixelTableAction>
  )
})
export default PixelTableAction
