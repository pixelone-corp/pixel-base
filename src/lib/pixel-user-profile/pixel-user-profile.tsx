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
const ProfileImg = "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE3klEQVR4nO2a24vVVRTHP+OoM17IGZ0ms9LulJfpgn9CkQpTGr2UBUGUPdVMPfQQpBARZi/VUPRST5HUS2Z3JEaILK28PNSkU1FeKKx5CJpRx/HEgu+GxZk5v9/e+5wzSfiFwznwW9+192/vtdZea+0DF/D/RQdwJ/ACsBP4ATgJjOljv78H3pdML7CA8wRtwEbgE+AsUEn8GOdj4D7pmna0A08Ax92kTgGDwGZgA7ACWCTZdv1eCdwtmd3Aacc/BvRJdlqwFhh2E/gW2AR0ZujqFPc7p+8IcAdNhK3Uq25AG3xNg3S3aIEOOP2vNMPcLgG+0QCjwONAa6MHAWYC/QoONtZeoLtRyq/UdpviIWBVifx1wDPALuCEfOcfRbGXgGURY94EHNaYhzWHuncivMRXctgie38TmCiJVH8DDwAXlYzdBXztXqa7Hp8I5rQHmF8ge6lWPEz0Ddn8DcBcfSxiPe/C9Jh2yJ7Vwnz3MntzfeY1Z06LShx10EWwpSV6H9S5c0acL0om2OXMbCD1JdY5xy7zibske7LkhauxUmeHcZ8qkb3ZBYDo0DwH+EmkxyLk35KsHZCp6BX31wjZfucvUSb2pDsnYkLsX5K/hnS0aCeNvyQiNB+UrIX/Ugc/nrCF85yD5+Jz6bg9weSPle3K/RK0aBWDKyR/lHzslA4zs5gdDOnMvUWCn0no4chJdLsVykUYMzbdeVTyHxUdaGd1ElttEYNWHYBntFo5COdPT6T8QmXN47XqmfVSaDabgt/Eu4x0zNMinFa0jMXuInN8UQ8tT0rBe+LZeZKK28T9MpG3RTyrNCfhg8wJPSeefafiWXEtVUnBBvGsbJ6EkAbcmKBwhiuyniYdYWWHpSsWK1z6NAl/6mFKmrFEnBHyMSIdlnjGosulRZMQ6ufZCQpnKx+bSIh01ZFyQjpmJfDaXJ+gIS+CuiAV+djqBN5q55c1z4ScFwmmZXE6BbcAf4i7NYG3VZzfpSMFhaYVnN2KoVTcKq41D2IREsDUlzAsL3L23PCLIs5R8a0yLMNal77nZATrxbc8rWEHYkCf+D+XOH6HZCri5GBz0YGYm6IEzHL19ZRbLgy5GjwlUnkMFqUoOUljrbTeQmothC6LyeZgYVnS6FPqRzIHmSv+uQKZc5Ip6p4UYVNMyA6FlRUvOVjgWj21cEoyOVcKLa6wsg5+Yal7IrHQ8bhWXDuTaiGcVyabinWxpa5vPhxQwR+Ly9WNrCi1r4UdrulnnFjMBA7FNh+q20Ex4XGVGmejLvwWOfJSF35Hxe1pRjvIb+FYjUG6tSr7XE/XotH2yBTHZN6u6hPv12QX12hqJzfoqlumPyq3CR2/7Qp9YQIjWlWrEVJhnJddb6yiI+BdpT1o7CO5LdOpmtgDbgXHVZ3d06DLmDZdye1wizShi6U99TaxDRdrR7z5vANcT/OwDHi9ateHdcVRF652zv9LQtumHvS4gGAvcVWjFC/WlUFFt0/9Tbp6a1UzfNSZU907MZXPhAAQTv9G3r5aar/f6R9o9t37VNfTD2Ummh3iVl9Pr2GaMEcmENKZijqGu9Ti6VVbqVNF1wz9Xq5nWyQbbq0qugXom84/DHi0K9H8tM6/cGz8r/7CUctMrEzeBnyoAmpEYXRcv4f0bJtkc+ueC+B8x78fHcKd4U6+1gAAAABJRU5ErkJggg=="
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
`


export const PixelUserProfile = React.forwardRef<HTMLDivElement, NAMEHEREProps>(
  ({ user, isShowPopup , ...rest }, ref) => {
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
       <PixelText style={{ padding: '10px 0 0 10px', fontWeight:800, fontSize:'24px' }} variant='pixelPrimary'> {user?.first_name} {user?.last_name}</PixelText>
       <PixelText style={{ padding: '2px 0 0 10px', fontWeight:400, fontSize:'18px' }} variant='light'> {user?.first_name}{user?.last_name}</PixelText>

       <PixelFlexBox padding='20px 0 0 10px' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faStarHalfAlt}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'> {user?.role}  </PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary">at PSS</PixelText>
       </PixelFlexBox>
       </PixelFlexBox>
    

     <PixelFlexBox  style={{ justifyContent:'flex-end',height:'30%', width:'50%'}}>
       <PixelImageContainer>
        {user?.photo ?  
        <PixelImage src={user?.photo?.attachment_path}/> 
        :  
        <PixelImage src={ProfileImg}/> 
      }
       </PixelImageContainer>
     </PixelFlexBox>
    </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='12%'width='100%' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faFileArchive}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Report to </PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user?.manager} </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='12%'width='100%' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faLocationArrow}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Employment type</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user?.user_type} ( PK - remote ) </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='12%'width='100%' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faTimeline}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Hired On</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"><PixelDate style={{ color: $primaryColor }} value={user?.created_at?.date} className={''}/> </PixelText>
       </PixelFlexBox>
       <PixelFlexBox padding='20px 0 0 10px' height='12%'width='100%' gap='10px'>
        <PixelIcon style={{marginTop:'2px'}} icon={faSms}>{}</PixelIcon>
         <PixelText style={{  fontWeight:400, fontSize:'18px', display:'inline-block' }} variant='dark'>Email</PixelText><PixelText style={{ display:'inline-block' }} variant="pixelPrimary"> {user?.profile?.email} </PixelText>
       </PixelFlexBox>
  
 </StyledPopOver>
 )
    const firstLetterColor = getRandomColor()

    return (
      <React.Fragment> 

    {isShowPopup ?
      <OverlayTrigger  
        placement="bottom"  overlay={popOver}>
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
