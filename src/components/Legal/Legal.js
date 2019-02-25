import React from 'react'
import styled from 'styled-components'

import { MagazineH1 } from '../../styles/Headlines'
import { HeadlineContainer, SectionContainer } from '../../styles/Containers'

const Legal = ({ headline, body }) => {
  return (
    <SectionContainer>
      <HeadlineContainer>
        <MagazineH1>{headline}</MagazineH1>
      </HeadlineContainer>
      <LegalPageCopy dangerouslySetInnerHTML={{ __html: body }} />
    </SectionContainer>
  )
}

export default Legal

const LegalPageCopy = styled.div`
  & p {
    font-size: 16px;
    color: #d7daff;
  }
  & h3 {
    font-size: 26px;
    font-family: Montserrat;
    color: #2ad2e2;
    font-weight: 800;
    text-align: left;
    text-transform: uppercase;
  }
`
