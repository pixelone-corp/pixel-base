import React from 'react';
import { ComponentStory } from '@storybook/react';

import PixelText from './pixel-text';

export default {
  title: "Pixel Text",
  component: PixelText,
}

const Template: ComponentStory<typeof PixelText> = (args) => {
  return(
    <React.Fragment>
      <PixelText {...args} >Pixel Text</PixelText>
    </React.Fragment>
  )
}

export const Simple = Template.bind({});
