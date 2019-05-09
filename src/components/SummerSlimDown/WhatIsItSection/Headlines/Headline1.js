import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import { SummerHeadlineSmall, MagazineH1 } from '../../../../styles/Headlines'

const Headline1 = () => {
  return (
    <HeadlineContainer left mMarginTop={'60px'}>
      <SummerHeadlineSmall>What is the</SummerHeadlineSmall>
      <MagazineH1 upper>Summer</MagazineH1>
      <MagazineH1 upper>Slim</MagazineH1>
      <MagazineH1 upper>Down?</MagazineH1>
    </HeadlineContainer>
  )
}

export default Headline1
