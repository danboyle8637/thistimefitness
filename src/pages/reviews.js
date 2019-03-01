import React from 'react'

import Layout from '../components/layout'
import ReviewsSection from '../components/Reviews/ReviewsSection'
import { SectionContainer } from '../styles/Containers'

import TextHeader from '../components/Shared/TextHeader'

const Reviews = () => {
  return (
    <Layout>
      <TextHeader
        word={'Reviews'}
        tagLine={'Sharing the Love'}
        fontSize={'54px'}
        letterSpacing={'1.6'}
      />
      <SectionContainer>
        <ReviewsSection />
      </SectionContainer>
    </Layout>
  )
}

export default Reviews
