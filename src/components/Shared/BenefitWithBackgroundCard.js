import React from 'react'
import styled from 'styled-components'

import { HeadlineContainer, BodyTextContainer } from '../../styles/Containers'
import { BaseSubhead } from '../../styles/Headlines'
import { InnerBodyText } from '../../styles/BodyText'
import { above } from '../../styles/Theme'

const BenefitCard = ({ headline, body, svg }) => {
  return (
    <CardContainer>
      <BackgroundIcon>{svg}</BackgroundIcon>
      <ContentWrapper>
        <HeadlineContainer left tabletWidth={'100%'} desktopWidth={'100%'}>
          <BaseSubhead mobileLineHeight={'1.2'} desktopLineHeight={'1.4'}>
            {headline}
          </BaseSubhead>
        </HeadlineContainer>
        <BodyTextContainer
          left
          mMarginTop={'15px'}
          tMarginTop={'15px'}
          dMarginTop={'15px'}
          tabletWidth={'100%'}
          desktopWidth={'100%'}
        >
          <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
        </BodyTextContainer>
      </ContentWrapper>
    </CardContainer>
  )
}

export default BenefitCard

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-top: 40px;
  ${above.mobile`
    width: 70%;
    height: 260px
  `}
  ${above.tablet`
    width: 100%;
    padding: 0 30px;
    align-items: start;
  `}
`

const BackgroundIcon = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  width: 260px;
`

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  z-index: 1;
  ${above.tablet`
    padding-top: 40px;
  `}
`
