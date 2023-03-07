import React from 'react'
import { Link } from 'react-router-dom'
import { PixelText } from '../pixel-text/pixel-text'
import { $grey_accent } from '../styleGuide'
import styled from 'styled-components'
import PixelIcon from '../pixel-button-icon/pixel-icon'
export interface PixelListItemProps {
  label?: string
  icon?: React.ReactNode
  link?: string
  activeTab: string
  value: string
  onChange: (item: string) => void
}

export function PixelListItem({
  label,
  icon,
  link,
  activeTab,
  value,
  onChange
}: PixelListItemProps) {
  return (
    <React.Fragment>
      <ListItemContainer
        onClick={() => {
          onChange(value)
        }}
        className={activeTab === value ? 'active' : ''}
      >
        <PixelIcon icon={icon} />
        <PixelText>{label}</PixelText>
        <Link to={link} />
      </ListItemContainer>
    </React.Fragment>
  )
}

const ListItemContainer = styled.div`
  color: #9b02fd !important;
  /* height: 100px;sa */
  width: 95%;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  flex-direction: row;
  align-items: center;
  position: relative;
  /* display: block; */
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: 5px;
  border-radius: 5px;
  :hover {
    background-color: ${$grey_accent} !important;
    cursor: pointer;
  }
  &.active {
    background-color: ${$grey_accent} !important;
  }
`

export default PixelListItem
