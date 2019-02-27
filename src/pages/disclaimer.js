import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Legal from '../components/Legal/Legal'

const Privacy = ({ data }) => {
  const headline = data.disclaimer.childMarkdownRemark.frontmatter.headline
  const body = data.disclaimer.childMarkdownRemark.html

  return (
    <Layout>
      <Legal headline={headline} body={body} />
    </Layout>
  )
}

export default Privacy

export const query = graphql`
  query {
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
