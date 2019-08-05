import React from 'react'
import Image from 'gatsby-image'

import HeadlineContent from './HeadlineContent'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import useIsBackgroundReady from '../../../hooks/useIsBackgroundReady'
import BackgroundImageLoader from '../../Shared/BackgroundImageLoader'

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
      {({ backgroundImage }) => {
        const backgroundReady = useIsBackgroundReady(backgroundImage)

        return (
          <HeadlineGrid>
            <BackgroundWrapper>
              {backgroundReady ? (
                <Image
                  fluid={backgroundImage}
                  title={'Group of Members Flexing'}
                  alt={'Group of Members Flexing'}
                />
              ) : (
                <BackgroundImageLoader />
              )}
            </BackgroundWrapper>
            <ContentWrapper>
              <HeadlineContent />
            </ContentWrapper>
          </HeadlineGrid>
        )
      }}
    </RenderBackgroundImage>
  )
}

export default HeadlineSection
