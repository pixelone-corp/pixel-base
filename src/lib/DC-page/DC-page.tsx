import React from 'react'
import styled from 'styled-components'

export interface DCPageProps {
  height: string
  width: string
  flexDirection: string
  alignItems: string
  justifyContent: string
}

export function DCPage(props: DCPageProps) {
  return (
    <React.Fragment>
      <DCPageContainer props={props}></DCPageContainer>
    </React.Fragment>
  )
}

const DCPageContainer = styled.div<{ props }>`
  height: ${(props) => {
    props.height ? props.height : '100%'
  }};
  width: ${(props) => {
    props.width ? props.width : '100%'
  }};
  display: flex;
  justify-content: ${(props) => {
    props.justifyContent ? props.justifyContent : 'center'
  }};
  align-items: ${(props) => {
    props.alignItems ? props.alignItems : 'center'
  }};
  flex-direction: ${(props) => {
    props.flexDirection ? props.flexDirection : 'center'
  }};
`

export default DCPage
