import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelFooterPanel from "./pixel-footer-panel";

export default {
  title: "Pixel Footer Panel",
  component: PixelFooterPanel,
} as ComponentMeta<typeof PixelFooterPanel>

const Template:ComponentStory<typeof PixelFooterPanel> = (args) => {
  return(
    <React.Fragment>
      <PixelFooterPanel {...args} />
    </React.Fragment>
  )
}

export const FooterPanel = Template.bind({});
