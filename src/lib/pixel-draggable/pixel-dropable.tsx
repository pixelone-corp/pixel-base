import React from 'react'
import styled from 'styled-components'

interface DroppableProps {
  onDrop: (e: React.DragEvent) => void
  onDragOver: (e: React.DragEvent) => void
  children: React.ReactNode // Add the children prop here
}

const Droppable: React.FC<DroppableProps> = ({
  onDrop,
  onDragOver,
  children
}) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    onDrop(e)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    onDragOver(e)
  }

  return (
    <Container onDrop={handleDrop} onDragOver={handleDragOver}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f1f1f1;
  padding: 10px;
`

export default Droppable
