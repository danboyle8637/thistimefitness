import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Headline1 from './Headlines/Headline1'
import { above } from '../../../styles/Theme'

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
    <VideoContainer>
      <Headline1 />
      <VideoWrapper>
        <Image fluid={fluid} />
      </VideoWrapper>
    </VideoContainer>
  )
}

export default VideoSection

const VideoContainer = styled.div`
  width: 100%;
  ${above.mobile`
    width: 90%;
  `}
  ${above.tablet`
    width: 70%;
  `}
`

const VideoWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  ${above.tablet`
    margin-top: 40px;
  `}
`
