import React from 'react'
import styled from 'styled-components'

import CountdownTimer from '../../Shared/CountdownTimer/CountDownTimer'
import { HeadlineContainer, SectionContainer } from '../../../styles/Containers'
import { BaseSubhead } from '../../../styles/Headlines'
import { SiteButton } from '../../../styles/Buttons'
import { above } from '../../../styles/Theme'

const CountdownSection = () => {
  return (
    <SectionContainer>
      <CoundownContainer>
        <HeadlineContainer>
          <BaseSubhead>Next session starts:</BaseSubhead>
        </HeadlineContainer>
        <CountdownTimer date={'02/17/2019 12:00 AM'} />
        <SiteButton purple>Click to Sign Up</SiteButton>
      </CoundownContainer>
    </SectionContainer>
  )
}

export default CountdownSection

const CoundownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200px;
`
