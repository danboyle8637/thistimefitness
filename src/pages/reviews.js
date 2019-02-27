import React from 'react'

import Layout from '../components/layout'
import ReviewsSection from '../components/Reviews/ReviewsSection'
import { SectionContainer } from '../styles/Containers'

const Reviews = () => {
  return (
    <Layout>
      <SectionContainer>
        <ReviewsSection />
      </SectionContainer>
    </Layout>
  )
}

export default Reviews
