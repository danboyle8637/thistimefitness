import React from 'react'
import styled from 'styled-components'

import CountdownTimer from '../../Shared/CountdownTimer/CountDownTimer'
import { HeadlineContainer, SectionContainer } from '../../../styles/Containers'
import { BaseSubhead } from '../../../styles/Headlines'
import { SiteButton } from '../../../styles/Buttons'
import { siteConfig } from '../../../helpers/siteConfig'
import { above } from '../../../styles/Theme'

const CountdownSection = () => {
  return (
    <SectionContainer tabletWidth={'70%'} desktopWidth={'45%'}>
      <CoundownContainer>
        <HeadlineContainer>
          <BaseSubhead>Next session starts:</BaseSubhead>
        </HeadlineContainer>
        <CountdownTimer date={siteConfig.ignite.countdownDate} />
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
