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
import ScrollIcon from '../../../svgs/ScrollIcon'

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
                <ScrollText>Scroll</ScrollText>
                <ScrollIconWrapper />
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
  height: 70%;
`

const ScrollIconWrapper = styled(ScrollIcon)`
  width: 30px;
`

const ScrollText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: #d7daff;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`
