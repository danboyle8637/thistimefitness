import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/About/HeadlineSection/HeadlineSection'
import WhoWeAre from '../components/About/WhoWeAre/WhoWeAre'
import LocationMap from '../components/About/LocationMap/LocationMap'
import AboutKindal from '../components/About/AboutKindal/AboutKindalGrid'
import AboutKindalInvite from '../components/About/AboutKindal/AboutKindalInvite'
import TheTeam from '../components/About/TheTeam/TheTeam'
import WhyDifferent from '../components/About/WhyDifferent/WhyDifferent'
import FacebookMessenger from '../components/FacebookMessenger'
import { siteConfig } from '../helpers/siteConfig'
import SEO from '../components/seo'

const About = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.about.title}
        description={siteConfig.about.description}
        image={data.facebookShare.publicURL}
        url={siteConfig.about.url}
        keywords={siteConfig.about.keywords}
        lang={siteConfig.about.lang}
      />
      <HeadlineSection images={data} />
      <WhoWeAre copy={data.aboutCopy} />
      <LocationMap />
      <AboutKindal images={data} copy={data.aboutCopy} />
      <AboutKindalInvite copy={data.aboutCopy} />
      <TheTeam />
      <WhyDifferent />
      <FacebookMessenger />
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    aboutMobileBackground: file(
      relativePath: { eq: "about-headline-bg-800x1500.jpg" }
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
    aboutTabletBackground: file(
      relativePath: { eq: "about-header-834x1112.jpg" }
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
    aboutDesktopBackground: file(
      relativePath: { eq: "about-header-1440x1024.jpg" }
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
    kindalMobileBackground: file(
      relativePath: { eq: "about-kindal-bg-800x1500.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1500
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kindalTabletBackground: file(
      relativePath: { eq: "about-kindal-bg-834x1112.jpg" }
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
    kindalDesktopBackground: file(
      relativePath: { eq: "about-kindal-bg-1440x1024.jpg" }
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
    aboutCopy: allFile(filter: { sourceInstanceName: { eq: "AboutCopy" } }) {
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
    facebookShare: file(
      sourceInstanceName: { eq: "FacebookImages" }
      name: { eq: "about-share-image" }
    ) {
      publicURL
    }
  }
`
