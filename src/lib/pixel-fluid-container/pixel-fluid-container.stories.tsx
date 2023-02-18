import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelFluidContainer from "./pixel-fluid-container";

export default {
  title: "Pixel Fluid Container",
  component: PixelFluidContainer,
} as ComponentMeta<typeof PixelFluidContainer>

const Template:ComponentStory<typeof PixelFluidContainer> = (args) => {
  return(
    <React.Fragment>
      <PixelFluidContainer {...args} />
    </React.Fragment>
  )
}

export const FluidContainer = Template.bind({});
