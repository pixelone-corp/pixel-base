import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcRightPanel from './DC-right-panel'

export default {
  title: 'DC Right Panel',
  component: DcRightPanel
} as ComponentMeta<typeof DcRightPanel>

const Template: ComponentStory<typeof DcRightPanel> = (args) => {
  return (
    <React.Fragment>
      <DcRightPanel {...args} />
    </React.Fragment>
  )
}

export const RightPanel = Template.bind({})
