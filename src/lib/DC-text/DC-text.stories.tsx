import React from 'react'
import { ComponentStory } from '@storybook/react'

import { DcText } from './DC-text'
import {
  Section,
  SectionActions,
  SectionContent
} from '../common-styled-component'
import PixelPageContainer from '../pixel-page-container/pixel-page-container'

export default {
  title: 'DC Text',
  component: DcText
}

const Template: ComponentStory<typeof DcText> = (args) => {
  return (
    <PixelPageContainer>
      <Section>
        <SectionContent>
          <DcText {...args}>Dc Text</DcText>
        </SectionContent>
      </Section>
    </PixelPageContainer>
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
