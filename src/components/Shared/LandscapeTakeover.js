import React from 'react'
import styled from 'styled-components'

import { HeadlineContainer } from '../../styles/Containers'
import { BaseSubhead } from '../../styles/Headlines'
import MobilePhone from '../../svgs/MobilePhone'

const LandscapeTakeover = () => {
  return (
    <TakeoverContainer>
      <TakeoverWrapper>
        <HeadlineContainer>
          <BaseSubhead>Please turn your phone to portrait</BaseSubhead>
          <MobilePhone width={'50px'} />
        </HeadlineContainer>
      </TakeoverWrapper>
    </TakeoverContainer>
  )
}

export default LandscapeTakeover

const TakeoverContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const TakeoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
