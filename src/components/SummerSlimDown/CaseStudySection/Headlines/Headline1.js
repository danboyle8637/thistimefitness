import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import { SummerHeadlineSmall } from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer
      left
      mMarginTop={'80px'}
      tMarginTop={'80px'}
      dMarginTop={'200px'}
    >
      <SummerHeadlineSmall>See for yourself...</SummerHeadlineSmall>
    </HeadlineContainer>
  )
}

export default Headline1
