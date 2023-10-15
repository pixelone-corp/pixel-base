import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelCreditCard from './pixel-Credit-Card'

export default {
  title: 'Pixel Credit Card',
  component: PixelCreditCard
} as ComponentMeta<typeof PixelCreditCard>

const Template: ComponentStory<typeof PixelCreditCard> = (args) => {
  return (
    <React.Fragment>
      <PixelCreditCard
        CardInfo={{
          expiry: '02/19',
          // name: 'Master',
          focused: 'name',
          number: 5555555555554444,
          // placeholders: 'Add Number',
          preview: true,
          short_name: 'Mezaan Bank',
          locale: {
            valid: 'valid thru'
          },
          placeholders: {
            name: 'YOUR NAME HERE'
          }
        }}
        {...args}
      />
    </React.Fragment>
  )
}

export const SectionTitle = Template.bind({})
