import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelTabPanel from "./pixel-tab-panel";

export default {
  title: "Pixel Tab Panel",
  component: PixelTabPanel,
} as ComponentMeta<typeof PixelTabPanel>

const Template:ComponentStory<typeof PixelTabPanel> = (args) => {
  return(
    <React.Fragment>
      <PixelTabPanel {...args} />
    </React.Fragment>
  )
}

export const TabPanel = Template.bind({});
