import React from 'react'
import styled from 'styled-components'

import {
  SummerHeadlineSmall,
  SummerHeadlineLarge,
} from '../../../../styles/Headlines'
import { HeadlineContainer } from '../../../../styles/Containers'
import { above } from '../../../../styles/Theme'

const Headline1 = () => {
  return (
    <SummerHeadlineContainer left>
      <SummerHeadlineSmall secondary>Time to</SummerHeadlineSmall>
      <SummerHeadlineLarge upper>Throw</SummerHeadlineLarge>
      <SummerHeadlineLarge upper moveMobileX={'10px'}>
        Down
      </SummerHeadlineLarge>
      <SummerHeadlineSmall mobileLineHeight={'1.6'} moveMobileX={'14px'}>
        with the
      </SummerHeadlineSmall>
      <SummerHeadlineSmall moveMobileX={'14px'}>8 week</SummerHeadlineSmall>
    </SummerHeadlineContainer>
  )
}

export default Headline1

const SummerHeadlineContainer = styled(HeadlineContainer)`
  ${above.mobile`
    transform: translate(80px, 20px);
  `}
  ${above.tablet`
    transform: translate(160px, 40px);
  `}
`
