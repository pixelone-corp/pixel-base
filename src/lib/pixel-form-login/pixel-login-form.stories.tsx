import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelLoginForm from './pixel-login-form';

export default {
  title: "Pixel Login Form",
  component: PixelLoginForm,
} as ComponentMeta<typeof PixelLoginForm>

const Template:ComponentStory<typeof PixelLoginForm> = (args) => {
  return(
    <React.Fragment>
      <PixelLoginForm {...args} />
    </React.Fragment>
  )
}

export const Login = Template.bind({});
