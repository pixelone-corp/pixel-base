import React from "react";
import { ComponentStory } from "@storybook/react";

import PixelTopBar from "./pixel-top-bar";

export default {
  title: 'Pixel Top Bar',
  component: PixelTopBar,
}

const Template: ComponentStory<typeof PixelTopBar> = (args) => {
  return(
    <React.Fragment>
      <PixelTopBar {...args}>Pixel Top BAR</PixelTopBar>
    </React.Fragment>
  )
}

export const Simple = Template.bind({});
