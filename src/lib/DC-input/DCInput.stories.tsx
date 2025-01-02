import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DCInput from './DC-input'

export default {
  title: 'DC Input',
  component: DCInput
} as ComponentMeta<typeof DCInput>
const Template: ComponentStory<typeof DCInput> = (args) => {
  const [value, setValue] = React.useState('')

  return (
    <React.Fragment>
      <DCInput
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
  placeholder: 'Enter email'
}
export const InputAsDatePicker = Template.bind({})
InputAsDatePicker.args = {
  placeholder: 'DC Input As DatePicker',
  as: 'datePicker',
  showResetDate: true,
  showClose: true,
  value: new Date()
}
export const InputAsTextArea = Template.bind({})
InputAsTextArea.args = {
  placeholder: 'DC Input AS TextArea',
  as: 'textarea'
}
export const Password = Template.bind({})
Password.args = {
  placeholder: 'DC Input password',
  as: 'password'
}
