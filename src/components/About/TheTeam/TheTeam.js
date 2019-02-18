import React from 'react'
import styled from 'styled-components'

import { SpecialSubhead } from '../../../styles/Headlines'
import ProfileRow from './ProfileRow'
import ScrollIcon from '../../../svgs/ScrollIcon'
import { BodyTextContainer } from '../../../styles/Containers'
import { above } from '../../../styles/Theme'
import ScreenWidthContext from '../../../context/ScreenWidthContext'

const TheTeam = () => {
  return (
    <ScreenWidthContext.Consumer>
      {({ screenWidth }) => {
        let showScrollIcon

        if (screenWidth >= 1024) {
          showScrollIcon = null
        }

        if (screenWidth < 1024) {
          showScrollIcon = (
            <BodyTextContainer center mMarginTop={'12px'} tMarginTop={'14px'}>
              <ScrollText>Scroll</ScrollText>
              <ScrollIconWrapper />
            </BodyTextContainer>
          )
        }

        return (
          <TheTeamContainer>
            <SpecialSubhead>The Team:</SpecialSubhead>
            {showScrollIcon}
            <ProfileRow />
          </TheTeamContainer>
        )
      }}
    </ScreenWidthContext.Consumer>
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
  ${above.tablet`
    padding: 120px 0px;
  `}
`

const ScrollIconWrapper = styled(ScrollIcon)`
  width: 30px;
`

const ScrollText = styled.p`
  padding: 8px 0;
  margin: 0;
  font-size: 12px;
  color: #d7daff;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`
