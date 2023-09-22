import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelInput from './pixel-input'

export default {
  title: 'Pixel Input',
  component: PixelInput
} as ComponentMeta<typeof PixelInput>
const Template: ComponentStory<typeof PixelInput> = (args) => {
  const [value, setValue] = React.useState('')

  return (
    <React.Fragment>
      <PixelInput
        {...args}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        value={value}
      />

    </React.Fragment>
  )
}
export const Input = Template.bind({})
Input.args = {
  placeholder: 'Pixel Input'
}
export const InputAsDatePicker = Template.bind({})
InputAsDatePicker.args = {
  placeholder: 'Pixel Input',
  as: 'datePicker',
  showResetDate: true,
  showClose: true,
  value:"Mon Sep 04 2023 19:00:00 GMT+0500 (Uzbekistan Standard Time)"
}
export const InputAsTextArea = Template.bind({})
InputAsTextArea.args = {
  placeholder: 'Pixel Input AS TextArea',
  as: 'textarea'
}
export const InputAsTypeAhead = Template.bind({})
InputAsTypeAhead.args = {
  placeholder: 'Pixel Input',
  as: 'typeahead'
}
