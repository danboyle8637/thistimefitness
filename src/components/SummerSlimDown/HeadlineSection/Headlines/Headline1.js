import React from 'react'
import styled from 'styled-components'

import { SummerHeadlineSmall, MagazineH1 } from '../../../../styles/Headlines'
import { HeadlineContainer } from '../../../../styles/Containers'

const Headline1 = () => {
  return (
    <HeadlineContainer left>
      <SummerHeadlineSmall secondary>Time to</SummerHeadlineSmall>
      <MagazineH1 upper>Throw</MagazineH1>
      <MagazineH1 upper moveMobileX={'10px'}>
        Down
      </MagazineH1>
      <SummerHeadlineSmall mobileLineHeight={'1.6'} moveMobileX={'14px'}>
        with the
      </SummerHeadlineSmall>
      <SummerHeadlineSmall moveMobileX={'14px'}>8 week</SummerHeadlineSmall>
    </HeadlineContainer>
  )
}

export default Headline1
