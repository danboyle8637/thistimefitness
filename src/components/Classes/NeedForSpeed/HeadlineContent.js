import React from 'react'
import styled from 'styled-components'

import Need4SpeedLogo from '../../../svgs/Need4SpeedLogo'
import { MagazineH1Filler } from '../../../styles/Headlines'
import { HeadlineContainer } from '../../../styles/Containers'
import AnimatedScrollArrow from '../../Shared/AnimatedScrollArrow'
import { above } from '../../../styles/Theme'

const HeadlineContent = () => {
  return (
    <ContentContainer>
      <Logo />
      <HeadlineContainer
        mMarginTop={'6px'}
        tMarginTop={'12px'}
        dMarginTop={'12px'}
      >
        <MagazineH1Filler
          thin
          color={'#f8f8f8'}
          mobileFontSize={'14px'}
          tabletFontSize={'20px'}
          desktopFontSize={'22px'}
          mobileLetterSpacing={'8px'}
          tabletLetterSpacing={'16px'}
          desktopLetterSpacing={'16px'}
        >
          Running Training
        </MagazineH1Filler>
      </HeadlineContainer>
      <AnimatedScrollArrow />
    </ContentContainer>
  )
}

export default HeadlineContent

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 80px;
`

const Logo = styled(Need4SpeedLogo)`
  width: 300px;
  ${above.mobile`
    width: 600px;
  `}
  ${above.tablet`
    width: 700px;
  `}
`
