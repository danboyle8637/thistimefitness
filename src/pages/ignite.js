import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Ignite/HeadlineSection/HeadlineSection'
import LeadSection from '../components/Ignite/LeadSection/LeadSection'
import LetterSection from '../components/Ignite/LetterSection/LetterSection'
import CountdownTimer from '../components/Ignite/CountdownTimer/CountdownTimer'
import BenefitSection from '../components/Ignite/BenefitSection/BenefitSection'
import CTASection from '../components/Ignite/CTASection/CTASection'

const Ignite = ({ data }) => {
  return (
    <Layout>
      <HeadlineSection images={data} />
      <LeadSection copy={data.igniteCopy} />
      <CountdownTimer />
      <LetterSection copy={data.igniteCopy} images={data} />
      <CountdownTimer />
      <BenefitSection copy={data.igniteCopy} />
      <CountdownTimer />
      <CTASection />
    </Layout>
  )
}

export default Ignite

export const query = graphql`
  query {
    igniteMobileBackground: file(
      relativePath: { eq: "ignite-headline-bg-800x1500.jpg" }
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
    igniteTabletBackground: file(
      relativePath: { eq: "ignite-headline-bg-834x1112.jpg" }
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
    igniteDesktopBackground: file(
      relativePath: { eq: "ignite-headline-bg-1440x1024.jpg" }
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
    igniteKindal: file(relativePath: { eq: "ignite-kindal-pic.jpg" }) {
      name
      childImageSharp {
        fluid(
          maxWidth: 400
          maxHeight: 400
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    igniteCopy: allFile(filter: { sourceInstanceName: { eq: "IgniteCopy" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              headline
              icon
            }
            html
          }
        }
      }
    }
  }
`
