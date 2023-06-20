import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDiv from './pixel-div'

export default {
    title: 'Pixel Div',
    component: PixelDiv
} as ComponentMeta<typeof PixelDiv>

const Template: ComponentStory<typeof PixelDiv> = (args) => {
    return (
        <React.Fragment>
            <PixelDiv {...args} />
        </React.Fragment>
    )
}
export const Simple = Template.bind({})