import React from 'react'

import Layout from '../components/layout'
import ReviewsSection from '../components/Reviews/ReviewsSection'
import { SectionContainer } from '../styles/Containers'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'

import TextHeader from '../components/Shared/TextHeader'

const Reviews = () => {
  return (
    <Layout>
      <SEO
        title={siteConfig.reviews.title}
        description={siteConfig.reviews.description}
        image={siteConfig.reviews.image}
        url={siteConfig.reviews.url}
        lang={siteConfig.reviews.lang}
      />
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
