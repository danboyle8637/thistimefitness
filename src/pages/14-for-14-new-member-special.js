import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/Fourteen/HeadlineSection/HeadlineSection'
import LeadSection from '../components/Fourteen/LeadSection/LeadSection'
import BenefitSection from '../components/Fourteen/BenefitSection/BenefitSection'
import CallToActionSection from '../components/Fourteen/CallToActionSection/CallToActionSection'
import FourteenDayForm from '../components/Fourteen/Form/FourteenDayForm'
import Faq from '../components/Shared/FAQ/FAQ'

const FourteenFor14 = ({ data }) => {
  return (
    <Layout>
      <HeadlineSection images={data} />
      <LeadSection />
      <BenefitSection
        mobileJessFlex={data.mobileJessicaFlex}
        tabletJessFlex={data.tabletJessicaFlex}
        desktopJessFlex={data.desktopJessicaFlex}
        mobileGroupFlex={data.mobileGroupFlex}
        tabletGroupFlex={data.tabletGroupFlex}
        desktopGroupFlex={data.desktopGroupFlex}
        copy={data.copyArray}
      />
      <CallToActionSection copy={data.copyArray} />
      <FourteenDayForm />
      <Faq questions={data.faqArray} />
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
    tabletGroupFlex: file(
      relativePath: { eq: "14-14-group-flex-834x600.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 834
          maxHeight: 600
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopGroupFlex: file(
      relativePath: { eq: "14-14-group-flex-1440x700.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 700
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileJessicaFlex: file(
      relativePath: { eq: "14-14-workout-flex-800x800.jpg" }
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
    tabletJessicaFlex: file(
      relativePath: { eq: "14-14-workout-flex-834x600.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 834
          maxHeight: 600
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopJessicaFlex: file(
      relativePath: { eq: "14-14-workout-flex-1440x700.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 700
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    copyArray: allFile(
      filter: { sourceInstanceName: { eq: "FourteenCopy" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              headline
            }
            html
          }
        }
      }
    }
    faqArray: allFile(filter: { sourceInstanceName: { eq: "FAQ" } }) {
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
  }
`
