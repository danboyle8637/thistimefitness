import React from 'react'
import Image from 'gatsby-image'

import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import HeadlineContent from './HeadlineContent'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'

const HeadlineSection = props => {
  const {
    bodyBurnMobileBackground,
    bodyBurnTabletBackground,
    bodyBurnDesktopBackground,
  } = props.images

  return (
    <RenderBackgroundImage
      mobileBackground={bodyBurnMobileBackground}
      tabletBackground={bodyBurnTabletBackground}
      desktopBackground={bodyBurnDesktopBackground}
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
