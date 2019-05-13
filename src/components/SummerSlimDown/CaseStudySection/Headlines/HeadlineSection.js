import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import {
  HeadlineGrid,
  BackgroundWrapper,
} from '../../../../styles/CreateHeadlineSection'
import CaseStudyHeadline from './CaseStudyHeadline'
import RenderBackgroundImage from '../../../Shared/RenderBackgroundImage'

const HeadlineSection = ({ name }) => {
  const query = graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "SummerSlimDownCopy" }
          name: { in: ["CaseStudy1", "CaseStudy2", "CaseStudy3"] }
        }
      ) {
        nodes {
          name
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
    }
  `

  const data = useStaticQuery(query)

  const info = data.allFile.nodes.filter(node => {
    return node.name === name
  })
  const mobileBackground =
    info[0].childMarkdownRemark.frontmatter.mobileBackground
  const tabletBackground =
    info[0].childMarkdownRemark.frontmatter.tabletBackground
  const desktopBackground =
    info[0].childMarkdownRemark.frontmatter.desktopBackground
  const headline = info[0].childMarkdownRemark.frontmatter.headline

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
            <CaseStudyHeadline headline={headline} />
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default HeadlineSection

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
`
