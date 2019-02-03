import React from 'react'

import Image from '../../Shared/Image'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import BodyBurnStats from './BodyBurnStats'

const BodyBurnStatsSection = ({ images }) => {
  const {
    statsMobileBackground,
    statsTabletBackground,
    statsDesktopBackground,
  } = images

  return (
    <RenderBackgroundImage
      mobileBackground={statsMobileBackground}
      tabletBackground={statsTabletBackground}
      desktopBackground={statsDesktopBackground}
    >
      {({ backgroundImage }) => (
        <HeadlineGrid>
          <BackgroundWrapper>
            <Image
              image={backgroundImage}
              top={'topBlue'}
              bottom={'bottomBlue'}
            />
          </BackgroundWrapper>
          <ContentWrapper>
            <BodyBurnStats />
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default BodyBurnStatsSection
