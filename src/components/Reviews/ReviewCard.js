import React from 'react'
import styled from 'styled-components'

import ReviewHeader from './ReviewHeader'
import { InnerBodyText } from '../../styles/BodyText'
import { BodyTextContainer } from '../../styles/Containers'
import { above } from '../../styles/Theme'

const ReviewCard = ({ reviewText, headline, stars, name, url }) => {
  return (
    <ReviewCardContainer>
      <ReviewHeader headline={headline} url={url} />
      <BodyTextContainer
        mMarginTop={'16px'}
        tMarginTop={'20px'}
        dMarginTop={'20px'}
        tabletWidth={'100%'}
        desktopWidth={'100%'}
      >
        <InnerBodyText dangerouslySetInnerHTML={{ __html: reviewText }} />
      </BodyTextContainer>
      <ReviewerName>- {name}</ReviewerName>
    </ReviewCardContainer>
  )
}

export default ReviewCard

const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-child) {
    margin-bottom: 60px;
  }
  ${above.tablet`
    &:not(:last-child) {
    margin-bottom: 120px;
  }
  `}
`

const ReviewerName = styled.p`
  padding: 0;
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: '1.8px';
  color: ${props => props.theme.primaryColor};
`
