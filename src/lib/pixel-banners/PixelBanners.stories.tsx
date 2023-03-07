import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelBanner from './pixel-banner'
import { faTractor } from '@fortawesome/free-solid-svg-icons'

export default {
    title: 'Pixel Banner',
    component: PixelBanner
} as ComponentMeta<typeof PixelBanner>

const Template: ComponentStory<typeof PixelBanner> = (args) => {
    return (
        <React.Fragment>
            <PixelBanner {...args} />
        </React.Fragment>
    )
}
// set the args to the default values

export const Simple = Template.bind({})
Simple.args = {
    label: "Pixel Banner",
    dismissAfter: 5000,
    show: true,
    type: 'primary',
    isDismissible: false,
    icon: faTractor,
    iconColor: 'black',

}
