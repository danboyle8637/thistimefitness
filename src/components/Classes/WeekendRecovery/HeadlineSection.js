import React from 'react'
import Image from 'gatsby-image'

import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import HeadlineContent from './HeadlineContent'
import useIsBackgroundReady from '../../../hooks/useIsBackgroundReady'
import BackgroundImageLoader from '../../Shared/BackgroundImageLoader'

const HeadlineSection = ({ images }) => {
  const {
    weekendMobileBackground,
    weekendTabletBackground,
    weekendDesktopBackground,
  } = images

  return (
    <RenderBackgroundImage
      mobileBackground={weekendMobileBackground}
      tabletBackground={weekendTabletBackground}
      desktopBackground={weekendDesktopBackground}
    >
      {({ backgroundImage }) => {
        const backgroundReady = useIsBackgroundReady(backgroundImage)

        return (
          <HeadlineGrid>
            <BackgroundWrapper>
              {backgroundReady ? (
                <Image
                  fluid={backgroundImage}
                  title={'Yoga downward dog pose'}
                  alt={'Yoga downward dog pose'}
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
