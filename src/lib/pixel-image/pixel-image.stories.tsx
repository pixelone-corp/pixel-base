import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelImage from "./pixel-imagel";

export default {
  title: "Pixel Image",
  component: PixelImage,
} as ComponentMeta<typeof PixelImage>

const Template:ComponentStory<typeof PixelImage> = (args) => {
  return(
    <React.Fragment>
      <PixelImage {...args} />
    </React.Fragment>
  )
}

export const Image = Template.bind({});
