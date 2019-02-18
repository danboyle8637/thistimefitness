import React from 'react'
import styled from 'styled-components'

import IgniteLogo from '../../../svgs/IgniteLogo'
import { MagazineH1, MagazineH1Filler } from '../../../styles/Headlines'
import { above } from '../../../styles/Theme'

const HeadlineContent = () => {
  return (
    <ContentContainer>
      <IgniteLogoStyled />
      <HeadlineWrapper>
        <MagazineH1Filler mobileLineHeight={'1.3'} moveMobileX={'4px'}>
          Get the
        </MagazineH1Filler>
        <RightStartWrapper>
          <MagazineH1 upper>Right</MagazineH1>
          <MagazineH1 upper>Start</MagazineH1>
        </RightStartWrapper>
      </HeadlineWrapper>
    </ContentContainer>
  )
}

export default HeadlineContent

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`

const HeadlineWrapper = styled.div`
  align-self: flex-start;
`

const RightStartWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: start;
  ${above.tablet`
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 120px;
  `}
`

const IgniteLogoStyled = styled(IgniteLogo)`
  width: 180px;
  ${above.mobile`
    width: 240px;
  `}
  ${above.tablet`
  margin-top: 20px;
    width: 300px;
  `}
`
