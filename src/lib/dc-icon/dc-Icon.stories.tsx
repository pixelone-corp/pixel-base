import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DcIcon from './dc-icon'
import { faChartPie, faTrademark } from '@fortawesome/free-solid-svg-icons'
import { $DCprimaryColor } from '../styleGuide'

export default {
  title: 'DC Icon',
  component: DcIcon
} as ComponentMeta<typeof DcIcon>

const Template: ComponentStory<typeof DcIcon> = (args) => {
  return (
    <React.Fragment>
      <DcIcon icon={faTrademark} {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  color: $DCprimaryColor,
  icon: faChartPie,
  showTooltip: false,
  onClick: () => {}
}
