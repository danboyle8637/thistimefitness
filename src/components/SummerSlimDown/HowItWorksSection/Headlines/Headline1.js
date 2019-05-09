import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SummerHeadlineSmall,
  SpecialSubhead,
} from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer left>
      <SummerHeadlineSmall mobileLineHeight={'1.4'}>
        Here's how the
      </SummerHeadlineSmall>
      <SpecialSubhead upper big secondary>
        Challenge
      </SpecialSubhead>
      <SpecialSubhead upper big secondary>
        Works:
      </SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline1
