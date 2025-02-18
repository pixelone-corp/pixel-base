import React from 'react'
import styled from 'styled-components'

export interface DCPageProps {
  height: string
  width: string
  flexDirection: string
  alignItems: string
  justifyContent: string
  children: React.ReactNode
  padding: string
  margin: string
  border: string
  borderRadious: string
  boxShadow: string
  backgroundColor: string
  position: string
  top: string
  bottom: string
  left: string
  right: string

  style: React.CSSProperties
}

export function DCPage(props: DCPageProps) {
  return (
    <React.Fragment>
      <DCPageContainer {...props}></DCPageContainer>
    </React.Fragment>
  )
}

const DCPageContainer = styled.div<DCPageProps>`
  height: ${(props) => (props.height ? props.height : '100%')};
  width: ${(props) => (props.width ? props.width : '100%')};
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'center'};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  border: ${(props) => (props.border ? props.border : 'none')};
  border-radius: ${(props) =>
    props.borderRadious ? props.borderRadious : '0px'};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : 'none')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'none'};
  position: ${(props) => (props.position ? props.position : 'none')};
  top: ${(props) => (props.top ? props.top : 'none')};
  bottom: ${(props) => (props.bottom ? props.bottom : 'none')};
  left: ${(props) => (props.left ? props.left : 'none')};
  right: ${(props) => (props.right ? props.right : 'none')};
  ${(props) => ({ ...props.style })}
`

export default DCPage
