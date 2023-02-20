import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelHeaderPanel from "./pixel-header-panel";

export default {
  title: "Pixel Header Panel",
  component: PixelHeaderPanel,
} as ComponentMeta<typeof PixelHeaderPanel>

const Template:ComponentStory<typeof PixelHeaderPanel> = (args) => {
  return(
    <React.Fragment>
      <PixelHeaderPanel {...args} />
    </React.Fragment>
  )
}

export const HeaderPanel = Template.bind({});
