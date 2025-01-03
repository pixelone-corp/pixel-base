import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DCRightPanel from "./DC-right-panel";

export default {
  title: "Pixel Right Panel",
  component: DCRightPanel,
} as ComponentMeta<typeof DCRightPanel>

const Template:ComponentStory<typeof DCRightPanel> = (args) => {
  return(
    <React.Fragment>
      <DCRightPanel {...args} />
    </React.Fragment>
  )
}

export const RightPanel = Template.bind({});
