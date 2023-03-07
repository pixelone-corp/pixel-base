import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelIcon from './pixel-icon'
import { faTrademark } from '@fortawesome/free-solid-svg-icons'

export default {
    title: 'Pixel Icon',
    component: PixelIcon
} as ComponentMeta<typeof PixelIcon>

const Template: ComponentStory<typeof PixelIcon> = (args) => {
    return (
        <React.Fragment>
            <PixelIcon icon={faTrademark} {...args} />
        </React.Fragment>
    )
}
export const Simple = Template.bind({})
