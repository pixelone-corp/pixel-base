import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DCFlexBox from './DC-flex-box'

export default {
  title: 'DC Flex Box',
  component: DCFlexBox
} as ComponentMeta<typeof DCFlexBox>

const Template: ComponentStory<typeof DCFlexBox> = (args) => {
  return (
    <React.Fragment>
      <DCFlexBox {...args} />
    </React.Fragment>
  )
}

export const FlexBox = Template.bind({})
