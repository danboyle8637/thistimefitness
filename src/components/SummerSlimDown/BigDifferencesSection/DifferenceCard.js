import React from 'react'
import styled from 'styled-components'

import { SummerHeadlineSmall } from '../../../styles/Headlines'
import { InnerBodyText } from '../../../styles/BodyText'
import { above } from '../../../styles/Theme'

const DiffferenceCard = ({ number, headline, body }) => {
  return (
    <CardContainer>
      <BigNumber>{number}</BigNumber>
      <ContentWrapper>
        <SummerHeadlineSmall>{headline}</SummerHeadlineSmall>
        <InnerBodyText
          dangerouslySetInnerHTML={{ __html: body }}
          marginTop={'14px'}
        />
      </ContentWrapper>
    </CardContainer>
  )
}

export default DiffferenceCard

const CardContainer = styled.div`
  margin-top: 80px;
  position: relative;
  display: flex;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    padding: 20px; 
  `}
`

const BigNumber = styled.p`
  margin: 0;
  padding: 0;
  line-height: 0;
  font-family: Montserrat;
  font-weight: 800;
  color: ${props => props.theme.pricingColor};
  font-size: 160px;
  transform: translateY(60px);
`

const ContentWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-self: end;
  width: 100%;
  z-index: 1;
`
