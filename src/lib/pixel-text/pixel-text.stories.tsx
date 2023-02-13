import React from "react";
import { ComponentStory } from '@storybook/react';

import PixelText from "./pixel-text";
import { Section, SectionActions } from "../common-styled-component";

export default {
  title: 'Pixel Text',
  component: PixelText,
}

const Template:ComponentStory<typeof PixelText> = (args) => {
  return(
    <React.Fragment>
      <Section>
        <SectionActions>
          <PixelText {...args}>Pixel Text</PixelText>
        </SectionActions>
      </Section>
    </React.Fragment>
  )
}

export const Simple = Template.bind({});
