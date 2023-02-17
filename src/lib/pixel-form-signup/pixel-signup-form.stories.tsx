import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelSignUpForm from "./pixel-signup-form";

export default {
  title: "Pixel SignUp Form",
  component: PixelSignUpForm,
} as ComponentMeta<typeof PixelSignUpForm>

const Template:ComponentStory<typeof PixelSignUpForm> = (args) => {
  return(
    <React.Fragment>
      <PixelSignUpForm {...args} />
    </React.Fragment>
  )
}

export const SignUp = Template.bind({});
