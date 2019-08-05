import React from 'react'
import Image from 'gatsby-image'

import HeadlineContent from './HeadlineContent'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import useIsBackgroundReady from '../../../hooks/useIsBackgroundReady'
import BackgroundImageLoader from '../../Shared/BackgroundImageLoader'

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
      {({ backgroundImage }) => {
        const backgroundReady = useIsBackgroundReady(backgroundImage)

        return (
          <HeadlineGrid>
            <BackgroundWrapper>
              {backgroundReady ? (
                <Image
                  fluid={backgroundImage}
                  title={'Ignite Beginner 6 Week Session'}
                  alt={'Ignite Beginner 6 Week Session'}
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
