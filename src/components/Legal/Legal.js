import React from 'react'
import styled from 'styled-components'

import { MagazineSubhead } from '../../styles/Headlines'
import {
  HeadlineContainer,
  SectionContainer,
  BodyTextContainer,
} from '../../styles/Containers'

const Legal = ({ headline, body }) => {
  return (
    <SectionContainer>
      <HeadlineContainer left>
        <MagazineSubhead>{headline}</MagazineSubhead>
      </HeadlineContainer>
      <BodyTextContainer
        mMarginTop={'30px'}
        tMarginTop={'40px'}
        dMarginTop={'40px'}
      >
        <LegalPageCopy dangerouslySetInnerHTML={{ __html: body }} />
      </BodyTextContainer>
    </SectionContainer>
  )
}

export default Legal

const LegalPageCopy = styled.div`
  & p {
    font-size: 16px;
    color: ${props => props.theme.textColor};
  }
  & h3 {
    font-size: 26px;
    font-family: Montserrat;
    color: ${props => props.theme.primaryColor};
    font-weight: 800;
    text-align: left;
    text-transform: uppercase;
  }
  & a {
    color: ${props => props.theme.primaryColor};
  }
`
