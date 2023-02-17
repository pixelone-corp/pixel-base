import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelNumberInput from "./pixel-number-input";

export default {
  title: "Pixel Number Input",
  component: PixelNumberInput,
} as ComponentMeta<typeof PixelNumberInput>

const Template:ComponentStory<typeof PixelNumberInput> = (args) => {
  return(
    <React.Fragment>
      <PixelNumberInput {...args} />
    </React.Fragment>
  )
}

export const NumberInput = Template.bind({});
