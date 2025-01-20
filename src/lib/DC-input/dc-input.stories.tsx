import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcInput from './dc-input'

export default {
  title: 'DC Input',
  component: DcInput
} as ComponentMeta<typeof DcInput>
const Template: ComponentStory<typeof DcInput> = (args) => {
  const [value, setValue] = React.useState('')

  return (
    <React.Fragment>
      <DcInput
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
