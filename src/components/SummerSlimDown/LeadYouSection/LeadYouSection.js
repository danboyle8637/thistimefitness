import React from 'react'
import styled from 'styled-components'

import { SectionContainer, ButtonContainer } from '../../../styles/Containers'
import LeadYouContent from './LeadYouContent'
import { SiteButton } from '../../../styles/Buttons'

const LeadYouSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <LeadYouContent />
      </ContentWrapper>
      <ButtonContainer
        mMarginTop={'40px'}
        tMarginTop={'60px'}
        dMarginTop={'60px'}
      >
        <SiteButton>I'm Interested!</SiteButton>
      </ButtonContainer>
    </SectionContainer>
  )
}

export default LeadYouSection

const ContentWrapper = styled.div`
  width: 100%;
`
