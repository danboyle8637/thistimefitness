import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/FallIntoFitness/HeadlineSection/HeadlineSection'
import LeadSection from '../components/FallIntoFitness/LeadSection/LeadSection'
import LetterSection from '../components/FallIntoFitness/LetterSection/LetterSection'
import CountdownSection from '../components/FallIntoFitness/CountdownTimer/CountdownSection'
import BenefitSection from '../components/FallIntoFitness/BenefitSection/BenefitSection'
import BonusSection from '../components/FallIntoFitness/BonusSection/BonusSection'
import CTASection from '../components/FallIntoFitness/CTASection/CTASection'
import FallIntoFitnessForm from '../components/FallIntoFitness/Form/FallIntoFitnessForm'
import Faq from '../components/Shared/FAQ/FAQ'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'

const Ignite = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.fallIntoFitness.title}
        description={siteConfig.fallIntoFitness.description}
        image={data.facebookShare.publicURL}
        url={siteConfig.fallIntoFitness.url}
        keywords={siteConfig.fallIntoFitness.keywords}
        lang={siteConfig.fallIntoFitness.lang}
      />
      <HeadlineSection images={data} />
      <LeadSection copy={data.fallIntoFitnessCopy} />
      <CountdownSection />
      <LetterSection copy={data.fallIntoFitnessCopy} images={data} />
      <CountdownSection />
      <BenefitSection copy={data.fallIntoFitnessCopy} />
      <BonusSection images={data} />
      <CountdownSection />
      <CTASection />
      <FallIntoFitnessForm />
      <Faq questions={data.faqArray} />
    </Layout>
  )
}

export default Ignite

export const query = graphql`
  query {
    fallIntoFitnessMobileBackground: file(
      relativePath: { eq: "fall-into-fitness-header-600x1300.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 600
          maxHeight: 1300
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fallIntoFitnessTabletBackground: file(
      relativePath: { eq: "fall-into-fitness-header-834x1112.jpg" }
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
    fallIntoFitnessDesktopBackground: file(
      relativePath: { eq: "fall-into-fitness-header-1440x900.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 900
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
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
    welcomePackMobile: file(
      sourceInstanceName: { eq: "FallIntoFitnessImages" }
      name: { eq: "fall-fitness-bonus-welcome-pack-600x1300" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 600
          maxHeight: 1300
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    welcomePackTablet: file(
      sourceInstanceName: { eq: "FallIntoFitnessImages" }
      name: { eq: "fall-fitness-bonus-welcome-pack-834x1112" }
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
    welcomePackLaptop: file(
      sourceInstanceName: { eq: "FallIntoFitnessImages" }
      name: { eq: "fall-fitness-bonus-welcome-pack-1440x900" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 900
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fallIntoFitnessCopy: allFile(
      filter: { sourceInstanceName: { eq: "FallIntoFitnessCopy" } }
    ) {
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
