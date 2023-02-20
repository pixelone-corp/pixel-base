import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelLoader from "./pixel-loader";

export default {
  title: "Pixel Loader",
  component: PixelLoader,
} as ComponentMeta<typeof PixelLoader>

const Template:ComponentStory<typeof PixelLoader> = (args) => {
  return(
    <React.Fragment>
      <PixelLoader {...args} />
    </React.Fragment>
  )
}

export const Loader = Template.bind({});
