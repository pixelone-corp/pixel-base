import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcInput from './DC-input'
import PixelDropDownMenu from '../pixel-drop-dow-menu/pixel-drop-down-menu'

export default {
  title: 'DC Input',
  component: DcInput
} as ComponentMeta<typeof DcInput>
const Template: ComponentStory<typeof DcInput> = (args) => {
  const [value, setValue] = React.useState('')

  return (
    <React.Fragment>
      <PixelDropDownMenu
        className='string'
        variant='tag'
        size='lg'
        margin='10px'
        padding='20px'
        tooltip='string'
        options={[
          {
            label: 'Child 2',

            children: [
              {
                label: 'Test 1',
                clickHandler: () => {
                  console.log('testing')
                }
              },
              { label: 'Test 2', clickHandler: () => {} },
              { label: 'Test 323' },
              { label: 'Test 12323', clickHandler: () => {} }
            ]
          },
          {
            label: 'Child 3',
            children: [
              { label: 'Test 321' },
              { label: 'Test 13232' },
              { label: 'Test dfd1' },
              { label: 'Test 1fdf' }
            ]
          },
          {
            label: 'Child 4',
            children: [
              { label: 'Test 1' },
              { label: 'Test 1' },
              { label: 'Test 1' },
              { label: 'Test 1' }
            ]
          }
        ]}
      />

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
export const TypeAhead = Template.bind({})
TypeAhead.args = {
  placeholder: 'DC Input TypeAhead',
  as: 'typeahead'
}
