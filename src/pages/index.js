import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import HeadlineSection from '../components/Home/HeadlineSection'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.home.title}
        description={siteConfig.home.description}
        keywords={siteConfig.home.keywords}
        land={siteConfig.home.lang}
      />
      <HeadlineSection images={data} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
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
