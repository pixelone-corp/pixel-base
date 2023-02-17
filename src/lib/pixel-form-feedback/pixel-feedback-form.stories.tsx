import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelFeedbackForm from "./pixel-feedback-form";

export default {
  title: "Pixel Feedback Form",
  component: PixelFeedbackForm,
} as ComponentMeta<typeof PixelFeedbackForm>

const Template:ComponentStory<typeof PixelFeedbackForm> = (args) => {
  return(
    <React.Fragment>
      <PixelFeedbackForm {...args} />
    </React.Fragment>
  )
}

export const Feedback = Template.bind({});
