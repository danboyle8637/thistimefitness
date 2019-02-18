import React from 'react'
import styled from 'styled-components'

import {
  ListContainer,
  ListGridContainer,
  BodyTextContainer,
} from '../../../styles/Containers'
import ArrowList from '../../Shared/ArrowList'
import { StatsHeadline } from '../../../styles/Headlines'
import { BodyText } from '../../../styles/BodyText'
import { above } from '../../../styles/Theme'

const NeedForSpeedStats = () => {
  return (
    <StatsContainer>
      <StatsWrapper>
        <div>
          <StatsHeadline>Workout Stats:</StatsHeadline>
          <ListContainer left>
            <ArrowList
              listItems={[
                { text: '60 minute workout' },
                { text: '5 minute warmup' },
                { text: '10 minute drills' },
                { text: '45 minute workout' },
              ]}
            />
          </ListContainer>
          <StatsHeadline marginTop={'60px'}>Class Stats:</StatsHeadline>
          <ListContainer left>
            <ArrowList
              listItems={[
                { text: '12 women per class' },
                { text: 'Women only' },
              ]}
            />
          </ListContainer>
        </div>
        <div>
          <StatsHeadline marginTop={'60px'}>Equipment Used:</StatsHeadline>
          <ListGridContainer tabletWidth={'100%'} desktopWidth={'100%'}>
            <ArrowList
              listItems={[
                { text: 'Your body' },
                { text: 'Bands' },
                { text: 'Agility ladders' },
                { text: 'Agility hurdles' },
              ]}
            />
            <ArrowList
              listItems={[
                { text: 'TRX systems' },
                { text: 'Parachutes' },
                { text: 'The sled' },
                { text: 'Kettlebells' },
              ]}
            />
          </ListGridContainer>
          <BodyTextContainer
            center
            mMarginTop={'40px'}
            tMarginTop={'40px'}
            dMarginTop={'40px'}
          >
            <BodyText>Plus so much more!</BodyText>
          </BodyTextContainer>
        </div>
      </StatsWrapper>
    </StatsContainer>
  )
}

export default NeedForSpeedStats

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
`

const StatsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: start;
  width: 100%;
  padding: 0 20px;
  ${above.mobile`
    width: 70%;
    padding-left: 80px;
  `}
  ${above.tablet`
    grid-template-columns: 1fr 1fr;
    margin-left: 400px;
  `}
`
