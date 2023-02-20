import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelSearchBar from './pixel-search-bar'

export default {
    title: 'Pixel SearchBar',
    component: PixelSearchBar
} as ComponentMeta<typeof PixelSearchBar>

const Template: ComponentStory<typeof PixelSearchBar> = (args) => {
    return (
        <React.Fragment>
            <PixelSearchBar {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})