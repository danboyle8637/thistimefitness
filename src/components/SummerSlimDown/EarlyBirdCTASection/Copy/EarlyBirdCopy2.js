import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { InnerBodyText } from '../../../../styles/BodyText'

const EarlyBirdCopy2 = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "SummerSlimDownCopy" }
        name: { eq: "EarlyBirdList2" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `

  const copy = useStaticQuery(query)
  const body = copy.file.childMarkdownRemark.html

  return <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
}

export default EarlyBirdCopy2
