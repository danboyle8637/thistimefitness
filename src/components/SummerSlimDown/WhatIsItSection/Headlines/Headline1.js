import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SummerHeadlineSmall,
  SummerHeadlineLarge,
} from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer
      left
      mMarginTop={'80px'}
      tMarginTop={'120px'}
      dMarginTop={'120px'}
    >
      <SummerHeadlineSmall mobileLineHeight={'1.6'}>
        What is the
      </SummerHeadlineSmall>
      <SummerHeadlineLarge upper>Summer</SummerHeadlineLarge>
      <SummerHeadlineLarge
        upper
        tabletLineHeight={'1.0'}
        desktopLineHeight={'1.0'}
      >
        Slim
      </SummerHeadlineLarge>
      <SummerHeadlineLarge upper>Down?</SummerHeadlineLarge>
    </HeadlineContainer>
  )
}

export default Headline1
