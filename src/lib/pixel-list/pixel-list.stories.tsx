import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelList from "./pixel-list";

export default {
  title: "Pixel List",
  component: PixelList,
} as ComponentMeta<typeof PixelList>

const Template:ComponentStory<typeof PixelList> = (args) => {
  return(
    <React.Fragment>
      <PixelList {...args} />
    </React.Fragment>
  )
}

export const List = Template.bind({});
