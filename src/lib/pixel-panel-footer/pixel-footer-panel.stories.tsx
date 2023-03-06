import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelFooterPanel from "./pixel-footer-panel";
import PixelRightPanel from "../pixel-panel-right/pixel-right-panel";
import PixelLeftPanel from "../pixel-panel-left/pixel-left-panel";
import { $primaryColor } from "../styleGuide";

export default {
  title: "Pixel Footer Panel",
  component: PixelFooterPanel,
} as ComponentMeta<typeof PixelFooterPanel>

const Template: ComponentStory<typeof PixelFooterPanel> = (args) => {
  return (
    <React.Fragment>
      <PixelFooterPanel backgroundColor={$primaryColor} height={"50px"}  {...args} >
        <PixelRightPanel backgroundColor="red" width="30%" height="40px">Right Side</PixelRightPanel>
        <PixelLeftPanel backgroundColor="pink" width="30%" height="40px">Left Side</PixelLeftPanel>
      </PixelFooterPanel>
    </React.Fragment>
  )
}

export const FooterPanel = Template.bind({});
