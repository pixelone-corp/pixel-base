import React from 'react'
import { ComponentStory } from '@storybook/react'

import { DCText } from './DC-text'
import { Section, SectionActions } from '../common-styled-component'

export default {
  title: 'DC Text',
  component: DCText
}

const Template: ComponentStory<typeof DCText> = (args) => {
  return (
    <React.Fragment>
      <Section>
        <SectionActions>
          <DCText {...args}>Pixel Text</DCText>
        </SectionActions>
      </Section>
    </React.Fragment>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  multiLine: false,
  charLimit: 500,
  showToolTip: false,
  tooltipPlacement: 'top',
  copyToClipboard: false,
  className: 'h1'
}
