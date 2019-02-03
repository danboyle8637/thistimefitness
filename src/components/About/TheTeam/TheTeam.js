import React from 'react'
import styled from 'styled-components'

import { SpecialSubhead } from '../../../styles/Headlines'
import ProfileRow from './ProfileRow'

const TheTeam = () => {
  return (
    <TheTeamContainer>
      <SpecialSubhead>The Team:</SpecialSubhead>
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

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
