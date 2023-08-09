import React from 'react'
import styled from 'styled-components'

interface DragDropBoardProps {
  category: string
  categories: string[]
  onDrop: (event: React.DragEvent<HTMLDivElement>, cat: string) => void
}

const DragDropBoard: React.FC<DragDropBoardProps> = ({
  category,
  categories,
  onDrop,
  children
}) => {
  return (
    <StyledDragDropBoard
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, category)}
    >
      <ListHeading>
        {categories.includes(category)
          ? category.toUpperCase()
          : 'OTHER CATEGORY'}
      </ListHeading>
      {children}
    </StyledDragDropBoard>
  )
}

const StyledDragDropBoard = styled.div``

const ListHeading = styled.h3`
  text-align: center;
`

export default DragDropBoard
