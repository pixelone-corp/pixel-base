import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {PixelCreditCards} from '../../index'

export default {
  title: 'Pixel Credit Card',
  component: PixelCreditCards
} as ComponentMeta<typeof PixelCreditCards>

const Template: ComponentStory<typeof PixelCreditCards> = (args) => {
  return (
    <React.Fragment>
      <PixelCreditCards
        CardInfo={{
          expiry: '02/19',
          name: 'Jani',
          card_type: 'mastercard',
          focused: 'name',
          number: 4444 ,
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
