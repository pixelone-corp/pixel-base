import React from "react";
import { ComponentStory } from "@storybook/react";

import PixelPopover from "./pixel-popover";

export default {
  title: "PixelPopover",
  component: PixelPopover,
};


const Template:ComponentStory<typeof PixelPopover> = (args) => {
  return(
    <React.Fragment>
      <div style={{ padding: "200px", width: "100%", height: "100%" }}>
        <PixelPopover {...args} />
      </div>
    </React.Fragment>
  )
}

export const Simple = Template.bind({});
