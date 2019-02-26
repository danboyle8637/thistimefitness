import React from 'react'
import styled from 'styled-components'

import WeekendRecoveryLogo from '../../../svgs/WeekendRecoveryLogo'
import { MagazineSubhead } from '../../../styles/Headlines'
import { HeadlineContainer } from '../../../styles/Containers'
import AnimatedScrollArrow from '../../Shared/AnimatedScrollArrow'
import { above } from '../../../styles/Theme'

const HeadlineContent = () => {
  return (
    <ContentContainer>
      <Logo />
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
          mobileLetterSpacing={'8px'}
          tabletLetterSpacing={'14px'}
          desktopLetterSpacing={'16px'}
        >
          Body Burn & Yoga
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

const Logo = styled(WeekendRecoveryLogo)`
  width: 300px;
  ${above.mobile`
    width: 600px;
  `}
  ${above.tablet`
    width: 700px;
  `}
`
