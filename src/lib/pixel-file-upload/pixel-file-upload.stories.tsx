import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelFileUplaod from "./pixel-file-upload";

export default {
  title: "Pixel File Upload",
  component: PixelFileUplaod,
} as ComponentMeta<typeof PixelFileUplaod>

const Template:ComponentStory<typeof PixelFileUplaod> = (args) => {
  return(
    <React.Fragment>
      <PixelFileUplaod {...args} />
    </React.Fragment>
  )
}

export const List = Template.bind({});
