import React from "react";

import PixelPopover from "./pixel-popover";
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Pixel Popover',
  component: PixelPopover,
}

const Template:ComponentStory<typeof PixelPopover> = (args) => {
  return (
    <React.Fragment>
      <PixelPopover {...args} />
    </React.Fragment>
  )
}

export const simple = Template.bind({});
