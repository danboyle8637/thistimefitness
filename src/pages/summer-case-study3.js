import React from 'react'

import Layout from '../components/layout'
import HeadlineSection from '../components/SummerSlimDown/CaseStudySection/Headlines/HeadlineSection'
import CaseStudyCopy from '../components/SummerSlimDown/CaseStudySection/CaseStudyCopy'
import SummerSlimDownForm from '../components/SummerSlimDown/Form/SummerSlimDownForm'
import ResultsDisclaimer from '../components/Transformations/ResultsDisclaimer'

const SummerCaseStudy3 = () => {
  return (
    <Layout>
      <HeadlineSection name={'CaseStudy3'} />
      <CaseStudyCopy name={'CaseStudy3'} />
      <SummerSlimDownForm />
      <ResultsDisclaimer />
    </Layout>
  )
}

export default SummerCaseStudy3
