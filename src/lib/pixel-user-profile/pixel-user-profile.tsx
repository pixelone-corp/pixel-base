import React from 'react'
import styled from 'styled-components'
import PixelImage from '../pixel-image/pixel-image'
import PixelText from '../pixel-text/pixel-text'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'
export interface NAMEHEREProps {
  user: {}
}

const StyledPixelProfile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 5px 0 5px 0;
`

const StyledPixelImageContainer = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid lightgray;
  overflow: hidden;
`
const TextContainer = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid lightgray;
  overflow: hidden;
`

export const PixelUserProfile = React.forwardRef<HTMLDivElement, NAMEHEREProps>(
  ({ user, ...rest }, ref) => {
    function getRandomColor() {
      // Generate a random color
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }

    const firstLetterColor = getRandomColor()

    return (
      <StyledPixelProfile>
        <StyledPixelImageContainer>
          {user.img ? (
            <PixelImage src={user.img} />
          ) : (
            <PixelText style={{ color: firstLetterColor }}>
              {user.first_name.split('')[0]}
            </PixelText>
          )}
        </StyledPixelImageContainer>
        <PixelFlexBox
          width='calc(100% - 35px)'
          gap='0px'
          flexDirection='column'
        >
          <PixelText style={{ padding: 0, lineHeight: '15px' }}>
            {user.first_name} {user.last_name}
          </PixelText>
        </PixelFlexBox>
      </StyledPixelProfile>
    )
  }
)
export default PixelUserProfile
