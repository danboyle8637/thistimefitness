import React from 'react'
import Image from 'gatsby-image'

import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import HeadlineContent from './HeadlineContent'

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
      {({ backgroundImage }) => (
        <HeadlineGrid>
          <BackgroundWrapper>
            <Image fluid={backgroundImage} title={'Yoga downward dog pose'} alt={'Yoga downward dog pose'} />
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
