import React from 'react'
import styled from 'styled-components'

import { above } from '../../../styles/Theme'
import { BodyTextContainer } from '../../../styles/Containers'
import { BodyText } from '../../../styles/BodyText'
import { GhostButton } from '../../../styles/Buttons'
import MapIcon from '../../../svgs/MapIcon'
import EmailIcon from '../../../svgs/EmailIcon'
import ChatIcon from '../../../svgs/ChatIcon'
import MessengerIcon from '../../../svgs/MessengerIcon'

const LocationContent = () => {
  const mapLink =
    'https://www.google.com/maps/place/2408+Ashley+River+Rd,+Charleston,+SC+29414/@32.8267406,-80.0399742,18z/data=!4m5!3m4!1s0x88fe7cf1db72c8bb:0xf47f23abc33d7dca!8m2!3d32.8268102!4d-80.0385162'

  return (
    <AddressWrapper>
      <MapIcon width={'40px'} fillColor={'#2AD2E2'} />
      <AddressBox>
        <AddressText>2408 Ashley River Rd Ste G</AddressText>
        <AddressText>Charleston, SC 29414</AddressText>
        <AddressText>
          <SpacedMessengerIcon width={'20px'} />
          Kindal Boyle
        </AddressText>
        <AddressText>
          <SpacedChatIcon width={'26px'} />
          843 - 437 - 6700
        </AddressText>
        <AddressText>
          <SpacedEmailIcon width={'20px'} strokeColor={'#2AD2E2'} />
          Kindal@ThisTimeFitness.com
        </AddressText>
      </AddressBox>
      <BodyTextContainer center desktopWidth={'70%'}>
        <BodyText padding={'20px'}>
          We are located a quarter mile down from Bees Ferry road on Highway 61
          (Ashley River Road)… in the Peripont Shopping Center.
        </BodyText>
        <GhostButtonWrapper>
          <GhostButton href={mapLink} target="_blank" margintop={'12px'}>
            <SpacedMapIcon width={'14px'} fillColor={'#2AD2E2'} />
            Open in Google Maps
          </GhostButton>
        </GhostButtonWrapper>
      </BodyTextContainer>
    </AddressWrapper>
  )
}

export default LocationContent

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 40px;
  ${above.tablet`
    order: 1;
    align-self: center;
  `}
`

const AddressBox = styled.div`
  width: 65%;
  margin-top: 20px;
  ${above.mobile`
    width: 32%;
  `}
  ${above.tablet`
    width: 30%;
  `}
`

const AddressText = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: #d7daff;
  &:nth-child(n + 1) {
    align-self: flex-start;
  }
`

const SpacedMapIcon = styled(MapIcon)`
  margin-right: 5px;
`

const SpacedChatIcon = styled(ChatIcon)`
  margin-right: 9px;
`

const SpacedEmailIcon = styled(EmailIcon)`
  margin-right: 9px;
`

const SpacedMessengerIcon = styled(MessengerIcon)`
  margin-right: 9px;
`

const GhostButtonWrapper = styled.div`
  width: 80%;
  padding: 8px;
  ${above.mobile`
    width: 60%;
  `}
  ${above.tablet`
    width: 90%;
  `}
`
