import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import {
  SpecialSubhead,
  SummerHeadlineSmall,
} from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer left tabletWidth={'90%'} desktopWidth={'80%'}>
      <SummerHeadlineSmall mobileLineHeight={'1.6'}>
        Don't Wait
      </SummerHeadlineSmall>
      <SpecialSubhead secondary>Register Now!</SpecialSubhead>
    </HeadlineContainer>
  )
}

export default Headline1
