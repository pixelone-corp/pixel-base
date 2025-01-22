import React from 'react'
import { ComponentStory } from '@storybook/react'

import { DcText } from './DC-text'
import { Section, SectionActions } from '../common-styled-component'

export default {
  title: 'DC Text',
  component: DcText
}

const Template: ComponentStory<typeof DcText> = (args) => {
  return (
    <React.Fragment>
      <Section>
        <SectionActions>
          <DcText {...args}>Dc Text</DcText>
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
