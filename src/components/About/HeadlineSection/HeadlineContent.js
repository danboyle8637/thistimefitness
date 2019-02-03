import React from 'react'
import styled from 'styled-components'

import {
  MagazineH1,
  MagazineH1Filler,
  MagazineSubhead,
} from '../../../styles/Headlines'
import { SiteButton } from '../../../styles/Buttons'
import { above } from '../../../styles/Theme'

const HeadlineContent = () => {
  return (
    <HeadlineContainer>
      <MagazineH1Filler mobileLineHeight={'1.4'}>We Are</MagazineH1Filler>
      <MagazineH1>STRONG</MagazineH1>
      <SubheadWrapper>
        <MagazineSubhead
          thin
          center
          fontSize={'16px'}
          mobileLineHeight={'1.5'}
          tabletLineHeight={'1.3'}
          desktopLineHeight={'1.5'}
        >
          Ready to burn fat… get strong… and build the healthy lifestyle you’ve
          always wanted?
        </MagazineSubhead>
      </SubheadWrapper>
      <Button purple>See Our Specials</Button>
    </HeadlineContainer>
  )
}

export default HeadlineContent

const HeadlineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`

const SubheadWrapper = styled.div`
  margin-top: 10px;
  width: 70%;
  ${above.mobile`
    width: 86%;
  `}
  ${above.tablet`
    width: 46%;
  `}
`

const Button = styled(SiteButton)`
  position: absolute;
  top: 91%;
  z-index: 1;
  ${above.mobile`
    top: 95%;
  `}
  ${above.tablet`
    top: 94%;
  `}
`
