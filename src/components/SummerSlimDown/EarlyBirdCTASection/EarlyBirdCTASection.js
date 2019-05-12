import React from 'react'
import styled from 'styled-components'

import { SectionContainer, BodyTextContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import Headline2 from './Headlines/Headline2'
import EarlyBirdCopy1 from './Copy/EarlyBirdCopy1'
import EarlyBirdCopy2 from './Copy/EarlyBirdCopy2'
import SwitchCover from './SwtichCover'
import KindalSig from '../../../svgs/KindalSig'
import { above } from '../../../styles/Theme'

const EarlyBirdCTASection = () => {
  return (
    <SectionContainer
      mobilePadding={'40px 20px 80px 20px'}
      tabletPadding={'40px 20px 120px 20px'}
      desktopPadding={'40px 20px 120px 20px'}
      desktopWidth={'100%'}
    >
      <Headline1 />
      <Headline2 />
      <BodyTextContainer
        mMarginTop={'60px'}
        tMarginTop={'60px'}
        dMarginTop={'60px'}
      >
        <EarlyBirdCopy1 />
      </BodyTextContainer>
      <ImageWrapper>
        <SwitchCover />
      </ImageWrapper>
      <BodyTextContainer
        mMarginTop={'40px'}
        tMarginTop={'40px'}
        dMarginTop={'40px'}
      >
        <EarlyBirdCopy2 />
        <Kindal fill={'#2AD2E2'} />
      </BodyTextContainer>
    </SectionContainer>
  )
}

export default EarlyBirdCTASection

const ImageWrapper = styled.div`
  width: 100%;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 30%;
  `}
`

const Kindal = styled(KindalSig)`
  width: 130px;
  align-self: flex-end;
`
