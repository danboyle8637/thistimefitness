import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Fourteen/HeadlineSection/HeadlineSection'
import LeadSection from '../components/Fourteen/LeadSection/LeadSection'

const FourteenFor14 = ({ data }) => {
  return (
    <Layout>
      <HeadlineSection images={data} />
      <LeadSection images={data.mobileGroupFlex} />
    </Layout>
  )
}

export default FourteenFor14

export const query = graphql`
  query {
    desktopBackground: file(
      relativePath: { eq: "14-14-headline-bg-1440x1024.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 1024
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tabletBackground: file(
      relativePath: { eq: "14-14-headline-bg-834x1112.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 834
          maxHeight: 1112
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileBackground: file(
      relativePath: { eq: "14-14-headline-bg-800x1200.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1200
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileBackground2: file(
      relativePath: { eq: "14-14-headline-bg-800x1500.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1400
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileGroupFlex: file(
      relativePath: { eq: "14-14-group-flex-800x800.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 800
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
