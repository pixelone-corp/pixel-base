import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelContactUsForm from "./pixel-contactus-form";

export default {
  title: "Pixel ContactUs Form",
  component: PixelContactUsForm,
} as ComponentMeta<typeof PixelContactUsForm>

const Template:ComponentStory<typeof PixelContactUsForm> = (args) => {
  return(
    <React.Fragment>
      <PixelContactUsForm {...args} />
    </React.Fragment>
  )
}

export const ContactUs = Template.bind({});
