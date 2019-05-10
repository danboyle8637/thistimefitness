import React from 'react'
import styled from 'styled-components'

import { SectionContainer } from '../../../styles/Containers'
import LeadYouContent from './LeadYouContent'
import { SiteButton } from '../../../styles/Buttons'

const LeadYouSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <LeadYouContent />
      </ContentWrapper>
      <SiteButton>I'm Interested!</SiteButton>
    </SectionContainer>
  )
}

export default LeadYouSection

const ContentWrapper = styled.div`
  width: 100%;
`
