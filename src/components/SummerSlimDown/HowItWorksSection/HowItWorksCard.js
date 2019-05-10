import React from 'react'
import styled from 'styled-components'

import {
  HeadlineContainer,
  BodyTextContainer,
} from '../../../styles/Containers'
import { SummerHeadlineSmall } from '../../../styles/Headlines'
import { InnerBodyText } from '../../../styles/BodyText'

const HowItWorksCard = ({ headline, body }) => {
  return (
    <CardContainer>
      <HeadlineContainer left>
        <SummerHeadlineSmall purple>{headline}</SummerHeadlineSmall>
      </HeadlineContainer>
      <BodyTextContainer mMarginTop={'20px'}>
        <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
      </BodyTextContainer>
    </CardContainer>
  )
}

export default HowItWorksCard

const CardContainer = styled.div`
  margin: 0;
  margin-bottom: 40px;
  padding: 40px 14px 10px 14px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #222033;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  &:last-child {
    margin-bottom: 0;
  }
`
