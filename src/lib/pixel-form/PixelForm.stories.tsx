import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelForm from './pixel-form'

export default {
    title: 'Pixel Form',
    component: PixelForm
} as ComponentMeta<typeof PixelForm>

const Template: ComponentStory<typeof PixelForm> = (args) => {
    return (
        <React.Fragment>
            <PixelForm {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})