import React from 'react'
import styled from 'styled-components'

import { SpecialSubhead } from '../../../styles/Headlines'
import ProfileRow from './ProfileRow'
import ScrollIcon from '../../../svgs/ScrollIcon'
import { BodyTextContainer } from '../../../styles/Containers'

const TheTeam = () => {
  return (
    <TheTeamContainer>
      <SpecialSubhead>The Team:</SpecialSubhead>
      <BodyTextContainer center mMarginTop={'12px'} tMarginTop={'14px'}>
        <ScrollText>Scroll</ScrollText>
        <ScrollIconWrapper />
      </BodyTextContainer>
      <ProfileRow />
    </TheTeamContainer>
  )
}

export default TheTeam

const TheTeamContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #26243e;
  padding: 80px 0px;
  width: 100%;
`

const ScrollIconWrapper = styled(ScrollIcon)`
  width: 30px;
`

const ScrollText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: #d7daff;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`
