import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'

import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import LeadYouContent from './LeadYouContent'

const LeadYouSection = () => {
  const query = graphql`
    query {
      mobileBackground: file(
        sourceInstanceName: { eq: "SummerSlimDownImages" }
        name: { eq: "kindal-lead-you-600x1375" }
      ) {
        childImageSharp {
          fluid(
            jpegProgressive: true
            maxWidth: 600
            maxHeight: 1375
            quality: 90
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tabletBackground: file(
        sourceInstanceName: { eq: "SummerSlimDownImages" }
        name: { eq: "kindal-lead-you-834x900" }
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
      desktopBackground: file(
        sourceInstanceName: { eq: "SummerSlimDownImages" }
        name: { eq: "kindal-lead-you-1440x800" }
      ) {
        childImageSharp {
          fluid(
            jpegProgressive: true
            maxWidth: 1440
            maxHeight: 800
            quality: 90
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const kindal = useStaticQuery(query)
  const mobileBackground = kindal.mobileBackground
  const tabletBackground = kindal.tabletBackground
  const desktopBackground = kindal.desktopBackground

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
            <TextWrapper>
              <LeadYouContent />
            </TextWrapper>
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default LeadYouSection

const TextWrapper = styled.div`
  width: 100%;
`
