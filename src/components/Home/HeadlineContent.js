import React from 'react'
import styled from 'styled-components'

import { above } from '../../styles/Theme'
import MainLogo from '../../svgs/MainLogo'
import HeadlineMenu from './HeadlineMenu'

const HeadlineContent = () => {
  return (
    <ContentContainer>
      <Logo thisFill={'#f8f8f8'} fitnessFill={'#D7DAFF'} />
      <HeadlineMenu />
    </ContentContainer>
  )
}

export default HeadlineContent

const ContentContainer = styled.div`
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${above.mobile`
    margin-top: 14%;
  `}
  ${above.tablet`
    margin-top: 10%;
  `}
`

const Logo = styled(MainLogo)`
  width: 250px;
  ${above.mobile`
    width: 450px;
  `}
  ${above.tablet`
    width: 450px;
  `}
`
