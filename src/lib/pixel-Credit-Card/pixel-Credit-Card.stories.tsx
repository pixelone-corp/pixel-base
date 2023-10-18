import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {PixelCreditCards} from '../../index'

export default {
  title: 'Pixel Credit Card',
  component: PixelCreditCards
} as ComponentMeta<typeof PixelCreditCards>
function onApply(){
  alert('This is Applied Function')
}
const Template: ComponentStory<typeof PixelCreditCards> = (args) => {
  return (
    <React.Fragment>
      <PixelCreditCards
        
        CardInfo={{
          expiry: '02/19',
          name: 'Jani',
          card_type: 'visa',
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
        onApply={onApply}
        {...args}
      />
    </React.Fragment>
  )
}

export const SectionTitle = Template.bind({})
