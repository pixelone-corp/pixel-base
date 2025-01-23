import React from 'react'
import { ComponentStory } from '@storybook/react'

import DcTopBar from './DC-top-bar'

export default {
  title: 'DC Top Bar',
  component: DcTopBar
}

const Template: ComponentStory<typeof DcTopBar> = (args) => {
  return (
    <React.Fragment>
      <DcTopBar {...args}>Pixel Top Bar</DcTopBar>
    </React.Fragment>
  )
}

export const DcTopBarStory = Template.bind({})
