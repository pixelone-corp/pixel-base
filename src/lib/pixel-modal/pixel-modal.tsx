import React, { Children, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { $primaryColor } from '../styleGuide'
import { PixelButton } from '../pixel-button/pixel-button'
import { Modal } from 'react-bootstrap'

export interface ModalCustomSize {
  width?: string
  maxWidth?: string
  minWidth?: string
  height?: string
  maxHeight?: string
  minHeight?: string
}

export interface ModalProps {
  className?: string
  title?: string
  footer?: any
  size?: ModalCustomSize
  error?: string
  handleClose?: any
  show?: any
  children?: any
  overFlow?: boolean
}

const StyledModal = styled(Modal)<{ size: ModalCustomSize }>`
  z-index: 99999999999999999999999;
  ${(props) => {
    const { size } = props
    return `
    .modal-dialog {
      width: ${size?.width || 'auto'};
      max-width: ${size?.maxWidth || 'auto'};
      min-width: ${size?.minWidth || 'auto'};
      height: ${size?.height || 'auto'};
      max-height: ${size?.maxHeight || 'auto'};
      min-height: ${size?.minHeight || 'auto'};
    }
    `
  }}
  .btn-close {
    &:active,
    &:focus {
      background: transparent
        url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nIzAwMCc+PHBhdGggZD0nTS4yOTMuMjkzYTEgMSAwIDAxMS40MTQgMEw4IDYuNTg2IDE0LjI5My4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEw5LjQxNCA4bDYuMjkzIDYuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDggOS40MTRsLTYuMjkzIDYuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDYuNTg2IDggLjI5MyAxLjcwN2ExIDEgMCAwMTAtMS40MTR6Jy8+PC9zdmc+')
        center/1em auto no-repeat;
    }
  }
`

const ModalHeader = styled(Modal.Header)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: auto;
`
const StyledLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #171717;
  margin-right: 5px;
`

export const PixelModal = React.forwardRef<ModalProps>(
  (
    {
      className,
      title,
      footer,
      error,
      handleClose,
      show,
      children,
      size = {},
      overFlow = false,
      ...rest
    }: ModalProps,
    ref
  ) => {
    return (
      <StyledModal
        backdrop='static'
        keyboard={false}
        size={size}
        ref={ref}
        {...rest}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <ModalBody overFlow={overFlow}>{children}</ModalBody>
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </StyledModal>
    )
  }
)
const ModalBody = styled(Modal.Body)`
  ${(props) =>
    props.overflow === true &&
    css`
      & > * {
        overflow-x: visible !important;
        overflow-y: visible !important;
      }
    `}
`
export default PixelModal
