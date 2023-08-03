import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import PixelDate from '../pixel-date/pixel-date'
import PixelDiv from '../pixel-div/pixel-div'
import PixelText from '../pixel-text/pixel-text'
import Pixelcard from '../pixel-card/pixel-card'
import PixelListItem from '../pixel-list-item/pixel-list-item'
import PixelDropDown from '../pixel-select-drop-down/pixel-select-drop-down'

export interface PixelDraggableProps {
  className?: string
  width?: string
  height?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  children?: React.ReactNode
  backgroundColor?: string
  padding?: string
  margin?: string
  style?: React.CSSProperties
  id?: string
  onClick?: () => void
}
export const PixelDraggable = React.forwardRef<
  HTMLDivElement,
  PixelDraggableProps
>((props, ref) => {
  const dragItem = useRef()
  const dragOverItem = useRef()
  const [list, setList] = useState([
    {
      name: 'Pixel Date',
      component: <PixelDate value='20 Aug 2020' />
    },
    {
      name: 'Pixel Div',
      component: (
        <PixelDiv height='100px' width='100%' backgroundColor='#ff0000' />
      )
    },
    {
      name: 'Pixel Text',
      component: <PixelText />
    },
    {
      name: 'Pixel Card',
      component: <Pixelcard />
    },

    {
      name: 'Pixel DropDown',
      component: (
        <PixelDropDown
          options={[
            {
              value: '1',
              label: 'One',
              isChecked: false
            },
            {
              value: '2',
              label: 'Two',
              isChecked: false
            }
          ]}
        />
      )
    }
  ])
  const dragStart = (e, position) => {
    dragItem.current = position
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
  }

  const drop = (e) => {
    const copyListItems = [...list]
    const dragItemContent = copyListItems[dragItem.current]
    copyListItems.splice(dragItem.current, 1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setList(copyListItems)
  }
  return (
    <React.Fragment>
      <>
        <DivContainer {...props} ref={ref}>
          {list &&
            list.map((item, index) => (
              <ListText
                key={index}
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                onDragOver={(e) => e.preventDefault()}
              >
                {item.name}
                {item.component}
              </ListText>
            ))}
        </DivContainer>
      </>
    </React.Fragment>
  )
})

const DivContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const ListText = styled.div`
  background-color: #add9e6;
  //   color: #fff;
  text-align: center;
`
export default PixelDraggable
