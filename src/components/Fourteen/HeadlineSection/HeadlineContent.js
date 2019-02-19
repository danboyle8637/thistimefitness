import React from 'react'
import styled from 'styled-components'

import {
  MagazineH1,
  MagazineH1Filler,
  MagazineSubhead,
} from '../../../styles/Headlines'
import { SiteButton } from '../../../styles/Buttons'
import { ButtonContainer } from '../../../styles/Containers'
import { above } from '../../../styles/Theme'

const HeadlineContent = () => {
  return (
    <HeadlineContainer>
      <MagazineH1>Ready</MagazineH1>
      <MagazineH1Filler
        mobileLineHeight={'1.4'}
        moveMobileX={'3px'}
        tabletLineHeight={'1.5'}
        moveTabletX={'7px'}
        desktopLineHeight={'1.5'}
        moveDesktopX={'8px'}
      >
        For a
      </MagazineH1Filler>
      <MagazineH1>Kick</MagazineH1>
      <MagazineH1>Start?</MagazineH1>
      <SubHeadlineWrapper>
        <MagazineSubhead
          thin
          letterSpacing={'1.06px'}
          mobileLineHeight={'1.8rem'}
          tabletLineHeight={'2.2rem'}
          desktopLineHeight={'2.4rem'}
        >
          14 Days of Unlimited Classes to Kick Start Your Results!
        </MagazineSubhead>
      </SubHeadlineWrapper>
      <ButtonContainer
        left
        mMarginTop={'18px'}
        tMarginTop={'20px'}
        dMarginTop={'30px'}
      >
        <SiteButton purple>Click to Sign Up</SiteButton>
      </ButtonContainer>
    </HeadlineContainer>
  )
}

export default HeadlineContent

const HeadlineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20%;
  margin-left: 10px;
  ${above.mobile`
    margin-top: 10%;
  `}
  ${above.tablet`
    margin-top: 5%;
    margin-left: 20%;
  `}
`

const SubHeadlineWrapper = styled.div`
  margin-top: 30px;
  width: 70%;
  ${above.mobile`
    width: 60%;
  `}
  ${above.tablet`
    width: 50%;
  `}
`
