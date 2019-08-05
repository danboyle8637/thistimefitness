import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

import {
  HeadlineGrid,
  BackgroundWrapper,
} from '../../../styles/CreateHeadlineSection'
import useIsBackgroundReady from '../../../hooks/useIsBackgroundReady'
import BackgroundImageLoader from '../../Shared/BackgroundImageLoader'
import RenderBackgroundImage from '../../Shared/RenderBackgroundImage'
import BonusCard from './BonusCard'
import { above } from '../../../styles/Theme'

const BonusSection = ({ images }) => {
  const { welcomePackMobile, welcomePackTablet, welcomePackLaptop } = images

  return (
    <RenderBackgroundImage
      mobileBackground={welcomePackMobile}
      tabletBackground={welcomePackTablet}
      desktopBackground={welcomePackLaptop}
    >
      {({ backgroundImage }) => {
        const backgroundReady = useIsBackgroundReady(backgroundImage)

        return (
          <HeadlineGrid>
            <BackgroundWrapper>
              {backgroundReady ? (
                <Image
                  fluid={backgroundImage}
                  title={'Fall Into Fitness Welcome Pack Goodies'}
                  alt={'Fall Into Fitness Welcome Pack Goodies'}
                />
              ) : (
                <BackgroundImageLoader />
              )}
            </BackgroundWrapper>
            <ContentWrapper>
              <BonusCard />
            </ContentWrapper>
          </HeadlineGrid>
        )
      }}
    </RenderBackgroundImage>
  )
}

export default BonusSection

const ContentWrapper = styled.div`
  margin: 80px 0 0 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  justify-content: center;
  z-index: 1;
  ${above.mobile`
    margin: 120px 0 0 0;
  `}
`
