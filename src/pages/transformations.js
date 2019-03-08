import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import TransformationSection from '../components/Transformations/TransformationSection'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'

const Transformations = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.transformations.title}
        description={siteConfig.transformations.description}
        image={siteConfig.transformations.image}
        url={siteConfig.transformations.url}
        keywords={siteConfig.transformations.keywords}
        lang={siteConfig.transformations.lang}
      />
      <TransformationSection images={data.transformations} />
    </Layout>
  )
}

export default Transformations

export const query = graphql`
  query {
    transformations: allFile(
      filter: { sourceInstanceName: { eq: "Transformations" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(
              maxWidth: 200
              maxHeight: 200
              jpegProgressive: true
              quality: 90
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
