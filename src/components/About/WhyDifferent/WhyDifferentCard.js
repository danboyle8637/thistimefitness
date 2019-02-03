import React from 'react'
import styled from 'styled-components'

import { BodyTextContainer, BodyText } from '../../../styles/BodyText'
import { BaseSubhead, HeadlineContainer } from '../../../styles/Headlines'

const WhyDifferentCard = ({ icon, headline, text }) => {
  return (
    <CardContainer>
      <HeadlineWrapper>
        {icon}
        <BaseSubhead moveMobileX={'10px'}>{headline}</BaseSubhead>
      </HeadlineWrapper>
      <BodyTextContainer left marginTop={'0px'}>
        <BodyText>{text}</BodyText>
      </BodyTextContainer>
    </CardContainer>
  )
}

export default WhyDifferentCard

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:first-child) {
    margin-top: 80px;
  }
`

const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
  padding-bottom: 20px;
  width: 100%;
`
