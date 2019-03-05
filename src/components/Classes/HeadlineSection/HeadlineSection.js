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
import { above } from '../../../styles/Theme'

const HeadlineSection = ({ images, path }) => {
  const {
    classesMobileBackground,
    classesMobileXBackground,
    classesTabletBackground,
    classesDesktopBackground,
  } = images

  return (
    <RenderBackgroundImage
      mobileBackground={classesMobileBackground}
      mobileXBackground={classesMobileXBackground}
      tabletBackground={classesTabletBackground}
      desktopBackground={classesDesktopBackground}
      path={path}
    >
      {({ backgroundImage }) => (
        <HeadlineGrid>
          <BackgroundWrapper>
            <Image fluid={backgroundImage} />
          </BackgroundWrapper>
          <ContentWrapper>
            <DraggableWrapper>
              <HeadlineContent />
            </DraggableWrapper>
          </ContentWrapper>
        </HeadlineGrid>
      )}
    </RenderBackgroundImage>
  )
}

export default HeadlineSection

const DraggableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  ${above.tablet`
    justify-content: center;
  `}
`
