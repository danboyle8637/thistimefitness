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
        Registration
      </SummerHeadlineSmall>
      <SpecialSubhead big upper>
        Is Open
      </SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline1
