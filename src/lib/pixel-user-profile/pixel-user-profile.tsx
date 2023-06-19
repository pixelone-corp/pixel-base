import React from 'react'
import styled from 'styled-components'
import PixelImage from '../pixel-image/pixel-image'
import PixelText from '../pixel-text/pixel-text'
import PixelFlexBox from '../pixel-flex-box/pixel-flex-box'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import PixelIcon from '../pixel-button-icon/pixel-icon'
import { faCalendar, faFileArchive, faSms, faStarHalfAlt, faUserTie } from '@fortawesome/free-solid-svg-icons'
import PixelDate from '../pixel-date/pixel-date'
import { $primaryColor } from '../styleGuide'

 const ProfileImg = "data:image/png;base64,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"

export interface NAMEHEREProps {
  user: {
    first_name: string,
    last_name: string,
    role: string,
    manager: string,
    user_type: string,
    created_at: {
      date: string,
    },
    profile: { email: string },
    photo: { attachment_path: string }
  }
  isShowPopup: boolean
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
  position: absolute;
  left:345px;
  top:5px;
  
`



export const PixelUserProfile = React.forwardRef<HTMLDivElement, NAMEHEREProps>(
  ({ user, isShowPopup, ...rest }, ref) => {
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
       <PixelText style={{ padding: '10px 0 0 10px', fontWeight:800, fontSize:'24px' }} variant='pixelPrimary'> {user?.first_name} {user?.last_name}</PixelText>
       <PixelText style={{ padding: '2px 0 0 10px', fontWeight:400, fontSize:'18px' }} variant='light'> {user?.first_name}{user?.last_name}</PixelText>

       <PixelFlexBox height='15%'width='100%' gap='10px' padding='20px 0 0 10px' >
        <PixelIcon color='gray' style={{marginTop:'8px'}} icon={faStarHalfAlt}>{}</PixelIcon>
         <PixelText style={{padding:'0 0 0 3px',   fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'> {user?.role}  </PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary">at PSS</PixelText>
       </PixelFlexBox>
 
    

       <PixelImageContainer>
    
        <PixelImage height='115px' width='115px' src={user?.photo ? user?.photo?.attachment_path : ProfileImg}/> 

       </PixelImageContainer>
    
       <PixelFlexBox padding='20px 0 0 10px' height='15%'width='100%' gap='10px'>
        <PixelIcon color='gray' style={{marginTop:'8px'}} icon={faFileArchive}>{}</PixelIcon>
         <PixelText style={{ padding:'0 0 0 9px',  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Report to </PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user?.manager} </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='15%'width='100%' gap='10px'>
        <PixelIcon color='gray' style={{marginTop:'8px'}} icon={faUserTie}>{}</PixelIcon>
         <PixelText style={{ padding:'0 0 0 6px',  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Employment type</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user?.user_type} ( PK - remote ) </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='15%'width='100%' gap='10px'>
        <PixelIcon color='gray' style={{marginTop:'8px'}} icon={faCalendar}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400,marginLeft:'5px', fontSize:'18px', display:'inline-block' }} variant='dark'>Hired On</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"><PixelDate  style={{ color: $primaryColor }} value={user?.created_at?.date} className={'color'}/> </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='15%'width='100%' gap='10px'>
        <PixelIcon color='gray' style={{marginTop:'8px'}} icon={faSms}>{}</PixelIcon>
         <PixelText style={{ padding:'0 0 0 4px',  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Email</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user?.profile?.email} </PixelText>
       </PixelFlexBox>
  
 </StyledPopOver>
 )
    const firstLetterColor = getRandomColor()

    return (
      <React.Fragment>

        {isShowPopup ?
          <OverlayTrigger
            placement="bottom" overlay={popOver}>
            <StyledPixelProfile>
              <StyledPixelImageContainer>
                {user?.photo ? (
                  <PixelImage src={user?.photo?.attachment_path} />
                ) : (
                  <PixelText style={{ color: firstLetterColor }}>
                    {user?.first_name.split('')[0]}
                  </PixelText>
                )}
              </StyledPixelImageContainer>
              <PixelFlexBox
                width='calc(100% - 35px)'
                gap='0px'
                flexDirection='column'
              >
                <PixelText style={{ padding: 0, lineHeight: '15px' }}>
                  {user?.first_name} {user?.last_name}
                </PixelText>
              </PixelFlexBox>
            </StyledPixelProfile>
          </OverlayTrigger>
          :
          <StyledPixelProfile>
            <StyledPixelImageContainer>
              {user?.photo ? (
                <PixelImage src={user?.photo?.attachment_path} />
              ) : (
                <PixelText style={{ color: firstLetterColor }}>
                  {user?.first_name?.split('')[0]}
                </PixelText>
              )}
            </StyledPixelImageContainer>
            <PixelFlexBox
              width='calc(100% - 35px)'
              gap='0px'
              flexDirection='column'
            >
              <PixelText style={{ padding: 0, lineHeight: '15px' }}>
                {user?.first_name} {user?.last_name}
              </PixelText>
            </PixelFlexBox>
          </StyledPixelProfile>

        }
      </React.Fragment>
    )
  }
)
const StyledPopOver = styled(Popover)`
 height:340px;
 max-width: 500px;
 border:none;
 box-shadow: -3px 4px 11px 2px rgba(169, 169, 169, 0.8);
 top: -5px;
 width: 480px;
 display: block;
 .popover-arrow{
   display: none;
  }
  position: relative;

`
export default PixelUserProfile
