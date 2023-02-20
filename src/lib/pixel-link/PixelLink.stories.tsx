import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelLink from './pixel-link'

export default {
    title: 'Pixel Link',
    component: PixelLink
} as ComponentMeta<typeof PixelLink>

const Template: ComponentStory<typeof PixelLink> = (args) => {
    return (
        <React.Fragment>
            <PixelLink {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})