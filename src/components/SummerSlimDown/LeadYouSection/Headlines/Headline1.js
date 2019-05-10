import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SummerHeadlineSmall,
  SpecialSubhead,
} from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer left>
      <SummerHeadlineSmall mobileLineHeight={'1.6'}>We'll</SummerHeadlineSmall>
      <SpecialSubhead big upper>
        Lead
      </SpecialSubhead>
      <SpecialSubhead big upper moveMobileX={'6px'}>
        You
      </SpecialSubhead>
      <SummerHeadlineSmall mobileLineHeight={'1.6'} moveMobileX={'18px'}>
        the rest of
      </SummerHeadlineSmall>
      <SummerHeadlineSmall moveMobileX={'18px'}>the way</SummerHeadlineSmall>
    </HeadlineContainer>
  )
}

export default Headline1
