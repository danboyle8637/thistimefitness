import React from 'react'
import Image from 'gatsby-image'

import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../styles/CreateHeadlineSection'
import RenderBackgroundImage from '../Shared/RenderBackgroundImage'
import useIsBackgroundReady from '../../hooks/useIsBackgroundReady'
import BackgroundImageLoader from '../Shared/BackgroundImageLoader'
import HeadlineContent from './HeadlineContent'

const HeadlineSection = ({ images }) => {
  const { desktopBackground, tabletBackground, mobileBackground } = images

  return (
    <RenderBackgroundImage
      mobileBackground={mobileBackground}
      tabletBackground={tabletBackground}
      desktopBackground={desktopBackground}
    >
      {({ backgroundImage }) => {
        const backgroundReady = useIsBackgroundReady(backgroundImage)

        return (
          <HeadlineGrid>
            <BackgroundWrapper>
              {backgroundReady ? (
                <Image
                  fluid={backgroundImage}
                  title={'This Time Fitness Studio'}
                  alt={'This Time Fitness Studio'}
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
