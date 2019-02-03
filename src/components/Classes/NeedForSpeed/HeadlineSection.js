import React from 'react'
import Image from 'gatsby-image'

import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import HeadlineContent from './HeadlineContent'

const HeadlineSection = ({ images }) => {
  const {
    runningMobileBackground,
    runningTabletBackground,
    runningDesktopBackground,
  } = images

  return (
    <RenderBackgroundImage
      mobileBackground={runningMobileBackground}
      tabletBackground={runningTabletBackground}
      desktopBackground={runningDesktopBackground}
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
