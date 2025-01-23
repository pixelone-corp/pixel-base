import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DcSwitch from './DC-switch'
import { Section, SectionActions } from '../common-styled-component/section'

export default {
  title: 'DC Switch',
  component: DcSwitch
} as ComponentMeta<typeof DcSwitch>

const Template: ComponentStory<typeof DcSwitch> = (args) => {
  const [checked, setChecked] = React.useState(true)
  return (
    <React.Fragment>
      <Section>
        <SectionActions>
          <DcSwitch
            {...args}
            value={checked}
            onChange={(e) => {
              setChecked(e.target.checked)
            }}
            label={checked ? 'ON' : 'OFF'}
          />
        </SectionActions>
      </Section>
    </React.Fragment>
  )
}
export const Defualt = Template.bind({})
Defualt.args = {
  size: ''
}
export const Small = Template.bind({})
Small.args = {
  size: 'sm'
}
export const large = Template.bind({})
large.args = {
  size: 'lg'
}
export const Disabled = Template.bind({})
Disabled.args = {
  size: 'lg',
  disabled: true
}
