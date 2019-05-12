import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../../styles/CreateHeadlineSection'

import { HeadlineContainer } from '../../../../styles/Containers'
import { SummerHeadlineLarge } from '../../../../styles/Headlines'
import RenderBackgroundImage from '../../../Shared/RenderBackgroundImage'

const HeadlineSection = () => {
  const query = graphql`
    query {
      caraBarbCaseStudy: file(
        sourceInstanceName: { eq: "SummerSlimDownCopy" }
        name: { eq: "CaseStudy1" }
      ) {
        childMarkdownRemark {
          frontmatter {
            headline
            mobileBackground {
              childImageSharp {
                fluid(
                  jpegProgressive: true
                  maxWidth: 800
                  maxHeight: 600
                  quality: 90
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tabletBackground {
              childImageSharp {
                fluid(
                  jpegProgressive: true
                  maxWidth: 834
                  maxHeight: 600
                  quality: 90
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            desktopBackground {
              childImageSharp {
                fluid(
                  jpegProgressive: true
                  maxWidth: 1440
                  maxHeight: 600
                  quality: 90
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const mobileBackground =
    data.caraBarbCaseStudy.childMarkdownRemark.frontmatter.mobileBackground
  const tabletBackground =
    data.caraBarbCaseStudy.childMarkdownRemark.frontmatter.tabletBackground
  const desktopBackground =
    data.caraBarbCaseStudy.childMarkdownRemark.frontmatter.desktopBackground

  return (
    <RenderBackgroundImage
      mobileBackground={mobileBackground}
      tabletBackground={tabletBackground}
      desktopBackground={desktopBackground}
    >
      {({ backgroundImage }) => (
        <HeadlineGrid>
          <BackgroundWrapper>
            <Image fluid={backgroundImage} />
          </BackgroundWrapper>
          <ContentWrapper>
            <div>HEadline is coming</div>
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default HeadlineSection
