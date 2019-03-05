import React from 'react'
import styled from 'styled-components'

import { SpecialSubhead } from '../../../styles/Headlines'
import ProfileRow from './ProfileRow'
import ScrollIcon from '../../../svgs/ScrollIcon'
import { BodyTextContainer } from '../../../styles/Containers'
import { above } from '../../../styles/Theme'
import ScreenWidthContext from '../../../context/ScreenWidthContext'
import DraggableDots from '../../Shared/DraggableDots'

const TheTeam = () => {
  return (
    <ScreenWidthContext.Consumer>
      {({ screenWidth }) => {
        let showScrollIcon
        let showDraggableDots

        if (screenWidth >= 1024) {
          showScrollIcon = null
          showDraggableDots = null
        }

        if (screenWidth < 1024) {
          showScrollIcon = (
            <BodyTextContainer center mMarginTop={'12px'} tMarginTop={'14px'}>
              <ScrollText>Swipe</ScrollText>
              <ScrollIconWrapper />
            </BodyTextContainer>
          )

          showDraggableDots = (
            <BodyTextContainer center mMarginTop={'12px'} tMarginTop={'14px'}>
              <DraggableDots />
            </BodyTextContainer>
          )
        }

        return (
          <TheTeamContainer>
            <SpecialSubhead>The Team:</SpecialSubhead>
            {showScrollIcon}
            <ProfileRow />
            {showDraggableDots}
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
  background: ${props => props.theme.secondaryBackground};
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
