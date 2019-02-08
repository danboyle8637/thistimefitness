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

const NeedForSpeedStats = () => {
  return (
    <SpecialContainer>
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
          listItems={[{ text: '12 women per class' }, { text: 'Women only' }]}
        />
      </ListContainer>
      <StatsHeadline marginTop={'60px'}>Equipment Used:</StatsHeadline>
      <ListGridContainer>
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
      <BodyTextContainer center mMarginTop={'40px'}>
        <BodyText>Plus so much more!</BodyText>
      </BodyTextContainer>
    </SpecialContainer>
  )
}

export default NeedForSpeedStats

const SpecialContainer = styled.div`
  padding: 0 20px;
`
