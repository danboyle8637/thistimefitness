import React from 'react'
import styled from 'styled-components'

import FallIntoFitnessLogo from '../../../svgs/FallIntoFitnessLogo'
import { MagazineH1, MagazineH1Filler } from '../../../styles/Headlines'
import { above } from '../../../styles/Theme'

const HeadlineContent = () => {
  return (
    <ContentContainer>
      <FallIntoFitnessLogoStyled />
      <HeadlineWrapper>
        <MagazineH1Filler
          mobileLineHeight={'1.3'}
          tabletLineHeight={'1.3'}
          moveMobileX={'4px'}
          moveTabletX={'7px'}
          moveDesktopX={'8px'}
        >
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
    margin-bottom: 40px;
  `}
`

const FallIntoFitnessLogoStyled = styled(FallIntoFitnessLogo)`
  margin: 60px 0 0 0;
  width: 98%;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    margin: 30px 0 0 0;
    width: 40%;
  `}
`
