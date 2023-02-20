import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelMoreMenu from './pixel-more-menu'

export default {
    title: 'Pixel MoreMenu',
    component: PixelMoreMenu
} as ComponentMeta<typeof PixelMoreMenu>

const Template: ComponentStory<typeof PixelMoreMenu> = (args) => {
    return (
        <React.Fragment>
            <PixelMoreMenu {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})