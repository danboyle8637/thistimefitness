import React from 'react'
import styled from 'styled-components'

import { Heading1, Heading4 } from '../../../styles/Headlines'
import { SiteButton } from '../../../styles/Buttons'
import { above } from '../../../styles/Theme'

const HeadlineContent = () => {
  return (
    <HeadlineContainer>
      <Heading1>Ready</Heading1>
      <HeadlineMoved>For a</HeadlineMoved>
      <Heading1>Kick</Heading1>
      <Heading1>Start?</Heading1>
      <SubHeadlineWrapper>
        <SubHeadline>
          14 Days of Unlimited Classes to Kick Start Your Results!
        </SubHeadline>
      </SubHeadlineWrapper>
      <SiteButton purple>Click to Sign Up</SiteButton>
    </HeadlineContainer>
  )
}

export default HeadlineContent

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const HeadlineMoved = styled(Heading4)`
  line-height: 1.4;
  transform: translateX(3px);
  ${above.mobile`
    transform: translateX(8px);
    line-height: 1.5;
  `}
`

const SubHeadlineWrapper = styled.div`
  margin-top: 30px;
  width: 70%;
  ${above.mobile`
    width: 60%;
  `}
`

const SubHeadline = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #f8f8f8;
  font-weight: 500;
  letter-spacing: 1.06px;
  line-height: 1.8rem;
  ${above.mobile`
    font-size: 26px;
    line-height: 2.2rem;
  `}
`
