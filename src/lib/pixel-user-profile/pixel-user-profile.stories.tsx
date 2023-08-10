import React from 'react'
import { ComponentStory } from '@storybook/react'

import PixelUserProfile from './pixel-user-profile'

export default {
  title: 'Pixel User Profile',
  component: PixelUserProfile
}
const user = {
  first_name: 'Muhammad',
  last_name: 'Zeeshan Saqib',
  role: 'Engineer',
  manager: 'Muhammad Usman',
  user_type: 'FUll Time',
  created_at: {
    date: '2023-01-21 03:53:42.000000'
  },
  profile: { email: 'saifrehman@pixelone.app' },
  photo: {
    attachment_path:
      'data:image/png;base64,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'
  }
}

const Template: ComponentStory<typeof PixelUserProfile> = (arg) => {
  return (
    <React.Fragment>
      <div style={{ padding: '200px', width: '100%', height: '100%' }}>
        <PixelUserProfile isShowPopup={true} user={user} {...arg} />
      </div>
    </React.Fragment>
  )
}

export const Simple = Template.bind({})

Simple.args = {
  color: 'green'
}
