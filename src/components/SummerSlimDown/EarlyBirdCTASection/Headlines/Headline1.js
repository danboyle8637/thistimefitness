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
        Get on the
      </SummerHeadlineSmall>
      <SpecialSubhead big upper>
        Early
      </SpecialSubhead>
      <SpecialSubhead big upper>
        Bird List
      </SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline1
