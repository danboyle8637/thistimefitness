import React from 'react'

import Headline1 from './Headlines/Headline1'
import { MainButton } from '../../../styles/Buttons'
import { SectionContainer, ButtonContainer } from '../../../styles/Containers'
import ChallengeReviews from './ChallengeReviews'

const TestimonialSection = () => {
  return (
    <SectionContainer
      mobilePadding={'20px 16px 80px 16px'}
      tabletPadding={'40px 16px 80px 16px'}
      desktopPadding={'40px 16px 0px 16px'}
    >
      <Headline1 />
      <ButtonContainer
        mMarginTop={'60px'}
        tMarginTop={'60px'}
        dMarginTop={'60px'}
      >
        <MainButton to={'/summer-early-bird-form'}>I'm Interested!</MainButton>
      </ButtonContainer>
      <ChallengeReviews />
    </SectionContainer>
  )
}

export default TestimonialSection
