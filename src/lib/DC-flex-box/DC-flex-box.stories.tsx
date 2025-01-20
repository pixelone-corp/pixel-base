import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcFlexBox from './dc-flex-box'

export default {
  title: 'DC Flex Box',
  component: DcFlexBox
} as ComponentMeta<typeof DcFlexBox>

const Template: ComponentStory<typeof DcFlexBox> = (args) => {
  return (
    <React.Fragment>
      <DcFlexBox {...args} />
    </React.Fragment>
  )
}

export const FlexBox = Template.bind({})
