import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DcCheckBox from './dc-checkbox'

// Component Metadata
export default {
  title: 'DC Checkbox',
  component: DcCheckBox
} as ComponentMeta<typeof DcCheckBox>

// Template
const Template: ComponentStory<typeof DcCheckBox> = (args) => {
  const [check, setCheck] = React.useState(args.checked || false)

  const onChange = () => {
    setCheck(!check)
  }

  return (
    <React.Fragment>
      <DcCheckBox {...args} checked={check} onChange={onChange} />
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
