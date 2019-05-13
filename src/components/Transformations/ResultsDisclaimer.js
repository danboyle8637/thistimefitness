import React from 'react'
import styled from 'styled-components'

import { BodyTextContainer } from '../../styles/Containers'

const ResultsDisclaimer = () => {
  return (
    <BodyTextContainer
      mMarginTop={'60px'}
      tMarginTop={'80px'}
      dMarginTop={'100px'}
    >
      <DisclaimerText>
        The results you see are from real members who worked really hard... came
        to their workouts... and took our advice. These are results you can
        expect by busting your butt and staying consistent. Joining This Time
        Fitness guarantees you no results. We will help you with everything we
        have but it's up to you to do the work it takes.
      </DisclaimerText>
    </BodyTextContainer>
  )
}

export default ResultsDisclaimer

const DisclaimerText = styled.p`
  margin: 0;
  padding: 12px;
  font-size: 14px;
  color: #4a4c6f;
`
