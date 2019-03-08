import React, { Component } from 'react'
import styled from 'styled-components'

import { GhostButton } from '../../styles/Buttons'
import { ButtonContainer } from '../../styles/Containers'
import AnimatedFacebook from '../../svgs/AnimatedFacebook'
import AnimatedInstagram from '../../svgs/AnimatedInstagram'
import AnimatedEmail from '../../svgs/AnimatedEmail'
import MapIcon from '../../svgs/MapIcon'
import { above } from '../../styles/Theme'

class FooterAddress extends Component {
  render() {
    const googleMapLink =
      'https://www.google.com/maps/place/2408+Ashley+River+Rd,+Charleston,+SC+29414/@32.8267406,-80.0399742,18z/data=!4m5!3m4!1s0x88fe7cf1db72c8bb:0xf47f23abc33d7dca!8m2!3d32.8268102!4d-80.0385162'

    const facebookLink = 'https://www.facebook.com/fatblastingbootcamp/'
    const instagramLink = 'https://www.instagram.com/thistimefitness/'
    const emailLink = 'mailto:kindal@thistimefitness.com'

    return (
      <AddressContainer>
        <IconContainer>
          <SocialLink href={facebookLink} target="_blank">
            <AnimatedFacebook width={'30'} height={'30'} />
          </SocialLink>
          <SocialLink href={instagramLink} target="_blank">
            <AnimatedInstagram width={'30'} height={'30'} />
          </SocialLink>
          <SocialLink href={emailLink}>
            <AnimatedEmail width={'30'} height={'30'} />
          </SocialLink>
        </IconContainer>
        <AddressText>2408 Ashley River Rd Ste G</AddressText>
        <AddressText>Charleston, SC 29414</AddressText>
        <AddressText>843 - 437 - 6700</AddressText>
        <ButtonContainer tabletWidth={'100%'} desktopWidth={'100%'}>
          <GhostButton margintop={'20px'} href={googleMapLink} target="_blank">
            <MapIcon width={'20'} height={'20'} fillColor={'#5afdf2'} />
            Open in Google Maps
          </GhostButton>
        </ButtonContainer>
      </AddressContainer>
    )
  }
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

const AddressText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: ${props => props.theme.footer.addressText};
`

const SocialLink = styled.a`
  padding: 0;
  margin: 0;
`
