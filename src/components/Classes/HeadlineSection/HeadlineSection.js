import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import HeadlineContent from './HeadlineContent'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'

const HeadlineSection = ({ images }) => {
  const {
    classesMobileBackground,
    classesTabletBackground,
    classesDesktopBackground,
  } = images

  return (
    <RenderBackgroundImage
      mobileBackground={classesMobileBackground}
      tabletBackground={classesTabletBackground}
      desktopBackground={classesDesktopBackground}
    >
      {({ backgroundImage }) => (
        <HeadlineGrid>
          <BackgroundWrapper>
            <Image fluid={backgroundImage} />
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
