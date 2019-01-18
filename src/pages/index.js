import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Home/HeadlineSection'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeadlineSection images={data} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    desktopBackground: file(relativePath: { eq: "home-bg-1440x1024.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 1024
          jpegProgressive: true
          quality: 60
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tabletBackground: file(relativePath: { eq: "home-bg-834x1112.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 834
          maxHeight: 1112
          jpegProgressive: true
          quality: 60
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileBackground: file(relativePath: { eq: "home-bg-800x1500.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1500
          jpegProgressive: true
          quality: 60
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
