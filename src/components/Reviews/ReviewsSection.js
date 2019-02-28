import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ReviewCard from './ReviewCard'

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
        console.log(data)

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

        return <div>{cards}</div>
      }}
    />
  )
}

export default ReviewsSection
