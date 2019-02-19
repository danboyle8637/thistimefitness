import React, { Component } from 'react'
import Image from 'gatsby-image'

import HeadlineContent from './HeadlineContent'
import { above } from '../../../styles/Theme'
import {
  HeadlineGrid,
  BackgroundWrapper,
  ContentWrapper,
} from '../../../styles/CreateHeadlineSection'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import AnimatedScrollArrow from '../../Shared/AnimatedScrollArrow'

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
        {({ backgroundImage }) => (
          <HeadlineGrid>
            <BackgroundWrapper>
              <Image fluid={backgroundImage} />
            </BackgroundWrapper>
            <ContentWrapper>
              <HeadlineContent />
              <AnimatedScrollArrow tabletTop={'90%'} desktopTop={'96%'} />
            </ContentWrapper>
          </HeadlineGrid>
        )}
      </RenderBackgroundImage>
    )
  }
}

export default HeadlineSection
