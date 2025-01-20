import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcAlert, { DcAlertProps } from './dc-alert'

export default {
  title: 'DC Alert',
  component: DcAlert
} as ComponentMeta<typeof DcAlert>

const Template: ComponentStory<typeof DcAlert> = (args) => {
  return (
    <React.Fragment>
      <DcAlert {...args}>DC Alert</DcAlert>
    </React.Fragment>
  )
}

export const Simple = Template.bind({})

Simple.args = {
  variant: 'info'
}
