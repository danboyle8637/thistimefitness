import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { BodyTextContainer } from '../../../../styles/Containers'
import { InnerBodyText } from '../../../../styles/BodyText'

const WhatIsItCopy = () => {
  const query = graphql`
    query {
      whatIsItCopy: file(sourceInstanceName: { eq: "SummerSlimDownCopy" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `

  const copy = useStaticQuery(query)
  const body = copy.whatIsItCopy.childMarkdownRemark.html

  return (
    <BodyTextContainer
      mMarginTop={'40px'}
      tMarginTop={'60px'}
      dMarginTop={'60px'}
    >
      <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </BodyTextContainer>
  )
}

export default WhatIsItCopy
