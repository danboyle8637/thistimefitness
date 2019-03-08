import React from 'react'
import styled from 'styled-components'

import StarRating from '../../svgs/StarRating'
import { above } from '../../styles/Theme'

const ReviewHeader = ({ headline, url }) => {
  return (
    <ReviewHeaderContainer>
      <ReviewAvatar src={url} alt={'Reviewer Picture'} />
      <ReviewHeaderWrapper>
        <ReviewHeadline>{headline}</ReviewHeadline>
        <ReviewStarsWrapper>
          <StarRating width={'100px'} />
        </ReviewStarsWrapper>
      </ReviewHeaderWrapper>
    </ReviewHeaderContainer>
  )
}

export default ReviewHeader

const ReviewHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto 3fr;
  gap: 10px;
  justify-content: start;
  width: 100%;
`

const ReviewHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const ReviewAvatar = styled.img`
  margin: 0;
  padding: 0;
  width: 60px;
  border-radius: 50%;
  ${above.mobile`
    width: 80px;
  `}
`

const ReviewHeadline = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: ${props => props.theme.textColor};
`

const ReviewStarsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`
