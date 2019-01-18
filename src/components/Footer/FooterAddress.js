import React from 'react'
import styled from 'styled-components'

import { FooterButton } from '../../styles/Buttons'
import FacebookIcon from '../../svgs/FacebookIcon'
import InstagramIcon from '../../svgs/InstagramIcon'
import EmailIcon from '../../svgs/EmailIcon'
import MapIcon from '../../svgs/MapIcon'

const FooterAddress = () => {
  return (
    <AddressContainer>
      <IconContainer>
        <FacebookIcon width={'30'} height={'30'} strokeColor={'#5afdf2'} />
        <InstagramIcon width={'30'} height={'30'} strokeColor={'#5afdf2'} />
        <EmailIcon width={'30'} height={'30'} strokeColor={'#5afdf2'} />
      </IconContainer>
      <AddressText>2408 Ashley River Rd Ste G</AddressText>
      <AddressText>Charleston, SC 29414</AddressText>
      <FooterButton marginTop={'20px'}>
        <MapIcon width={'20'} height={'20'} />
        Open in Google Maps
      </FooterButton>
    </AddressContainer>
  )
}

export default FooterAddress

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  padding-bottom: 20px;
`

const AddressText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: #7e7e7e;
`
