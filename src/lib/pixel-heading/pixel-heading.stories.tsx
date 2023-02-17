import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelHeading from "./pixel-heading";

export default {
  title: "Pixel Heading",
  component: PixelHeading,
} as ComponentMeta<typeof PixelHeading>

const Template:ComponentStory<typeof PixelHeading> = (args) => {
  return(
    <React.Fragment>
      <PixelHeading {...args} />
    </React.Fragment>
  )
}

export const Heading = Template.bind({});
