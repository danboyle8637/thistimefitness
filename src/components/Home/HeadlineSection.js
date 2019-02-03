import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../styles/CreateHeadlineSection'
import RenderBackgroundImage from '../Shared/RenderBackgroundImage'
import HeadlineContent from './HeadlineContent'

const HeadlineSection = ({ images }) => {
  const { desktopBackground, tabletBackground, mobileBackground } = images

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
            <HeadlineContent />
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default HeadlineSection
