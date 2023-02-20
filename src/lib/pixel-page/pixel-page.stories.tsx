import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelPage from "./pixel-pagel";

export default {
  title: "Pixel Page",
  component: PixelPage,
} as ComponentMeta<typeof PixelPage>

const Template:ComponentStory<typeof PixelPage> = (args) => {
  return(
    <React.Fragment>
      <PixelPage {...args} />
    </React.Fragment>
  )
}

export const PagePanel = Template.bind({});
