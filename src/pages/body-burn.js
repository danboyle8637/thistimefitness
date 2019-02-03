import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Classes/BodyBurn/HeadlineSection'
import LeadSection from '../components/Classes/BodyBurn/LeadSection'
import BodyBurnStatsSection from '../components/Classes/BodyBurn/BodyBurnStatsSection'

const BodyBurn = ({ data }) => {
  return (
    <Layout>
      <HeadlineSection images={data} />
      <LeadSection />
      <BodyBurnStatsSection images={data} />
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
      relativePath: { eq: "body-burn-gym-834x1112.jpg" }
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
      relativePath: { eq: "body-burn-gym-1440x1024.jpg" }
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
