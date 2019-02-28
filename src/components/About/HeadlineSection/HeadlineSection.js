import React from 'react'
import Image from 'gatsby-image'

import HeadlineContent from './HeadlineContent'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'

const HeadlineSection = ({ images }) => {
  const {
    aboutMobileBackground,
    aboutTabletBackground,
    aboutDesktopBackground,
  } = images

  return (
    <RenderBackgroundImage
      mobileBackground={aboutMobileBackground}
      tabletBackground={aboutTabletBackground}
      desktopBackground={aboutDesktopBackground}
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
