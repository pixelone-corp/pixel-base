import React from 'react'
import { ComponentStory } from '@storybook/react'

import PixelProfile from './pixel-profile'

export default {
  title: 'PixelProfile',
  component: PixelProfile
}
const user = {
  firstName: 'Zeeshan',
  secondName: 'saqib'
}

const Template: ComponentStory<typeof PixelProfile> = (arg) => {
  return (
    <React.Fragment>
      <div style={{ padding: '200px', width: '100%', height: '100%' }}>
        <PixelProfile user={user} {...arg} />
      </div>
    </React.Fragment>
  )
}

export const Simple = Template.bind({})
