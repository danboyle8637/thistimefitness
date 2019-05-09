import React from 'react'
import styled from 'styled-components'

import Headline1 from './Headlines/Headline1'
import Headline2 from './Headlines/Headline2'

const HeadlineContent = () => {
  return (
    <HeadlineContainer>
      <Headline1 />
      <Headline2 />
    </HeadlineContainer>
  )
}

export default HeadlineContent

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0px 20px 20px;
  height: 100%;
`
