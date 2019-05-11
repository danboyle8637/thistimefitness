import React from 'react'

import { SectionContainer } from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'
import Headline1 from './Headlines/Headline1'
import WhatIsItCopy from './Copy/WhatIsItCopy'

const WhatIsItSection = () => {
  return (
    <SectionContainer
      mobilePadding={'40px 20px 80px 20px'}
      tabletPadding={'60px 20px 120px 20px'}
      desktopPadding={'60px 20px 120px 20px'}
    >
      <MainButton>I'm Interested!</MainButton>
      <Headline1 />
      <WhatIsItCopy />
    </SectionContainer>
  )
}

export default WhatIsItSection
