import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelErrorPage from "./pixel-error-pagel";

export default {
  title: "Pixel Error Page",
  component: PixelErrorPage,
} as ComponentMeta<typeof PixelErrorPage>

const Template:ComponentStory<typeof PixelErrorPage> = (args) => {
  return(
    <React.Fragment>
      <PixelErrorPage {...args} />
    </React.Fragment>
  )
}

export const PageErrorPanel = Template.bind({});
