import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelRightPanel from "./pixel-right-panel";

export default {
  title: "Pixel Right Panel",
  component: PixelRightPanel,
} as ComponentMeta<typeof PixelRightPanel>

const Template:ComponentStory<typeof PixelRightPanel> = (args) => {
  return(
    <React.Fragment>
      <PixelRightPanel {...args} />
    </React.Fragment>
  )
}

export const RightPanel = Template.bind({});
