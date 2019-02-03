import React from 'react'
import styled from 'styled-components'

import {
  HeadlineContainer,
  BodyTextContainer,
} from '../../../styles/Containers'
import { SpecialSubhead, BaseSubhead } from '../../../styles/Headlines'

const LetterHeadline = () => {
  return (
    <SpecialHeadline>
      <HeadlineContainer left>
        <BaseSubhead moveMobileX={'3px'}>Have you</BaseSubhead>
        <SpecialSubhead big upper mobileLineHeight={'1.3'}>
          Decided
        </SpecialSubhead>
        <BaseSubhead moveMobileX={'3px'}>it's TIME for a change?</BaseSubhead>
      </HeadlineContainer>
    </SpecialHeadline>
  )
}

export default LetterHeadline

const SpecialHeadline = styled.div`
  padding: 20px;
`
