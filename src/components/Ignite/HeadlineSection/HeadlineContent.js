import React from 'react'
import styled from 'styled-components'

import IgniteLogo from '../../../svgs/IgniteLogo'
import { MagazineH1, MagazineH1Filler } from '../../../styles/Headlines'

const HeadlineContent = () => {
  return (
    <ContentContainer>
      <IgniteLogo width={'180px'} />
      <HeadlineWrapper>
        <MagazineH1Filler mobileLineHeight={'1.3'} moveMobileX={'4px'}>
          Get the
        </MagazineH1Filler>
        <MagazineH1 upper>Right</MagazineH1>
        <MagazineH1 upper>Start</MagazineH1>
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
