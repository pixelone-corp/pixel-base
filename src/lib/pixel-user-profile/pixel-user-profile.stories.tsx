import React from 'react'
import { ComponentStory } from '@storybook/react'

import PixelUserProfile from './pixel-user-profile'

export default {
  title: 'PixelProfile',
  component: PixelUserProfile
}
const  user={ first_name: 'Muhammad', last_name: 'Zeeshan Saqib',role:'Engineer',  manager:'Muhammad Usman',user_type:'FUll Time',  created_at: {
  date: "2023-01-21 03:53:42.000000",
 
},
profile: {  email: "saifrehman@pixelone.app"},


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
