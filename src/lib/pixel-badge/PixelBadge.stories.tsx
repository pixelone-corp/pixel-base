import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelBadge from './pixel-badge'

export default {
    title: 'Pixel Badge',
    component: PixelBadge
} as ComponentMeta<typeof PixelBadge>

const Template: ComponentStory<typeof PixelBadge> = (args) => {
    return (
        <React.Fragment>
            <PixelBadge {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})