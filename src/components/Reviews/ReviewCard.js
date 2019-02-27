import React from 'react'
import styled from 'styled-components'

import ReviewHeader from './ReviewHeader'
import { InnerBodyText } from '../../styles/BodyText'
import { BodyTextContainer } from '../../styles/Containers'

const ReviewCard = ({ reviewText, headline, stars, name, url }) => {
  return (
    <ReviewCardContainer>
      <ReviewHeader headline={headline} stars={stars} name={name} url={url} />
      <BodyTextContainer mMarginTop={'10px'}>
        <InnerBodyText dangerouslySetInnerHTML={{ __html: reviewText }} />
      </BodyTextContainer>
    </ReviewCardContainer>
  )
}

export default ReviewCard

const ReviewCardContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${props => props.theme.specialBackground};
  padding: 12px;
  border-radius: 50px 6px 6px 6px;
`
