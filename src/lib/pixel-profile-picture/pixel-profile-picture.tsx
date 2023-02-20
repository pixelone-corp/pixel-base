import React from 'react';
import styled  from 'styled-components';

export interface PixelProfilePictureProps{}

export function PixelProfilePicture(props: PixelProfilePictureProps) {
  return(
    <React.Fragment>
      <ProfilePictureContainer>
        <h1>Pixel Profile Picture</h1>
      </ProfilePictureContainer>
    </React.Fragment>
  )
};

const ProfilePictureContainer = styled.div`
  color: #9B02FD !important;
`

export default PixelProfilePicture;
