import React from 'react'
import styled from 'styled-components'
import PixelImage from '../pixel-image/pixel-image'
import PixelText from '../pixel-text/pixel-text'
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

export const PixelProfile = React.forwardRef<HTMLDivElement, NAMEHEREProps>(
  ({ user, ...rest }, ref) => {
    console.clear()
    console.log(user.firstName.split('')[0])

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
              {user.firstName.split('')[0]}
            </PixelText>
          )}
        </StyledPixelImageContainer>
        <PixelText>
          {user.firstName} {user.secondName}
        </PixelText>
      </StyledPixelProfile>
    )
  }
)
export default PixelProfile
