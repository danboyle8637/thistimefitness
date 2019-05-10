import React from 'react'
import styled from 'styled-components'

import { SummerHeadlineLarge } from '../../../../styles/Headlines'
import { HeadlineContainer } from '../../../../styles/Containers'
import { above } from '../../../../styles/Theme'

const Headline2 = () => {
  return (
    <SummerHeadlineContainer left>
      <SummerHeadlineLarge upper>Summer</SummerHeadlineLarge>
      <SummerHeadlineLarge upper>Slim</SummerHeadlineLarge>
      <SummerHeadlineLarge upper>Down</SummerHeadlineLarge>
    </SummerHeadlineContainer>
  )
}

export default Headline2

const SummerHeadlineContainer = styled(HeadlineContainer)`
  ${above.mobile`
    transform: translateX(80px);
  `}
  ${above.tablet`
    align-self: flex-end;
  `}
`
