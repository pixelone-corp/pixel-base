import React, { useState } from 'react'
import styled from 'styled-components'

interface Task {
  name: string
  category: string | number
  component: JSX.Element
}
interface ICategories {
  label: string
  value: string | number
}

interface DragAndDropProps {
  tasks: Task[]
  categories: ICategories[]
  direction: 'row' | 'column'
}

const DragAndDrop: React.FC<DragAndDropProps> = ({
  tasks: initialTasks,
  categories,
  direction
}) => {
  const [list, setList] = useState<Task[]>(initialTasks)

  const onDragStart = (event: React.DragEvent<HTMLDivElement>, id: string) => {
    event.dataTransfer.setData('id', id)
  }

  const onDrop = (
    event: React.DragEvent<HTMLDivElement>,
    cat: string | number
  ) => {
    const id = event.dataTransfer.getData('id')
    const newTasks = list.map((task) => {
      if (task.name === id) {
        return { ...task, category: cat }
      }
      return task
    })

    setList(newTasks)
  }

  return (
    <DragDropContainer direction={direction}>
      {categories.map((category: ICategories) => (
        <DragDropBoard
          key={category.value}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, category.value)}
          categories={categories}
        >
          <ListHeading>
            <ListHeading>{category.label}</ListHeading>
          </ListHeading>
          {list.map(
            (task) =>
              task.category === category.value && (
                <TaskCard
                  key={task.name}
                  onDragStart={(e) => onDragStart(e, task.name)}
                  draggable
                >
                  <ListHeading>{task.name}</ListHeading>
                  <div>{task.component}</div>
                </TaskCard>
              )
          )}
        </DragDropBoard>
      ))}
    </DragDropContainer>
  )
}
export default DragAndDrop

const DragDropContainer = styled.div<{ direction: string }>`
  display: flex;
  justify-content: space-around;
  flex-direction: ${(props: DragAndDropProps) =>
    props.direction === 'row' ? 'row' : 'column'};
  gap: ${(props: DragAndDropProps) =>
    props.direction === 'row' ? '0' : '20px 0'};
`

const DragDropBoard = styled.div`
  border: 1px solid #ccc;
  padding: 5px 6px;
  border-radius: 3px;
`

const TaskCard = styled.div`
  text-align: center;
  background-color: #e6f7ff;
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
`

const ListHeading = styled.h3`
  text-align: center;
`
