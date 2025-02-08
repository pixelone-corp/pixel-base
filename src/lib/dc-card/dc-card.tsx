import styled from 'styled-components'

import React from 'react'
import {
  $DCDangerActiveColor,
  $DCDangerColor,
  $DCInfoActiveColor,
  $DCInfoColor,
  $DCLightActiveColor,
  $DCLightColor,
  $DCprimaryActiveColor,
  $DCprimaryColor,
  $DCsecondaryColor,
  $DCSuccessActiveColor,
  $DCSuccessColor,
  $DCWarningActiveColor,
  $DCWarningColor
} from '../styleGuide'

import DcButton from '../DC-button/DC-button'
export interface DcCardProps {
  className?: string
  fontSize?: string
  color?: string

  variant?:
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-info'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-dark'
    | 'simple'
    | string
  showTooltip?: boolean
  tooltip?: string
  onClick?: () => void
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
  padding?: string
  margin?: string
  style?: React.CSSProperties
  children?: any
  hoverStyle?: React.CSSProperties
  cursor?: string

  height?: string
  width?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  backgroundColor?: string
  border?: string
  borderRadious?: string
  opacity?: number
  boxShadow?: string
  data: { title: string; text: string; button: string; header: string }
}

export const DcCard = React.forwardRef<HTMLButtonElement, DcCardProps>(
  (props, ref) => {
    const {
      className,
      fontSize = '16px',
      color,

      onClick = () => {},
      hoverStyle,
      cursor,
      width,
      height,
      position,
      top,
      bottom,
      left,
      right,
      backgroundColor,
      border,
      borderRadious,
      opacity,
      boxShadow,
      showTooltip,
      tooltip,
      tooltipPlacement = 'top',
      padding,
      margin,
      variant = 'simple',
      data,
      ...rest
    } = props
    return (
      <React.Fragment>
        <CardBody
          props={props}
          variant={props.variant}
          className='card'
          style={{ minWidth: '18rem', width: 'auto' }}
        >
          <CardContainer variant={props.variant}>
            <CardHeader>{data.header || 'Header'}</CardHeader>
            <CardTitle>{data.title || 'Card title'}</CardTitle>
            <CardText className='card-text'>
              {data.text
                ? data.text
                : "  Some quick example text to build on the card title and make up the bulk of the card's content."}
            </CardText>
            {props.variant === 'simple' && (
              <CardButton onClick={onClick} className='btn btnprimary-'>
                {data.button ? data.button : 'Go somewhere'}
              </CardButton>
            )}
          </CardContainer>
        </CardBody>
      </React.Fragment>
    )
  }
)

//create card component
const CardContainer = styled.div<{ variant?: string }>`
  ${(props) =>
    props.variant === 'outline-primary' &&
    `
    // border: 1px solid ${$DCprimaryColor};
    border-radius: 0.25rem;
    padding:10px;
    `}

  padding: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`

const CardBody = styled.div<{ props }>`
  ${(props) =>
    props.variant === 'outline-primary' &&
    `border: 1px solid ${$DCprimaryColor};
    border-radius: 0.25rem;

    &:hover {
    border: 1px solid ${$DCprimaryActiveColor};
    cursor:pointer !important;
  }
    `}
  ${(props) =>
    props.variant === 'outline-secondary' &&
    `border: 1px solid ${$DCsecondaryColor};
    border-radius: 0.25rem;
    &:hover {
    border: 1px solid ${$DCprimaryActiveColor};
    cursor:pointer !important;
  }

    `}
  ${(props) =>
    props.variant === 'outline-success' &&
    `border: 1px solid ${$DCSuccessColor};
    border-radius: 0.25rem;
    &:hover {
    border: 1px solid ${$DCSuccessActiveColor};
    cursor:pointer !important;
  }
    `}
  ${(props) =>
    props.variant === 'outline-info' &&
    `border: 1px solid ${$DCInfoColor};
    border-radius: 0.25rem;
    &:hover {
    border: 1px solid ${$DCInfoActiveColor};
    cursor:pointer !important;
    }
    `}
  ${(props) =>
    props.variant === 'outline-danger' &&
    `border: 1px solid ${$DCDangerColor};
    border-radius: 0.25rem;
    &:hover {
    border: 1px solid ${$DCDangerActiveColor};
    cursor:pointer !important;
    }
    `}
  ${(props) =>
    props.variant === 'outline-warning' &&
    `border: 1px solid ${$DCWarningColor};
    border-radius: 0.25rem;
    &:hover {
    border: 1px solid ${$DCWarningActiveColor};
    cursor:pointer !important;
    }

    `}
  ${(props) =>
    props.variant === 'outline-light' &&
    `border: 1px solid ${$DCLightColor};
    border-radius: 0.25rem;
    &:hover {
    border:1px solid ${$DCLightActiveColor};
    cursor:pointer !important;
    }
    `}
      ${(props) => props.padding && `padding: ${props.padding};`}
    ${(props) => props.margin && `margin: ${props.margin};`}
    /* ${(props) => props.cursor && `cursor: ${props.cursor};`} */
    ${(props) => props.hoverStyle && `&:hover {${props.hoverStyle}}`}
    ${(props) => props.width && `width: ${props.width};`}
    ${(props) => props.height && `height: ${props.height};`}
    ${(props) => props.position && `position: ${props.position};`}
    ${(props) => props.top && `top: ${props.top};`}
    ${(props) => props.bottom && `bottom: ${props.bottom};`}
    ${(props) => props.left && `left: ${props.left};`}
    ${(props) => props.right && `right: ${props.right};`}
    ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
    ${(props) => props.border && `border: ${props.border};`}
    ${(props) =>
    props.borderRadious && `border-radius: ${props.borderRadious};`}
    ${(props) => props.opacity && `opacity: ${props.opacity};`}
    ${(props) => props.boxShadow && `box-shadow: ${props.boxShadow};`}


  padding: 0px;
  /* border-top: 1px solid rgba(0, 0, 0, 0.125); */
`
const CardTitle = styled.h5<{ variant?: string }>`
  padding: 0.75rem 20px;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
`
const CardHeader = styled.h5<{ variant?: string }>`
  ${(props) =>
    props.variant !== 'simple' &&
    `
    border-radius: 0.25rem;
    color:#43476b;
    font-size: 1rem;
    padding: 10px 20px;
  `}
  /* margin-bottom: 0.75rem; */
  line-height: 1.67;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 10px 20px;
  background-color: #f8f9fa;
`
const CardText = styled.p`
  /* margin-bottom: 1rem; */
  font-size: 1rem;
  font-weight: 400;
  padding: 10px 20px;
  margin: 0;
  /* background-color: #f8f9fa; */
`
const CardButton = styled(DcButton)`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.1px 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s;
  cursor: pointer;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  margin: 10px 20px;
  &:hover {
    color: #fff;
    background-color: #0056b3;
    border-color: #0056b3;
  }
`

export default DcCard
