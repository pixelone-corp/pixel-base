import React from "react";
import { ComponentStory } from '@storybook/react';
import audio from './IVRorderConfirmation.mp3'
import PixelAudioPlayer from "./pixel-audio-player";
import { Section, SectionActions } from "../common-styled-component";

export default {
  title: 'Pixel-Audio-Player',
  component: PixelAudioPlayer,
}

const Template: ComponentStory<typeof PixelAudioPlayer> = (args) => {
  return (
    <React.Fragment>
      <Section>
        <SectionActions
          style={{
            paddingTop: '100px'
          }}>
          <PixelAudioPlayer {...args} />
        </SectionActions>
      </Section>
    </React.Fragment>
  )
}

export const Simple = Template.bind({});
Simple.args = {
  audioSrc: audio,
}




