import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelIcon from './pixel-icon'

export default {
    title: 'Pixel Icon',
    component: PixelIcon
} as ComponentMeta<typeof PixelIcon>

const Template: ComponentStory<typeof PixelIcon> = (args) => {
    return (
        <React.Fragment>
            <PixelIcon {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})
