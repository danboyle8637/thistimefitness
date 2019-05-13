import React from 'react'
import styled from 'styled-components'

import CountdownTimer from '../../Shared/CountdownTimer/CountDownTimer'
import { HeadlineContainer, SectionContainer } from '../../../styles/Containers'
import { BaseSubhead, SummerHeadlineSmall } from '../../../styles/Headlines'
import { siteConfig } from '../../../helpers/siteConfig'

const CountdownSection = () => {
  return (
    <SectionContainer tabletWidth={'70%'} desktopWidth={'45%'}>
      <CoundownContainer>
        <HeadlineContainer>
          <BaseSubhead>It starts in:</BaseSubhead>
        </HeadlineContainer>
        <CountdownTimer date={siteConfig.summerSlimDown.countdownDate} />
        <SummerHeadlineSmall>June 10th 2019</SummerHeadlineSmall>
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
  height: 160px;
`
