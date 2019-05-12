import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeadlineSection from '../components/SummerSlimDown/HeadlineSection/HeadlineSection'
import WhatIsItSection from '../components/SummerSlimDown/WhatIsItSection/WhatIsItSection'
import VideoSection from '../components/SummerSlimDown/VideoSection/VideoSection'
import BigDifferencesSection from '../components/SummerSlimDown/BigDifferencesSection/BigDifferencesSection'
import TestimonialSection from '../components/SummerSlimDown/TestimonialSection/TestimonialSection'
import HowItWorksSection from '../components/SummerSlimDown/HowItWorksSection/HowItWorksSection'
import LeadYouSection from '../components/SummerSlimDown/LeadYouSection/LeadYouSection'
import CaseStudySection from '../components/SummerSlimDown/CaseStudySection/CaseStudySection'
import ChoiceIsYoursSection from '../components/SummerSlimDown/ChoiceIsYoursSection/ChoiceIsYoursSection'
import EarlyBirdCTASection from '../components/SummerSlimDown/EarlyBirdCTASection/EarlyBirdCTASection'
import SummerSlimDownForm from '../components/SummerSlimDown/Form/SummerSlimDownForm'
import Faq from '../components/Shared/FAQ/FAQ'

const SummerSlimDownChallenge = ({ data }) => {
  return (
    <Layout>
      <HeadlineSection />
      <WhatIsItSection />
      <VideoSection />
      <BigDifferencesSection />
      <TestimonialSection />
      <HowItWorksSection />
      <LeadYouSection />
      <CaseStudySection />
      <ChoiceIsYoursSection />
      <EarlyBirdCTASection />
      <SummerSlimDownForm />
      <Faq questions={data.summerQuestions} />
    </Layout>
  )
}

export default SummerSlimDownChallenge

export const query = graphql`
  query {
    summerQuestions: allFile(
      filter: { sourceInstanceName: { eq: "FAQ" }, name: { regex: "/summer/" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              question
            }
          }
        }
      }
    }
  }
`
