import React from 'react'
import { ComponentStory } from '@storybook/react'

import DCTopBar from './DC-top-bar'

export default {
  title: 'DC Top Bar',
  component: DCTopBar
}

const Template: ComponentStory<typeof DCTopBar> = (args) => {
  return (
    <React.Fragment>
      <DCTopBar {...args}>Pixel Top Bar</DCTopBar>
    </React.Fragment>
  )
}

export const DCTopBarStory = Template.bind({})
