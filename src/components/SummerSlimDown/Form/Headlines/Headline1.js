import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SpecialSubhead,
  SummerHeadlineSmall,
} from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer left>
      <SummerHeadlineSmall mobileLineHeight={'1.6'}>
        Get on the
      </SummerHeadlineSmall>
      <SpecialSubhead secondary>EARLY BIRD LIST</SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline1
