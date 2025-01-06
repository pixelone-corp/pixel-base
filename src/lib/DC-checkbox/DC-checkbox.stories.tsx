import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DCCheckBox from './DC-checkbox'

// Component Metadata
export default {
  title: 'DC Checkbox',
  component: DCCheckBox
} as ComponentMeta<typeof DCCheckBox>

// Template
const Template: ComponentStory<typeof DCCheckBox> = (args) => {
  const [check, setCheck] = React.useState(args.checked || false)

  const onChange = () => {
    setCheck(!check)
  }

  return (
    <React.Fragment>
      <DCCheckBox {...args} checked={check} onChange={onChange} />
    </React.Fragment>
  )
}

// Default Story
export const Defualt = Template.bind({})
Defualt.args = {
  label: 'Default checkbox',
  checked: false
}
export const Small = Template.bind({})
Small.args = {
  label: 'Small checkbox',

  size: 'sm'
}
export const Large = Template.bind({})
Large.args = {
  label: 'Large checkbox',

  size: 'lg'
}

// Configurable Args
Defualt.argTypes = {
  checked: {
    control: {
      type: 'boolean'
    }
  },
  label: {
    control: {
      type: 'text'
    }
  }
}
