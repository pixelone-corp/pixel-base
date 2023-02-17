import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelCollapsible from "./pixel-collapsible";

export default {
  title: "Pixel Collapsible",
  component: PixelCollapsible,
} as ComponentMeta<typeof PixelCollapsible>

const Template:ComponentStory<typeof PixelCollapsible> = (args) => {
  return(
    <React.Fragment>
      <PixelCollapsible {...args} />
    </React.Fragment>
  )
}

export const Collapsible = Template.bind({});
