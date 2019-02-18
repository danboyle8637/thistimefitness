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
import ScreenWidthContext from '../../../context/ScreenWidthContext'
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
        <ScreenWidthContext.Consumer>
          {({ screenWidth }) => {
            let showScrollIcon

            if (screenWidth >= 1024) {
              showScrollIcon = null
            }

            if (screenWidth < 1024) {
              showScrollIcon = (
                <>
                  <ScrollText>Scroll</ScrollText>
                  <ScrollIconWrapper />
                </>
              )
            }

            return (
              <HeadlineGrid>
                <BackgroundWrapper>
                  <Image fluid={backgroundImage} />
                </BackgroundWrapper>
                <ContentWrapper>
                  <DraggableWrapper>
                    <CenteredWrapper>
                      {showScrollIcon}
                      <HeadlineContent />
                    </CenteredWrapper>
                  </DraggableWrapper>
                </ContentWrapper>
              </HeadlineGrid>
            )
          }}
        </ScreenWidthContext.Consumer>
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

const ScrollIconWrapper = styled(ScrollIcon)`
  width: 30px;
  margin-top: 8px;
  margin-bottom: 20px;
`

const ScrollText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: #d7daff;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`
