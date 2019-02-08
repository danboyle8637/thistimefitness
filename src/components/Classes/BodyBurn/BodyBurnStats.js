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

const BodyBurnStats = () => {
  return (
    <SpecialContainer>
      <StatsHeadline>Workout Stats:</StatsHeadline>
      <ListContainer left>
        <ArrowList
          listItems={[
            { text: '60 minute workout' },
            { text: '5 minute warmup' },
            { text: '45 minute workout' },
            { text: '10 minute cool down' },
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
            { text: 'Kettlebells' },
            { text: 'Steel maces' },
            { text: 'Steel bells' },
          ]}
        />
        <ArrowList
          listItems={[
            { text: 'TRX systems' },
            { text: 'Battle ropes' },
            { text: 'The sled' },
            { text: 'Parallettes' },
          ]}
        />
      </ListGridContainer>
      <BodyTextContainer center mMarginTop={'40px'}>
        <BodyText>Plus so much more!</BodyText>
      </BodyTextContainer>
    </SpecialContainer>
  )
}

export default BodyBurnStats

const SpecialContainer = styled.div`
  padding: 0 20px;
`
