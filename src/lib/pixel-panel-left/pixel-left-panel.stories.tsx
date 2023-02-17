import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelLeftPanel from "./pixel-left-panel";

export default {
  title: "Pixel Left Panel",
  component: PixelLeftPanel,
} as ComponentMeta<typeof PixelLeftPanel>

const Template:ComponentStory<typeof PixelLeftPanel> = (args) => {
  return(
    <React.Fragment>
      <PixelLeftPanel {...args} />
    </React.Fragment>
  )
}

export const LeftPanel = Template.bind({});
