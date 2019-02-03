import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Classes/WeekendRecovery/HeadlineSection'

const WeekendRecovery = ({ data }) => {
  return (
    <Layout>
      <HeadlineSection images={data} />
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
      relativePath: { eq: "weekend-recovery-stats-834x1112.jpg" }
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
      relativePath: { eq: "weekend-recovery-stats-1440x1024.jpg" }
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
  }
`
