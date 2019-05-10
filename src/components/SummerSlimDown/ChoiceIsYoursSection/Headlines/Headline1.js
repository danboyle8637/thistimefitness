import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SummerHeadlineSmall,
  SpecialSubhead,
} from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer left>
      <SummerHeadlineSmall mobileLineHeight={'1.6'}>
        What will
      </SummerHeadlineSmall>
      <SpecialSubhead big upper>
        You Do?
      </SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline1
