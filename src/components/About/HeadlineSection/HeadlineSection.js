import React, { Component } from 'react'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'

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

HeadlineSection.propTypes = {
  images: PropTypes.object,
}

export default HeadlineSection
