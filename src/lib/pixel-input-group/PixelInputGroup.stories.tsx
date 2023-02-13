import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelInputGroup from './pixel-input-group'

export default {
    title: 'Pixel Input Group',
    component: PixelInputGroup
} as ComponentMeta<typeof PixelInputGroup>

const Template: ComponentStory<typeof PixelInputGroup> = (args) => {
    return (
        <React.Fragment>
            <PixelInputGroup {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})
