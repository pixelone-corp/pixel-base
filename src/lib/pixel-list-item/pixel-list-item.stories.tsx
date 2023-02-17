import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelListItem from "./pixel-list-item";

export default {
  title: "Pixel List Item",
  component: PixelListItem,
} as ComponentMeta<typeof PixelListItem>

const Template:ComponentStory<typeof PixelListItem> = (args) => {
  return(
    <React.Fragment>
      <PixelListItem {...args} />
    </React.Fragment>
  )
}

export const ListItem = Template.bind({});
