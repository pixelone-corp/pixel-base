import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DCDiv from './DC-div'

export default {
  title: 'DC Div',
  component: DCDiv
} as ComponentMeta<typeof DCDiv>

const Template: ComponentStory<typeof DCDiv> = (args) => {
  return (
    <React.Fragment>
      <DCDiv {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
