import React from 'react'
import styled from 'styled-components'

import ResultsDisclaimer from './ResultsDisclaimer'
import {
  HeadlineContainer,
  BodyTextContainer,
  ButtonContainer,
} from '../../styles/Containers'
import { BaseSubhead } from '../../styles/Headlines'
import { BodyText } from '../../styles/BodyText'
import { MainButton } from '../../styles/Buttons'

const TransformationCTA = () => {
  return (
    <CTASectionContainer>
      <HeadlineContainer
        mMarginTop={'120px'}
        tMarginTop={'140px'}
        dMarginTop={'170px'}
      >
        <BaseSubhead>Ready for Your Change?</BaseSubhead>
      </HeadlineContainer>
      <BodyTextContainer
        mMarginTop={'14px'}
        tMarginTop={'20px'}
        dMarginTop={'26px'}
      >
        <BodyText>
          You too can accomplish your goals. But you have to start now... stay
          persistant... work hard... and have fun. Let's do this together.
        </BodyText>
        <ButtonContainer
          mMarginTop={'30px'}
          tMarginTop={'40px'}
          dMarginTop={'50px'}
          tabletWidth={'100%'}
          desktopWidth={'100%'}
        >
          <MainButton to={'/specials'}>See Specials</MainButton>
        </ButtonContainer>
      </BodyTextContainer>
      <ResultsDisclaimer />
    </CTASectionContainer>
  )
}

export default TransformationCTA

const CTASectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
