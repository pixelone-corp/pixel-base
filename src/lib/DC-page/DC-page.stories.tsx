import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DCPage from './DC-page'

export default {
  title: 'DC Page',
  component: DCPage
} as ComponentMeta<typeof DCPage>

const Template: ComponentStory<typeof DCPage> = (args) => {
  return (
    <React.Fragment>
      <DCPage {...args} />
    </React.Fragment>
  )
}

export const PagePanel = Template.bind({})
