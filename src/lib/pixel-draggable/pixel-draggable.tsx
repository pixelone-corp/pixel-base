import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import PixelDate from '../pixel-date/pixel-date'
import PixelDiv from '../pixel-div/pixel-div'
import PixelText from '../pixel-text/pixel-text'
import Pixelcard from '../pixel-card/pixel-card'
import PixelListItem from '../pixel-list-item/pixel-list-item'
import PixelDropDown from '../pixel-select-drop-down/pixel-select-drop-down'
import PixelButton from '../pixel-button/pixel-button'
import PixelChart from '../pixel-chart/pixel-chart'
import PixelTag from '../pixel-tag/pixel-tag'
import PixelInput from '../pixel-input/pixel-input'
import PixelImage from '../pixel-image/pixel-image'
import PixelHeading from '../pixel-heading/pixel-heading'
import PixelDropZone from '../pixel-dropzone/pixel-dropzone'

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
  const LineChartOptions = {
    title: {
      text: 'Pixel Chart'
    },

    subtitle: {
      text: 'Source: PixelOne Library'
    },

    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
      }
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      },
      {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      },
      {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      },
      {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      },
      {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }
    ],
    credits: {
      enabled: false
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  }
  const [list, setList] = useState([
    {
      name: 'Pixel Date',
      component: <PixelDate className='pixeldate' value='20 Aug 2020' />
    },
    {
      name: 'Pixel Div',
      component: (
        <PixelDiv height='100px' width='100%' backgroundColor='#9B02FD' />
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
      name: 'Pixel Button',
      component: <PixelButton />
    },
    {
      name: 'Pixel Tag',
      component: <PixelTag />
    },
    {
      name: 'Pixel Heading',
      component: <PixelHeading />
    },
    {
      name: 'Pixel Image',
      component: <PixelImage height='50px' width='50px' />
    },
    {
      name: 'Pixel Input',
      component: <PixelInput name='Username....' />
    },
    // {
    //   name: 'Pixel Dropzone',
    //   component: <PixelDropZone />
    // },
    {
      name: 'Pixel Chart',
      component: <PixelChart options={LineChartOptions} />
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
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
`
const ListText = styled.div`
  background-color: #add9e6;
  //   color: #fff;
  text-align: center;
  height: auto;
  margin: 5px 0px;
`
export default PixelDraggable
