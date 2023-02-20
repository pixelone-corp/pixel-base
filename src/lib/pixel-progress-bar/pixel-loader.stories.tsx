import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelProgressBar from "./pixel-loader";

export default {
  title: "Pixel Progress Bar",
  component: PixelProgressBar,
} as ComponentMeta<typeof PixelProgressBar>

const Template:ComponentStory<typeof PixelProgressBar> = (args) => {
  return(
    <React.Fragment>
      <PixelProgressBar {...args} />
    </React.Fragment>
  )
}

export const ProgressBar = Template.bind({});
