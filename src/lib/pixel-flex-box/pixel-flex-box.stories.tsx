import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelFlexBox from "./pixel-flex-box";

export default {
  title: "Pixel Flex Box",
  component: PixelFlexBox,
} as ComponentMeta<typeof PixelFlexBox>

const Template:ComponentStory<typeof PixelFlexBox> = (args) => {
  return(
    <React.Fragment>
      <PixelFlexBox {...args} />
    </React.Fragment>
  )
}

export const FlexBox = Template.bind({});
