import React from 'react'

import Image from '../../Shared/Image'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import WeekendStats from './WeekendStats'

const WeekendStatsSection = ({ images }) => {
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
            <WeekendStats />
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default WeekendStatsSection
