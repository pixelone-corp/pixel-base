import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PixelPageContainer from "./pixel-page-container";
export default {
  title: "Pixel Page Container",
  component: PixelPageContainer,
} as ComponentMeta<typeof PixelPageContainer>

const Template: ComponentStory<typeof PixelPageContainer> = (args) => {
  return (
    <React.Fragment>
      <PixelPageContainer   {...args} >
        Pixel Page Container Content
      </PixelPageContainer>
    </React.Fragment>
  )
}

export const PageContainer = Template.bind({});
