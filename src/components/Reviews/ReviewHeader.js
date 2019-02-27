import React from 'react'
import styled from 'styled-components'

const ReviewHeader = ({ headline, stars, name, url }) => {
  return (
    <ReviewHeaderContainer>
      <ReviewAvatar src={url} alt={'Reviewer Avatar'} />
      <ReviewHeaderWrapper>
        <ReviewStarsWrapper>{stars}</ReviewStarsWrapper>
        <ReviewHeadline>{headline}</ReviewHeadline>
        <ReviewerName>{name}</ReviewerName>
      </ReviewHeaderWrapper>
    </ReviewHeaderContainer>
  )
}

export default ReviewHeader

const ReviewHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  align-items: center;
  justify-items: start;
`

const ReviewHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ReviewAvatar = styled.img`
  width: 100%;
`

const ReviewHeadline = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: ${props => props.theme.textColor};
`

const ReviewerName = styled.p`
  padding: 0;
  margin: 0;
  align-self: flex-end;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: '1.8px';
  color: ${props => props.theme.primaryColor};
`

const ReviewStarsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
