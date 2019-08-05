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
    fallIntoFitnessMobileBackground,
    fallIntoFitnessTabletBackground,
    fallIntoFitnessDesktopBackground,
  } = images

  return (
    <RenderBackgroundImage
      mobileBackground={fallIntoFitnessMobileBackground}
      tabletBackground={fallIntoFitnessTabletBackground}
      desktopBackground={fallIntoFitnessDesktopBackground}
    >
      {({ backgroundImage }) => {
        const backgroundReady = useIsBackgroundReady(backgroundImage)

        return (
          <HeadlineGrid>
            <BackgroundWrapper>
              {backgroundReady ? (
                <Image
                  fluid={backgroundImage}
                  title={
                    'An amazing group of women celebrating after a great workout'
                  }
                  alt={
                    'An amazing group of women celebrating after a great workout'
                  }
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
