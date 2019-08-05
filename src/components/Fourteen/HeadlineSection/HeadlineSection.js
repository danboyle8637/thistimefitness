import React, { Component } from 'react'
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

class HeadlineSection extends Component {
  render() {
    const {
      desktopBackground,
      tabletBackground,
      mobileBackground2,
    } = this.props.images

    return (
      <RenderBackgroundImage
        mobileBackground={mobileBackground2}
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
                    title={'Beth pressing two kettlebells'}
                    alt={'Beth pressing two kettlebells'}
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
}

export default HeadlineSection
