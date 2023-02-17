import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelNotice from './pixel-notice'

export default {
    title: 'Pixel Notice',
    component: PixelNotice
} as ComponentMeta<typeof PixelNotice>

const Template: ComponentStory<typeof PixelNotice> = (args) => {
    return (
        <React.Fragment>
            <PixelNotice {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})
