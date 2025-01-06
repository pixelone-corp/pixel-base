import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DCLeftPanel from './DC-left-panel'

export default {
  title: 'DC Left Panel',
  component: DCLeftPanel
} as ComponentMeta<typeof DCLeftPanel>

const Template: ComponentStory<typeof DCLeftPanel> = (args) => {
  return (
    <React.Fragment>
      <DCLeftPanel {...args} />
    </React.Fragment>
  )
}

export const LeftPanel = Template.bind({})
