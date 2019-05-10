import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { InnerBodyText } from '../../../../styles/BodyText'

const EarlyBirdCopy1 = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "SummerSlimDownCopy" }
        name: { eq: "EarlyBirdList1" }
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

export default EarlyBirdCopy1
