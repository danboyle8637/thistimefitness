import React from 'react'
import Image from 'gatsby-image'

import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import HeadlineContent from './HeadlineContent'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import useIsBackgroundReady from '../../../hooks/useIsBackgroundReady'
import BackgroundImageLoader from '../../Shared/BackgroundImageLoader'

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
      {({ backgroundImage }) => {
        const backgroundReady = useIsBackgroundReady(backgroundImage)

        return (
          <HeadlineGrid>
            <BackgroundWrapper>
              {backgroundReady ? (
                <Image
                  fluid={backgroundImage}
                  title={'Pushing a sled exercise'}
                  alt={'Pushing a sled exercise'}
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
