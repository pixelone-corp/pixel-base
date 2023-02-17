import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelToast from './pixel-toast'

export default {
    title: 'Pixel Toast',
    component: PixelToast
} as ComponentMeta<typeof PixelToast>

const Template: ComponentStory<typeof PixelToast> = (args) => {
    return (
        <React.Fragment>
            <PixelToast {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})
