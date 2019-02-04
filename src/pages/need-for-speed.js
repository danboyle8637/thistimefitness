import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Classes/NeedForSpeed/HeadlineSection'
import LeadSection from '../components/Classes/NeedForSpeed/LeadSection'
import NeedForSpeedStatsSection from '../components/Classes/NeedForSpeed/NeedForSpeedStatsSection'
import CTASection from '../components/Classes/NeedForSpeed/CTASection'

const NeedForSpeed = ({ data }) => {
  return (
    <Layout>
      <HeadlineSection images={data} />
      <LeadSection copy={data.needForSpeedCopy} />
      <NeedForSpeedStatsSection images={data} />
      <CTASection copy={data.needForSpeedCopy} />
    </Layout>
  )
}

export default NeedForSpeed

export const query = graphql`
  query {
    runningMobileBackground: file(
      relativePath: { eq: "need-for-speed-headline-800x1500.jpg" }
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
    runningTabletBackground: file(
      relativePath: { eq: "need-for-speed-headline-834x1112.jpg" }
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
    runningDesktopBackground: file(
      relativePath: { eq: "need-for-speed-headline-1440x1024.jpg" }
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
      relativePath: { eq: "need-for-speed-stats-800x1500.jpg" }
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
      relativePath: { eq: "need-for-speed-stats-834x1112.jpg" }
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
    statsDesktopBackground: file(
      relativePath: { eq: "need-for-speed-stats-1440x1024.jpg" }
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
    needForSpeedCopy: allFile(
      filter: {
        sourceInstanceName: { eq: "ClassesCopy" }
        name: { regex: "/speed/" }
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
