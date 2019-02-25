import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Legal from '../components/Legal/Legal'

const Privacy = ({ data }) => {
  const headline = data.privacyPolicy.childMarkdownRemark.frontmatter.headline
  const body = data.privacyPolicy.childMarkdownRemark.html

  return (
    <Layout>
      <Legal headline={headline} body={body} />
    </Layout>
  )
}

export default Privacy

export const query = graphql`
  query {
    privacyPolicy: file(
      sourceInstanceName: { eq: "LegalCopy" }
      name: { regex: "/privacy_policy/" }
    ) {
      childMarkdownRemark {
        html
        frontmatter {
          id
          headline
        }
      }
    }
    disclaimer: file(
      sourceInstanceName: { eq: "LegalCopy" }
      name: { regex: "/disclaimer/" }
    ) {
      childMarkdownRemark {
        html
        frontmatter {
          id
          headline
        }
      }
    }
  }
`
