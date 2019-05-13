import React from 'react'

import { HeadlineContainer } from '../../../../styles/Containers'
import { SummerHeadlineSmall } from '../../../../styles/Headlines'

const CaseStudyHeadline = ({ headline }) => {
  return (
    <HeadlineContainer>
      <SummerHeadlineSmall>{headline}</SummerHeadlineSmall>
    </HeadlineContainer>
  )
}

export default CaseStudyHeadline
