import React from 'react'
import { ComponentStory } from '@storybook/react'

import PixelUserProfile from './pixel-user-profile'

export default {
  title: 'PixelProfile',
  component: PixelUserProfile
}
const user = {
  first_name: 'Zeeshan',
  last_name: 'saqib'
}

const Template: ComponentStory<typeof PixelUserProfile> = (arg) => {
  return (
    <React.Fragment>
      <div style={{ padding: '200px', width: '100%', height: '100%' }}>
        <PixelUserProfile user={user} {...arg} />
      </div>
    </React.Fragment>
  )
}

export const Simple = Template.bind({})
