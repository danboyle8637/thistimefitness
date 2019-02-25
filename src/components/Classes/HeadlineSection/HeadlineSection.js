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
            <DraggableWrapper>
              <CenteredWrapper>
                <HeadlineContent />
              </CenteredWrapper>
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
  height: 100vh;
  width: 100vw;
`

const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  ${above.tablet`
    justify-content: center;
  `}
`
