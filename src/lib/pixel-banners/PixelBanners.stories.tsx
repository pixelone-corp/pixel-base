import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelBanner from './pixel-banner'

export default {
    title: 'Pixel Banner',
    component: PixelBanner
} as ComponentMeta<typeof PixelBanner>

const Template: ComponentStory<typeof PixelBanner> = (args) => {
    return (
        <React.Fragment>
            <PixelBanner {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})
