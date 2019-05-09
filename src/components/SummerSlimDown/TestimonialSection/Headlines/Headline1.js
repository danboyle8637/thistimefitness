import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SummerHeadlineSmall,
  SpecialSubhead,
} from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer left>
      <SummerHeadlineSmall>Whatever your</SummerHeadlineSmall>
      <SummerHeadlineSmall mobileLineHeight={'1.6'}>
        fitness level
      </SummerHeadlineSmall>
      <SpecialSubhead upper big>
        You can
      </SpecialSubhead>
      <SpecialSubhead upper big>
        Do this!
      </SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline1
