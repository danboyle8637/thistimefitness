import React, { Component } from 'react'
import Image from 'gatsby-image'

import HeadlineContent from './HeadlineContent'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'

const HeadlineSection = ({ images }) => {
  const {
    igniteMobileBackground,
    igniteTabletBackground,
    igniteDesktopBackground,
  } = images

  return (
    <RenderBackgroundImage
      mobileBackground={igniteMobileBackground}
      tabletBackground={igniteTabletBackground}
      desktopBackground={igniteDesktopBackground}
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
