import React from 'react'
import styled from 'styled-components'

import BodyBurnLogo from '../../../svgs/BodyBurnLogo'
import { MagazineH1Filler } from '../../../styles/Headlines'

const HeadlineContent = () => {
  return (
    <ContentContainer>
      <Logo />
      <MagazineH1Filler
        thin
        color={'#f8f8f8'}
        fontSize={'14px'}
        marginTop={'6px;'}
        letterSpacing={'0.19em'}
        moveMobileX={'-12px'}
      >
        Functional Strength Training
      </MagazineH1Filler>
    </ContentContainer>
  )
}

export default HeadlineContent

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 40px;
`

const Logo = styled(BodyBurnLogo)`
  width: 300px;
`
