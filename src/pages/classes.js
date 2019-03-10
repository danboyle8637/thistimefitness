import React from 'react'
import { graphql } from 'gatsby'

import HeadlineSection from '../components/Classes/HeadlineSection/HeadlineSection'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'

const Classes = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.classes.title}
        description={siteConfig.classes.description}
        image={data.facebookShare.publicURL}
        url={siteConfig.classes.url}
        keywords={siteConfig.classes.keywords}
        lang={siteConfig.classes.lang}
      />
      <HeadlineSection images={data} path={data.classesPath.path} />
    </Layout>
  )
}

export default Classes

export const query = graphql`
  query {
    classesMobileBackground: file(
      relativePath: { eq: "class-background-800x1500.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1500
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    classesMobileXBackground: file(
      relativePath: { eq: "class-background-1125x2436.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1125
          maxHeight: 2436
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    classesTabletBackground: file(
      relativePath: { eq: "class-background-834x1112.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 834
          maxHeight: 1112
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    classesDesktopBackground: file(
      relativePath: { eq: "class-background-1440x1024.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 1024
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    classesPath: sitePage(path: { eq: "/classes/" }) {
      path
    }
    facebookShare: file(
      sourceInstanceName: { eq: "FacebookImages" }
      name: { eq: "classes-share-image" }
    ) {
      publicURL
    }
  }
`
