import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelStepper from './pixel-stepper'

export default {
    title: 'Pixel Stepper',
    component: PixelStepper
} as ComponentMeta<typeof PixelStepper>

const Template: ComponentStory<typeof PixelStepper> = (args) => {
    return (
        <React.Fragment>
            <PixelStepper {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})