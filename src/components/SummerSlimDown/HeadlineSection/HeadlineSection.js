import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import HeadlineContent from './HeadlineContent'

const HeadlineSection = () => {
  const query = graphql`
    query {
      summerMobile: file(
        sourceInstanceName: { eq: "SummerSlimDownImages" }
        name: { eq: "summer-challenge-800x1400" }
      ) {
        childImageSharp {
          fluid(
            jpegProgressive: true
            maxWidth: 800
            maxHeight: 1400
            quality: 90
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      summerTablet: file(
        sourceInstanceName: { eq: "SummerSlimDownImages" }
        name: { eq: "summer-challenge-834x900" }
      ) {
        childImageSharp {
          fluid(
            jpegProgressive: true
            maxWidth: 834
            maxHeight: 900
            quality: 90
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      summerDesktop: file(
        sourceInstanceName: { eq: "SummerSlimDownImages" }
        name: { eq: "summer-challenge-1440x750" }
      ) {
        childImageSharp {
          fluid(
            jpegProgressive: true
            maxWidth: 1400
            maxHeight: 750
            quality: 90
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const images = useStaticQuery(query)
  const summerMobile = images.summerMobile
  const summerTablet = images.summerTablet
  const summerDesktop = images.summerDesktop

  return (
    <RenderBackgroundImage
      mobileBackground={summerMobile}
      tabletBackground={summerTablet}
      desktopBackground={summerDesktop}
    >
      {({ backgroundImage }) => (
        <HeadlineGrid>
          <BackgroundWrapper>
            <Image
              fluid={backgroundImage}
              title={'Summer Slim Down Challenge'}
              alt={'Summer Slim Down Challenge'}
            />
          </BackgroundWrapper>
          <ContentWrapper>
            <HeadlineContent />
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default HeadlineSection
