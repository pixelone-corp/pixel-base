import React from 'react'
import styled from 'styled-components'
import PixelImage from '../pixel-image/pixel-image'
import PixelText from '../pixel-text/pixel-text'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'
import {Popover,OverlayTrigger} from 'react-bootstrap'
import PixelIcon from '../pixel-button-icon/pixel-icon'
import { faFileArchive, faLocation, faLocationArrow, faSms, faStarAndCrescent, faStarHalfAlt, faTimeline } from '@fortawesome/free-solid-svg-icons'
import PixelDate from '../pixel-date/pixel-date'
import { $primaryColor } from '../styleGuide'

export interface NAMEHEREProps {
  user:{ 
    first_name: string,
    last_name: string,
    role: string,
    manager: string,
    user_type: string,
    created_at: {
    date: string,
    },
    profile: {email: string},
    photo: {attachment_path: string}
  }
  isShow: boolean
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

const PixelImageContainer = styled.div`
  height: 120px;
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid lightgray;
  overflow: hidden;
  margin: 10px 10px 0 0 ;
`


export const PixelUserProfile = React.forwardRef<HTMLDivElement, NAMEHEREProps>(
  ({ user,isShow, ...rest }, ref) => {
    function getRandomColor() {
      // Generate a random color
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
 const popOver = (
  <StyledPopOver> 
    <PixelFlexBox style={{ flexDirection:'row',height:'40%', }}>
     <PixelFlexBox style={{ flexDirection:'column',height:'50%', width:'50%'}}>
       <PixelText style={{ padding: '10px 0 0 10px', fontWeight:800, fontSize:'24px' }} variant='pixelPrimary'> {user.first_name} {user.last_name}</PixelText>
       <PixelText style={{ padding: '2px 0 0 10px', fontWeight:400, fontSize:'18px' }} variant='light'> {user.first_name}{user.last_name}</PixelText>

       <PixelFlexBox padding='20px 0 0 10px' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faStarHalfAlt}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'> {user.role}  </PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary">at PSS</PixelText>
       </PixelFlexBox>
       </PixelFlexBox>
    

     <PixelFlexBox  style={{ justifyContent:'flex-end',height:'30%', width:'50%'}}>
       <PixelImageContainer>
         <PixelImage src={user.photo.attachment_path}/> 
       </PixelImageContainer>
     </PixelFlexBox>
    </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='12%'width='100%' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faFileArchive}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Report to </PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user.manager} </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='12%'width='100%' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faLocationArrow}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Employment type</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user.user_type} ( PK - remote ) </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='12%'width='100%' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faTimeline}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Hired On</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"><PixelDate style={{ color: $primaryColor }} value={user.created_at.date} className={''}/> </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='12%'width='100%' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faSms}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Email</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user.profile.email} </PixelText>
       </PixelFlexBox>
  
 </StyledPopOver>
 )
    const firstLetterColor = getRandomColor()

    return (
      <React.Fragment> 

    {isShow ?
      <OverlayTrigger  
        placement="bottom"  overlay={popOver}>
      <StyledPixelProfile>
        <StyledPixelImageContainer>
          {user.photo ? (
            <PixelImage src={user.photo.attachment_path} />
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
    </OverlayTrigger> 
    :
    <StyledPixelProfile>
    <StyledPixelImageContainer>
      {user.photo ? (
        <PixelImage src={user.photo.attachment_path} />
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

    }
      </React.Fragment>
    )
  }
)
const StyledPopOver = styled(Popover)`
 height:380px;
 max-width: 500px;
top: -5px;
 width: 400px;
 display: block;
 .popover-arrow{
   display: none;
  }

`
export default PixelUserProfile
