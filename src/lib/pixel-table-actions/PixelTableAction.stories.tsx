import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Section, SectionActions,ActionIcon } from '../common-styled-component'

import {
    faCoffee
} from '@fortawesome/free-solid-svg-icons'
import PixelTableAction from './pixel-table-actions'

export default {
    title: 'Pixel Table Actions',
    component: PixelTableAction
} as ComponentMeta<typeof PixelTableAction>
const action = [
    {
        title: "Cofe",
        icon: <FontAwesomeIcon icon={faCoffee} />,
        disabled: 'true',
    }
]
const Template: ComponentStory<typeof PixelTableAction> = (args) => {
    return (
        <React.Fragment>
            <h2>Pixel Table Action</h2>
            <Section>
                <SectionActions>
                    <PixelTableAction {...args} />
                </SectionActions>
            </Section>
        </React.Fragment>
    )
}
export const Simple = Template.bind({})
Simple.args = {
    action,
}
