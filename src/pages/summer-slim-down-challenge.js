import React from 'react'

import Layout from '../components/layout'
import HeadlineSection from '../components/SummerSlimDown/HeadlineSection/HeadlineSection'
import WhatIsItSection from '../components/SummerSlimDown/WhatIsItSection/WhatIsItSection'
import VideoSection from '../components/SummerSlimDown/VideoSection/VideoSection'
import BigDifferencesSection from '../components/SummerSlimDown/BigDifferencesSection/BigDifferencesSection'
import TestimonialSection from '../components/SummerSlimDown/TestimonialSection/TestimonialSection'
import HowItWorksSection from '../components/SummerSlimDown/HowItWorksSection/HowItWorksSection'

const SummerSlimDownChallenge = () => {
  return (
    <Layout>
      <HeadlineSection />
      <WhatIsItSection />
      <VideoSection />
      <BigDifferencesSection />
      <TestimonialSection />
      <HowItWorksSection />
    </Layout>
  )
}

export default SummerSlimDownChallenge
