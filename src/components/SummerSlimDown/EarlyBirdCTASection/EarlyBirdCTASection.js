import React from 'react'
import styled from 'styled-components'

import { SectionContainer, BodyTextContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import Headline2 from './Headlines/Headline2'
import EarlyBirdCopy1 from './Copy/EarlyBirdCopy1'
import EarlyBirdCopy2 from './Copy/EarlyBirdCopy2'
import SwitchCover from './SwtichCover'
import KindalSig from '../../../svgs/KindalSig'

const EarlyBirdCTASection = () => {
  return (
    <SectionContainer>
      <Headline1 />
      <Headline2 />
      <BodyTextContainer mMarginTop={'60px'}>
        <EarlyBirdCopy1 />
      </BodyTextContainer>
      <ImageWrapper>
        <SwitchCover />
      </ImageWrapper>
      <BodyTextContainer mMarginTop={'40px'}>
        <EarlyBirdCopy2 />
      </BodyTextContainer>
      <Kindal fill={'#2AD2E2'} />
    </SectionContainer>
  )
}

export default EarlyBirdCTASection

const ImageWrapper = styled.div`
  width: 100%;
`

const Kindal = styled(KindalSig)`
  width: 130px;
  align-self: flex-end;
`
