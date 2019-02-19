import React from 'react'
import styled from 'styled-components'

import { HeadlineContainer, BodyTextContainer } from '../../styles/Containers'
import { BaseSubhead } from '../../styles/Headlines'
import { InnerBodyText } from '../../styles/BodyText'
import { above } from '../../styles/Theme'

const BenefitCard = ({ headline, body }) => {
  return (
    <CardContainer>
      <HeadlineContainer left tabletWidth={'100%'} desktopWidth={'100%'}>
        <BaseSubhead desktopLineHeight={1.4}>{headline}</BaseSubhead>
      </HeadlineContainer>
      <BodyTextContainer
        left
        mMarginTop={'20px'}
        tMarginTop={'20px'}
        dMarginTop={'30px'}
        tabletWidth={'100%'}
        desktopWidth={'100%'}
      >
        <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
      </BodyTextContainer>
    </CardContainer>
  )
}

export default BenefitCard

const CardContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  ${above.mobile`
    width: 100%;
  `}
  ${above.tablet`
    width: 100%;
    padding: 0 30px;
    margin-top: 0;
  `}
`
