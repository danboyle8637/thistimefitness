import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { InnerBodyText } from '../../../../styles/BodyText'

const ChoiceIsYoursCopy = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "SummerSlimDownCopy" }
        name: { regex: "/ChoiceIsYours/" }
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

export default ChoiceIsYoursCopy
