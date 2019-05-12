import React from 'react'

import { SectionContainer, BodyTextContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import ChoiceIsYoursCopy from './Copy/ChoiceIsYoursCopy'

const ChoiceIsYoursSection = () => {
  return (
    <SectionContainer
      mobilePadding={'50px 20px 80px 20px'}
      tabletPadding={'50px 20px 120px 20px'}
      desktopPadding={'50px 20px 120px 20px'}
      desktopWidth={'100%'}
    >
      <Headline1 />
      <BodyTextContainer
        mMarginTop={'40px'}
        tMarginTop={'60px'}
        dMarginTop={'60px'}
      >
        <ChoiceIsYoursCopy />
      </BodyTextContainer>
    </SectionContainer>
  )
}

export default ChoiceIsYoursSection
