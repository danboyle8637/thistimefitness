import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ReviewCard from '../../Reviews/ReviewCard'

const ChallengeReviews = () => {
  // const query = graphql`
  //   query {
  //     gcms {
  //       reviews {
  //         id
  //         name
  //         stars
  //         headline
  //         reviewText {
  //           html
  //         }
  //         memberImage {
  //           url
  //         }
  //         tags
  //       }
  //     }
  //   }
  // `

  // const data = useStaticQuery(query)
  // console.log(data)

  return <div>Two awesome reviews!</div>
}

export default ChallengeReviews
