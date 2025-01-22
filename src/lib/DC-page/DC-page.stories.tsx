import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcPage from './DC-page'

export default {
  title: 'DC Page',
  component: DcPage
} as ComponentMeta<typeof DcPage>

const Template: ComponentStory<typeof DcPage> = (args) => {
  return (
    <React.Fragment>
      <DcPage {...args} />
    </React.Fragment>
  )
}

export const PagePanel = Template.bind({})
