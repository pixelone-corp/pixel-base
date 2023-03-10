import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelBanner from './pixel-banner'
import { faTractor, faTrash } from '@fortawesome/free-solid-svg-icons'
import PixelFactory, { PixelFactoryContext } from '../pixel-factory/pixel-factory'

export default {
    title: 'Pixel Banner',
    component: PixelBanner,
    decorators: [
        (Story) => (
            <React.Fragment>
                <PixelFactory>
                    <Story />
                </PixelFactory>
            </React.Fragment>
        ),
    ],

} as ComponentMeta<typeof PixelBanner>

const Template: ComponentStory<typeof PixelBanner> = (args) => {
    const { showPixelBanner } = React.useContext(PixelFactoryContext)
    React.useEffect(() => {
        showPixelBanner(args)
    }, [])
    return (
        <React.Fragment>
            <PixelBanner {...args} />
        </React.Fragment>
    )
}

export const Simple = Template.bind({})
Simple.args = {
    label: "Pixel Banner.",
    dismissAfter: 0,
    type: 'info',
    isDismissible: true,
    icon: faTrash,
    onDismiss: () => {
        console.log('dismissed')
    },
    isShowBanner: true,
}
