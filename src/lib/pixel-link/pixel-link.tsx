import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export interface PixelLinkProps {
  url: ''
  text: ''
}

export function PixelLink(props: PixelLinkProps) {
  return (
    <Link style={{ textDecoration: 'none' }} to={props.url}>
      <StyledPixelLink>{props.text}</StyledPixelLink>
    </Link>
  )
}
const StyledPixelLink = styled.p`
  text-decoration: none;
  font-size: 12px;
  color: #1328a0;
`
export default PixelLink
