import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ReviewCard from './ReviewCard'
import TransformationCTA from '../Transformations/TransformationCTA'

const ReviewsSection = () => {
  return (
    <StaticQuery
      query={graphql`
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
            }
          }
        }
      `}
      render={data => {
        const cards = data.gcms.reviews.map(review => {
          const id = review.id
          const name = review.name
          const stars = review.stars
          const headline = review.headline
          const reviewText = review.reviewText.html
          const url = review.memberImage.url

          return (
            <ReviewCard
              key={id}
              name={name}
              stars={stars}
              headline={headline}
              reviewText={reviewText}
              url={url}
            />
          )
        })

        return (
          <RatingsWrapper>
            {cards}
            <TransformationCTA />
          </RatingsWrapper>
        )
      }}
    />
  )
}

export default ReviewsSection

const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
