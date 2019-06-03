import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SummerHeadlineSmall,
  SpecialSubhead,
} from '../../../../styles/Headlines'

const Headline2 = () => {
  return (
    <HeadlineContainer
      left
      mMarginTop={'40px'}
      tMarginTop={'40px'}
      dMarginTop={'40px'}
    >
      <SummerHeadlineSmall mobileLineHeight={'1.6'}>
        Registration Closes
      </SummerHeadlineSmall>
      <SpecialSubhead secondary>June 10 @12am</SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline2
