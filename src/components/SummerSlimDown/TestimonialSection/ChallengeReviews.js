import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ReviewCard from '../../Reviews/ReviewCard'
import { above } from '../../../styles/Theme'

const ChallengeReviews = () => {
  const query = graphql`
    query {
      gcms {
        reviews {
          id
          name
          stars
          headline
          reviewText {
            html
          }
          memberImage {
            url
          }
          tags
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const summerReviews = data.gcms.reviews
    .filter(review => {
      return review.tags.length > 1
    })
    .map(review => {
      const headline = review.headline
      const name = review.name
      const reviewText = review.reviewText.html
      const url = review.memberImage.url

      return (
        <ReviewCard
          key={review.id}
          headline={headline}
          name={name}
          reviewText={reviewText}
          url={url}
        />
      )
    })

  return <ReviewContainer>{summerReviews}</ReviewContainer>
}

export default ChallengeReviews

const ReviewContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${above.tablet`
    flex-direction: row;
    align-items: flex-start;
  `}
`
