import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelRichTextArea from "./pixel-rich-text-area";

export default {
  title: "Pixel Rich Text Area",
  component: PixelRichTextArea,
} as ComponentMeta<typeof PixelRichTextArea>

const Template:ComponentStory<typeof PixelRichTextArea> = (args) => {
  return(
    <React.Fragment>
      <PixelRichTextArea {...args} />
    </React.Fragment>
  )
}

export const RichTextArea = Template.bind({});
