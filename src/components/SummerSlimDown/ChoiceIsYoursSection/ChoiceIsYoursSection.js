import React from 'react'

import { SectionContainer, BodyTextContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import ChoiceIsYoursCopy from './Copy/ChoiceIsYoursCopy'

const ChoiceIsYoursSection = () => {
  return (
    <SectionContainer>
      <Headline1 />
      <BodyTextContainer mMarginTop={'40px'}>
        <ChoiceIsYoursCopy />
      </BodyTextContainer>
    </SectionContainer>
  )
}

export default ChoiceIsYoursSection
