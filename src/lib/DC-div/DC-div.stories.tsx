import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcDiv from './DC-div'

export default {
  title: 'DC Div',
  component: DcDiv
} as ComponentMeta<typeof DcDiv>

const Template: ComponentStory<typeof DcDiv> = (args) => {
  return (
    <React.Fragment>
      <DcDiv {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
