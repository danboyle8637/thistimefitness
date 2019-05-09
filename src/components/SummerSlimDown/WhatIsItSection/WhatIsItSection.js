import React from 'react'

import { SectionContainer } from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'
import Headline1 from './Headlines/Headline1'
import WhatIsItCopy from './Copy/WhatIsItCopy'

const WhatIsItSection = () => {
  return (
    <SectionContainer>
      <MainButton>I'm Interested!</MainButton>
      <Headline1 />
      <WhatIsItCopy />
    </SectionContainer>
  )
}

export default WhatIsItSection
