import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import TextHeader from '../components/Shared/TextHeader'
import SpecialCard from '../components/Specials/SpecialCard'
import SEO from '../components/seo'

const Specials = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <TextHeader
      word={'Specials'}
      tagLine={'New Member Specials'}
      fontSize={'48px'}
      letterSpacing={'1.4'}
    />
    <SpecialCard images={data} />
  </Layout>
)

export default Specials

export const query = graphql`
  query {
    fourteenSpecial: file(relativePath: { eq: "14-for-14-special.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 600
          maxHeight: 333
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    igniteSpecial: file(relativePath: { eq: "ignite-special.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 600
          maxHeight: 333
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
