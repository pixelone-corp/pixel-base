import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PixelFileDropTarget from "./pixel-file-drop-target";

export default {
  title: "Pixel File Drop Target",
  component: PixelFileDropTarget,
} as ComponentMeta<typeof PixelFileDropTarget>

const Template:ComponentStory<typeof PixelFileDropTarget> = (args) => {
  return(
    <React.Fragment>
      <PixelFileDropTarget {...args} />
    </React.Fragment>
  )
}

export const FileDropTarget = Template.bind({});
