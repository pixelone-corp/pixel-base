import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelSelect from './pixel-select'

export default {
    title: 'Pixel Select',
    component: PixelSelect
} as ComponentMeta<typeof PixelSelect>

const Template: ComponentStory<typeof PixelSelect> = (args) => {
    return (
        <React.Fragment>
            <PixelSelect {...args}/>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})