import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelModal from './pixel-modal'
import PixelButton from '../pixel-button/pixel-button'

export default {
  title: 'Pixel Modal',
  component: PixelModal
} as ComponentMeta<typeof PixelModal>

const Template: ComponentStory<typeof PixelModal> = (args) => {
  // useState to open and close the modal
  const [showModal, setShowModal] = React.useState(false)
  const handleClick = () => {
    setShowModal(true)
  }
  return (
    <React.Fragment>
      <PixelButton onClick={handleClick}>Open Modal</PixelButton>
      {showModal && (
        <PixelModal
          {...args}
          handleClose={() => setShowModal(false)}
          title='Modal Title'
          footer={
            <PixelButton onClick={() => setShowModal(false)}>Close</PixelButton>
          }
          show={showModal}

        >
          <p>Modal Body</p>
        </PixelModal>
      )}
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {}
