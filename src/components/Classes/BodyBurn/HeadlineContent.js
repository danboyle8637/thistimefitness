import React from 'react'
import styled from 'styled-components'

import BodyBurnLogo from '../../../svgs/BodyBurnLogo'
import { MagazineSubhead } from '../../../styles/Headlines'
import { HeadlineContainer } from '../../../styles/Containers'
import AnimatedScrollArrow from '../../Shared/AnimatedScrollArrow'
import { above } from '../../../styles/Theme'

const HeadlineContent = () => {
  return (
    <ContentContainer>
      <Logo gradientId={'body-burn-headline'} />
      <HeadlineContainer
        mMarginTop={'6px'}
        tMarginTop={'8px'}
        dMarginTop={'8px'}
      >
        <MagazineSubhead
          thin
          mobileFontSize={'14px'}
          tabletFontSize={'20px'}
          desktopFontSize={'22px'}
          mobileLetterSpacing={'3px'}
          tabletLetterSpacing={'11.8px'}
          desktopLetterSpacing={'14.5px'}
          moveMobileX={'-12px'}
        >
          Metabolic Strength Training
        </MagazineSubhead>
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

const Logo = styled(BodyBurnLogo)`
  width: 300px;
  ${above.mobile`
    width: 600px;
  `}
  ${above.tablet`
    width: 700px;
  `}
`
