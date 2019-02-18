import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Classes/WeekendRecovery/HeadlineSection'
import LeadSection from '../components/Classes/WeekendRecovery/LeadSection'
import WeekendStatsSection from '../components/Classes/WeekendRecovery/WeekendStatsSection'
import CTASection from '../components/Classes/WeekendRecovery/CTASection'
import BackTab from '../components/Nav/BackTab'

const WeekendRecovery = ({ data }) => {
  return (
    <Layout>
      <BackTab />
      <HeadlineSection images={data} />
      <LeadSection copy={data.weekendCopy} />
      <WeekendStatsSection images={data} />
      <CTASection copy={data.weekendCopy} />
    </Layout>
  )
}

export default WeekendRecovery

export const query = graphql`
  query {
    weekendMobileBackground: file(
      relativePath: { eq: "weekend-recovery-headline-800x1500.jpg" }
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
    weekendTabletBackground: file(
      relativePath: { eq: "weekend-recovery-headline-834x1112.jpg" }
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
    weekendDesktopBackground: file(
      relativePath: { eq: "weekend-recovery-headline-1440x1024.jpg" }
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
      relativePath: { eq: "weekend-recovery-stats-800x1500.jpg" }
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
      relativePath: { eq: "weekend-recovery-stats-834x880.jpg" }
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
      relativePath: { eq: "weekend-recovery-stats-1440x700.jpg" }
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
    weekendCopy: allFile(
      filter: {
        sourceInstanceName: { eq: "ClassesCopy" }
        name: { regex: "/weekend/" }
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
