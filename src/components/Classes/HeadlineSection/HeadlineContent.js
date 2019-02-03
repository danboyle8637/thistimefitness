import React from 'react'
import styled from 'styled-components'

import BodyBurnLogo from '../../../svgs/BodyBurnLogo'
import Need4SpeedLogo from '../../../svgs/Need4SpeedLogo'
import WeekendRecoveryLogo from '../../../svgs/WeekendRecoveryLogo'
import { SiteButton } from '../../../styles/Buttons'
import { above } from '../../../styles/Theme'
import { SectionContainer } from '../../../styles/Containers'

const HeadlineContent = () => {
  return (
    <SectionContainer>
      <ClassWrapper>
        <BodyBurn />
        <DescriptionText spacing={'1.3px'}>
          Metabolic Strength Training
        </DescriptionText>
        <SiteButton marginTop={'14px'}>Click to Learn More</SiteButton>
      </ClassWrapper>
      <ClassWrapper>
        <Need4Speed />
        <DescriptionText spacing={'0.7em'}>Running Training</DescriptionText>
        <SiteButton marginTop={'14px'}>Click to Learn More</SiteButton>
      </ClassWrapper>
      <ClassWrapper>
        <WeekendRecovery />
        <DescriptionText spacing={'0.8em'}>Strength & Yoga</DescriptionText>
        <SiteButton marginTop={'14px'}>Click to Learn More</SiteButton>
      </ClassWrapper>
    </SectionContainer>
  )
}

export default HeadlineContent

const ClassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`

const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  color: #d7daff;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: ${props => props.spacing};
`

const BodyBurn = styled(BodyBurnLogo)`
  width: 260px;
`

const Need4Speed = styled(Need4SpeedLogo)`
  width: 300px;
`

const WeekendRecovery = styled(WeekendRecoveryLogo)`
  width: 300px;
`
