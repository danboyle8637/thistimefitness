import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Classes/BodyBurn/HeadlineSection'
import LeadSection from '../components/Classes/BodyBurn/LeadSection'
import BodyBurnStatsSection from '../components/Classes/BodyBurn/BodyBurnStatsSection'
import CTASection from '../components/Classes/BodyBurn/CTASection'
import BackTab from '../components/Nav/BackTab'
import { siteConfig } from '../helpers/siteConfig'
import SEO from '../components/seo'

const BodyBurn = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.bodyBurn.title}
        description={siteConfig.bodyBurn.description}
        image={siteConfig.bodyBurn.image}
        url={siteConfig.bodyBurn.url}
        keywords={siteConfig.bodyBurn.keywords}
        lang={siteConfig.bodyBurn.lang}
      />
      <BackTab path={'/classes'} />
      <HeadlineSection images={data} />
      <LeadSection copy={data.bodyBurnCopy} />
      <BodyBurnStatsSection images={data} />
      <CTASection copy={data.bodyBurnCopy} />
    </Layout>
  )
}

export default BodyBurn

export const query = graphql`
  query {
    bodyBurnMobileBackground: file(
      relativePath: { eq: "body-burn-headline-800x1500.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1400
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    bodyBurnTabletBackground: file(
      relativePath: { eq: "body-burn-headline-834x1112.jpg" }
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
    bodyBurnDesktopBackground: file(
      relativePath: { eq: "body-burn-headline-1440x1024.jpg" }
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
    statsMobileBackground: file(
      relativePath: { eq: "body-burn-gym-800x1500.jpg" }
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
    statsTabletBackground: file(
      relativePath: { eq: "body-burn-gym-834x880.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 834
          maxHeight: 880
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    statsDesktopBackground: file(
      relativePath: { eq: "body-burn-gym-1440x700.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 700
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    bodyBurnCopy: allFile(
      filter: {
        sourceInstanceName: { eq: "ClassesCopy" }
        name: { regex: "/body_burn/" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
            }
            html
          }
        }
      }
    }
  }
`
