import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import TransformationSection from '../components/Transformations/TransformationSection'

const Transformations = ({ data }) => {
  return (
    <Layout>
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
