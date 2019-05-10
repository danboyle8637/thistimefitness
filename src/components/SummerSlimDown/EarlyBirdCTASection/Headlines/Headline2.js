import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SummerHeadlineSmall,
  SpecialSubhead,
} from '../../../../styles/Headlines'

const Headline2 = () => {
  return (
    <HeadlineContainer left mMarginTop={'40px'}>
      <SummerHeadlineSmall mobileLineHeight={'1.6'}>
        Registration Opens
      </SummerHeadlineSmall>
      <SpecialSubhead secondary>June 3 - @7:00am</SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline2
