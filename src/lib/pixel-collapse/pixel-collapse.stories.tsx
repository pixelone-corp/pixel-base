import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PixelCollapse } from "./pixel-collapse";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PixelDiv from "../pixel-div/pixel-div";
import PixelIcon from "../pixel-button-icon/pixel-icon";
import PixelButton from "../pixel-button/pixel-button";

export default {
  title: "Pixel Collapse",
  component: PixelCollapse,
} as ComponentMeta<typeof PixelCollapse>

const Template: ComponentStory<typeof PixelCollapse> = (args) => {
  const [showShow, setShowShow] = React.useState(true)
  return (
    <React.Fragment>
      <PixelCollapse
        defaultExpanded={true}
        onCollapseChange={(collapse) => {
          setShowShow(collapse)
        }}
        collapseController={
          <PixelDiv>  <PixelButton id='collapse-controller'>
            <PixelIcon color="white" style={{ paddingRight: '10px' }} icon={showShow ? faChevronUp : faChevronDown} />
            {showShow ? 'Show' : ' Hide'}
          </PixelButton>
          </PixelDiv>
        }
      >
        <PixelDiv width='100%'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae veniam doloremque unde rerum tempora, impedit non corporis, a culpa dolores. Voluptatum eum sequi ut, minus sit labore atque unde.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae veniam doloremque unde rerum tempora, impedit non corporis, a culpa dolores. Voluptatum eum sequi ut, minus sit labore atque unde.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae veniam doloremque unde rerum tempora, impedit non corporis, a culpa dolores. Voluptatum eum sequi ut, minus sit labore atque unde.
        </PixelDiv>

      </PixelCollapse>
    </React.Fragment>
  )
}

export const Collapse = Template.bind({})
