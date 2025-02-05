import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcDropDown from './DC-drop-down'
import PixelProfile from '../pixel-user-profile/pixel-user-profile'
import PixelTag from '../pixel-tag/pixel-tag'

export default {
  title: 'DC Dropdown',
  component: DcDropDown,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof DcDropDown>

const Template: ComponentStory<typeof DcDropDown> = (args) => {
  const [value, setValue] = React.useState('')
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }
  onsubmit = (e) => {
    e.preventDefault()
    alert('Form Submitted')
  }
  args.onChange = onChangeHandler
  return (
    <React.Fragment>
      <form>
        <DcDropDown
          value={value}
          {...args}
          placeholder='DC DropDown'
          required
        />
      </form>
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  label: 'DCDropDown',
  options: [
    {
      value: '1',
      label: (
        <PixelProfile
          user={{
            first_name: 'Zeeshan',
            last_name: 'Saqib',
            role: 'Engineer',
            manager: 'Muhammad Usman',
            user_type: 'FUll Time',
            created_at: {
              date: '2023-01-21 03:53:42.000000'
            },
            profile: { email: 'jawad@pixelone.app' },
            photo: {
              attachment_path:
                'https://storage.googleapis.com/pixelone/global/default-employee-photo.png'
            }
          }}
          isShowPopup={false}
          color={''}
        />
      )
    },
    {
      value: '2',
      label: <PixelTag customBackgroundColor={'red'}>red</PixelTag>
    },
    {
      value: '3',
      label: 'Option 2'
    },
    {
      value: '4',
      label: 'Option 3'
    },
    {
      value: '5',
      label: 'Diabled',
      disabled: true
    },
    {
      value: '6',
      label: 'Option 4'
    },

    {
      value: '7',
      label: 'Option 5'
    },

    {
      value: '8',
      label: 'Option 6'
    },

    {
      value: '9',
      label: 'Option 7'
    },

    {
      value: '10',
      label: 'Option 8'
    },

    {
      value: '11',
      label: 'Option 9'
    },

    {
      value: '12',
      label: 'Option 10'
    },

    {
      value: '13',
      label: 'Option 11'
    },

    {
      value: '14',
      label: 'Option 12'
    },

    {
      value: '15',
      label: 'Option 13'
    },

    {
      value: '16',
      label: 'Option 14'
    },

    {
      value: '17',
      label: 'Option 15'
    }
  ],
  isgrouped: false
}
export const Grouped = Template.bind({})
Grouped.args = {
  label: 'PixelDropDown',
  groupOptionData: {
    'Group Heading': [
      {
        value: '1',
        label: 'Option 1'
      },
      {
        value: '2',
        label: 'Option 2'
      }
    ],
    'Group Heading 2': [
      {
        value: '3',
        label: 'Option 3'
      },
      {
        value: '4',
        label: 'Option 4',
        disabled: true
      }
    ]
  },
  isgrouped: true
}
