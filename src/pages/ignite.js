import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Ignite/HeadlineSection/HeadlineSection'
import LeadSection from '../components/Ignite/LeadSection/LeadSection'
import LetterSection from '../components/Ignite/LetterSection/LetterSection'
import CountdownSection from '../components/Ignite/CountdownTimer/CountdownSection'
import BenefitSection from '../components/Ignite/BenefitSection/BenefitSection'
import CTASection from '../components/Ignite/CTASection/CTASection'
import IgniteForm from '../components/Ignite/Form/IgniteForm'
import Faq from '../components/Shared/FAQ/FAQ'
import FacebookMessenger from '../components/FacebookMessenger'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'

const Ignite = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.igniteProgram.title}
        description={siteConfig.igniteProgram.description}
        image={data.facebookShare.publicURL}
        url={siteConfig.igniteProgram.url}
        keywords={siteConfig.igniteProgram.keywords}
        lang={siteConfig.igniteProgram.lang}
      />
      <HeadlineSection images={data} />
      <LeadSection copy={data.igniteCopy} />
      <CountdownSection />
      <LetterSection copy={data.igniteCopy} images={data} />
      <CountdownSection />
      <BenefitSection copy={data.igniteCopy} />
      <CountdownSection />
      <CTASection />
      <IgniteForm />
      <Faq questions={data.faqArray} />
      <FacebookMessenger />
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
    faqArray: allFile(
      filter: { sourceInstanceName: { eq: "FAQ" }, name: { regex: "/ignite/" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              question
            }
            html
          }
        }
      }
    }
    facebookShare: file(
      sourceInstanceName: { eq: "FacebookImages" }
      name: { eq: "ignite-share-image" }
    ) {
      publicURL
    }
  }
`
