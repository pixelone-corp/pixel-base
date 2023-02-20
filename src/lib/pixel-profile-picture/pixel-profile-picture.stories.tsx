import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelProfilePicture from "./pixel-profile-picture";

export default {
  title: "Pixel Profile Picture",
  component: PixelProfilePicture,
} as ComponentMeta<typeof PixelProfilePicture>

const Template:ComponentStory<typeof PixelProfilePicture> = (args) => {
  return(
    <React.Fragment>
      <PixelProfilePicture {...args} />
    </React.Fragment>
  )
}

export const ProfileImage = Template.bind({});
