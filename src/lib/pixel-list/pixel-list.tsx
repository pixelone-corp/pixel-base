import React from 'react'
import styled from 'styled-components'

export interface PixelListProps {
  children?: React.ReactNode
}

const PixelList = (props: PixelListProps) => {
  return (
    <React.Fragment>
      <ListContainer {...props}>{props.children}</ListContainer>
    </React.Fragment>
  )
}

const ListContainer = styled.div`
  color: #9b02fd !important;
  border: 1px solid Lightgray;
  height: auto;
  width: auto;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
`

export default PixelList

