import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelTooltip from './pixel-tooltip'
import PixelText from '../pixel-text/pixel-text'

export default {
    title: 'Pixel Tooltip',
    component: PixelTooltip
} as ComponentMeta<typeof PixelTooltip>

const Template: ComponentStory<typeof PixelTooltip> = (args) => {
    return (
        <React.Fragment>
            <PixelTooltip width='100px'  {...args} >
                <PixelText>Hover on mee</PixelText>
            </PixelTooltip>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})
Simple.args = {
    tooltipText: 'Tooltip',
    tooltipPlacement: 'auto'
}

