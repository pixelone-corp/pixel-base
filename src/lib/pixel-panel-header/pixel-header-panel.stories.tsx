import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelHeaderPanel from "./pixel-header-panel";
import PixelRightPanel from "../pixel-panel-right/pixel-right-panel";
import PixelLeftPanel from "../pixel-panel-left/pixel-left-panel";
import { $primaryColor } from "../styleGuide";

export default {
  title: "Pixel Header Panel",
  component: PixelHeaderPanel,
} as ComponentMeta<typeof PixelHeaderPanel>

const Template: ComponentStory<typeof PixelHeaderPanel> = (args) => {
  return (
    <React.Fragment>
      <PixelHeaderPanel backgroundColor={$primaryColor} height={"50px"} {...args} >
        <PixelRightPanel backgroundColor="red" width="30%" height="40px">Right Side</PixelRightPanel>
        <PixelLeftPanel backgroundColor="pink" width="30%" height="40px">Left Side</PixelLeftPanel>
      </PixelHeaderPanel>
    </React.Fragment>
  )
}

export const HeaderPanel = Template.bind({});
