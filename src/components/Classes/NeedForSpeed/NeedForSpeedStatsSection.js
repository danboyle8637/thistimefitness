import React from 'react'

import Image from '../../Shared/Image'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import NeedForSpeedStats from './NeedForSpeedStats'

const NeedForSpeedStatsSection = ({ images }) => {
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
            <NeedForSpeedStats />
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default NeedForSpeedStatsSection
