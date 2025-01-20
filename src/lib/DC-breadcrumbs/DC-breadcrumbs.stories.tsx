import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DcTopBar from '../dc-top-bar/dc-top-bar'
import DcBreadcrumbs from './dc-breadcrumbs'

export default {
  title: 'DC Breadcrumbs',
  component: DcBreadcrumbs
} as ComponentMeta<typeof DcBreadcrumbs>

const Template: ComponentStory<typeof DcBreadcrumbs> = (args) => {
  const breadcrumbs = [
    {
      name: 'Home',
      active: false
    },
    {
      name: 'Sub Page',
      active: false
    },
    {
      name: 'Inner Page',
      active: true
    }
  ]
  return (
    <React.Fragment>
      <DcTopBar isMobile={false} className={''}>
        <DcBreadcrumbs {...args} data={breadcrumbs} />
      </DcTopBar>
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {}
