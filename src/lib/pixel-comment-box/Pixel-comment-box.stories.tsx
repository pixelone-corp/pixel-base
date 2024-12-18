import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PixelCommentBox } from './pixel-comment-box'

export default {
  title: 'Pixel Comment Box',
  component: PixelCommentBox
} as ComponentMeta<typeof PixelCommentBox>

const Template: ComponentStory<typeof PixelCommentBox> = (args) => {
  return (
    <React.Fragment>
      <PixelCommentBox {...args} />
    </React.Fragment>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  data: [
    {
      created_by: 'Ali',
      comment_text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum itaque repellat omnis fugit corporis fugiat eos, veritatis neque ipsam quibusdam minima ab quisquam earum sit quidem officia illum obcaecati quod magni minus. Sit similique eum esse sint qui debitis. ',
      created_at: '11-10-2024'
    },
    {
      created_by: 'Faisal',
      comment_text: 'Hello2',
      created_at: '12-10-2024'
    },
    {
      created_by: 'Arslan',
      comment_text: 'Hello3',
      created_at: '12-10-2024'
    }
  ]
}
