import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ReviewCard from './ReviewCard'

const ReviewsSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allReview {
            edges {
              node {
                id
                name
                stars
                review
                headline
                memberImage {
                  url
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)

        const cards = data.allReview.edges.map(review => {
          const id = review.node.id
          const name = review.node.name
          const stars = review.node.stars
          const headline = review.node.headline
          const reviewText = review.node.review
          const url = review.node.memberImage.url

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
