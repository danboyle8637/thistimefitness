import React from 'react'
import styled from 'styled-components'

import { GhostButton } from '../../styles/Buttons'
import { ButtonContainer } from '../../styles/Containers'
import FacebookIcon from '../../svgs/FacebookIcon'
import InstagramIcon from '../../svgs/InstagramIcon'
import EmailIcon from '../../svgs/EmailIcon'
import MapIcon from '../../svgs/MapIcon'
import { above } from '../../styles/Theme'

const FooterAddress = () => {
  const googleMapLink =
    'https://www.google.com/maps/place/2408+Ashley+River+Rd,+Charleston,+SC+29414/@32.8267406,-80.0399742,18z/data=!4m5!3m4!1s0x88fe7cf1db72c8bb:0xf47f23abc33d7dca!8m2!3d32.8268102!4d-80.0385162'

  return (
    <AddressContainer>
      <IconContainer>
        <IconWrapper>
          <FacebookIcon width={'30'} height={'30'} strokeColor={'#5afdf2'} />
        </IconWrapper>
        <IconWrapper>
          <InstagramIcon width={'30'} height={'30'} strokeColor={'#5afdf2'} />
        </IconWrapper>
        <IconWrapper>
          <EmailIcon width={'30'} height={'30'} strokeColor={'#5afdf2'} />
        </IconWrapper>
      </IconContainer>
      <AddressText>2408 Ashley River Rd Ste G</AddressText>
      <AddressText>Charleston, SC 29414</AddressText>
      <AddressText>843 - 437 - 6700</AddressText>
      <ButtonContainer>
        <GhostButton margintop={'20px'} to={googleMapLink}>
          <MapIcon width={'20'} height={'20'} fillColor={'#5afdf2'} />
          Open in Google Maps
        </GhostButton>
      </ButtonContainer>
    </AddressContainer>
  )
}

export default FooterAddress

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 20px;
  ${above.mobile`
    width: 100%;
    justify-content: space-around;
  `}
`

const IconWrapper = styled.div`
  cursor: pointer;
`

const AddressText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: #7e7e7e;
`
