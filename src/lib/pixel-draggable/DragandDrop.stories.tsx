import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDragDrop from './DragandDrop'
import PixelButton from '../pixel-button/pixel-button'
import PixelDate from '../pixel-date/pixel-date'
import PixelDiv from '../pixel-div/pixel-div'
import PixelImage from '../pixel-image/pixel-image'
import PixelInput from '../pixel-input/pixel-input'
import PixelText from '../pixel-text/pixel-text'

export default {
  title: 'Pixel Draggable',
  component: PixelDragDrop
} as ComponentMeta<typeof PixelDragDrop>

const containers = [
  {
    label: 'In-PROGRESS',
    value: 1
  },
  {
    label: 'COMPLETED',
    value: 2
  },
  {
    label: 'Up-COMMING',
    value: 3
  }
]
const initialTasks = [
  {
    name: 'Pixel Div',
    category: 1,
    component: <PixelDiv width='100%' height='50px' backgroundColor='#f23a56' />
  },
  {
    name: 'Pixel Text',
    category: 1,
    component: <PixelText />
  },
  {
    name: 'Pixel Button',
    category: 2,
    component: <PixelButton title='BTN'>My BTN</PixelButton>
  },
  {
    name: 'Pixel Date',
    category: 2,
    component: <PixelDate />
  },
  {
    name: 'Pixel Image',
    category: 3,
    component: <PixelImage width='100px' height='100px' />
  },
  {
    name: 'Pixel Input',
    category: 2,
    component: <PixelInput name='name' title='User Name...' />
  }
]

const Template: ComponentStory<typeof PixelDragDrop> = (args) => {
  return (
    <React.Fragment>
      <PixelDragDrop {...args} />
    </React.Fragment>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  categories: containers,
  tasks: initialTasks,
  direction: 'row'
}
