import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelSectionTitle from "./pixel-section-title";

export default {
  title: "Pixel Section Title",
  component: PixelSectionTitle,
} as ComponentMeta<typeof PixelSectionTitle>

const Template:ComponentStory<typeof PixelSectionTitle> = (args) => {
  return(
    <React.Fragment>
      <PixelSectionTitle {...args} />
    </React.Fragment>
  )
}

export const SectionTitle = Template.bind({});
