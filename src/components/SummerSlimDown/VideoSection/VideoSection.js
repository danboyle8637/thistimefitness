import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { SectionContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'

const VideoSection = () => {
  const query = graphql`
    query {
      video: file(
        sourceInstanceName: { eq: "SummerSlimDownImages" }
        name: { eq: "video-place-holder" }
      ) {
        childImageSharp {
          fluid(
            jpegProgressive: true
            maxWidth: 600
            maxHeight: 338
            quality: 90
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const fluid = data.video.childImageSharp.fluid

  return (
    <>
      <Headline1 />
      <VideoWrapper>
        <Image fluid={fluid} />
      </VideoWrapper>
    </>
  )
}

export default VideoSection

const VideoWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`
