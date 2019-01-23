import React, { Component } from 'react'
import styled from 'styled-components'

import { FooterButton, SiteButton } from '../../styles/Buttons'
import FacebookIcon from '../../svgs/FacebookIcon'
import InstagramIcon from '../../svgs/InstagramIcon'
import EmailIcon from '../../svgs/EmailIcon'
import MapIcon from '../../svgs/MapIcon'
import { above } from '../../styles/Theme'

class FooterAddress extends Component {
  render() {
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
        <FooterButton marginTop={'20px'}>
          <MapIcon width={'20'} height={'20'} fillColor={'#f8f8f8'} />
          Open in Google Maps
        </FooterButton>
      </AddressContainer>
    )
  }
}

export default FooterAddress

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding-bottom: 20px;
  ${above.mobile`
    width: 50%;
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
