import React from 'react'
import styled from 'styled-components'

import { above } from '../../../styles/Theme'
import { BodyText, BodyTextContainer } from '../../../styles/BodyText'
import { GhostButton } from '../../../styles/Buttons'
import MapIcon from '../../../svgs/MapIcon'
import EmailIcon from '../../../svgs/EmailIcon'
import ChatIcon from '../../../svgs/ChatIcon'
import MessengerIcon from '../../../svgs/MessengerIcon'
import MapSVG from '../../../svgs/MapSVG'

const LocationMap = () => {
  return (
    <>
      <SectionContainer>
        <MapGrid>
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
            <BodyTextContainer marginTop={'0px'}>
              <BodyText padding={'20px 0px'}>
                We are located a quarter mile down from Bees Ferry road on
                Highway 61 (Ashley River Road)… in the Peripont Shopping Center.
              </BodyText>
            </BodyTextContainer>
            <GhostButton to="/" margintop={'12px'}>
              <SpacedMapIcon width={'14px'} fillColor={'#2AD2E2'} />
              Open in Google Maps
            </GhostButton>
          </AddressWrapper>
          <MapWrapper>
            <MapSVG width={'100%'} />
          </MapWrapper>
        </MapGrid>
      </SectionContainer>
    </>
  )
}

export default LocationMap

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  background: #26243e;
  width: 100%;
  ${above.tablet`
    padding: 120px 80px;
  `}
`

const MapGrid = styled.div`
  display: flex;
  flex-direction: column;
  ${above.tablet`
    flex-direction: row;
    width: 86%;
    box-shadow: 2px 6px 20px rgba(0,0,0,0.4);
    border-radius: 4px;
    background: #363358;
  `}
`

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

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${above.tablet`
    order: 0;
    background: #26243e;
  `}
`

const AddressBox = styled.div`
  width: 65%;
  margin-top: 20px;
  ${above.mobile`
    width: 32%;
  `}
  ${above.tablet`
    width: 50%;
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
