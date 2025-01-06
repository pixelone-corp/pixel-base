import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DCTopBar from '../DC-top-bar/DC-top-bar'
import DCBreadcrumbs from './DC-breadcrumbs'

export default {
  title: 'DC Breadcrumbs',
  component: DCBreadcrumbs
} as ComponentMeta<typeof DCBreadcrumbs>

const Template: ComponentStory<typeof DCBreadcrumbs> = (args) => {
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
      <DCTopBar className='abc'>
        <DCBreadcrumbs {...args} data={breadcrumbs} />
      </DCTopBar>
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {}
