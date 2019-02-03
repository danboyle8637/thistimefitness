import React from 'react'

import BenefitWithBackgroundCard from '../../Shared/BenefitWithBackgroundCard'
import WorkoutIcon from '../../../svgs/WorkoutIcon'
import ForkKnifeIcon from '../../../svgs/ForkKnifeIcon'
import FitQuickieIcon from '../../../svgs/FitQuickieIcon'
import FacebookIcon from '../../../svgs/FacebookIcon'

const BenefitCopy = ({ benefitArray }) => {
  const benefits = benefitArray.map((benefit, index) => {
    const iconArray = {
      workout: <WorkoutIcon kbFill={'#272834'} dbFill={'#272834'} />,
      nutrition: <ForkKnifeIcon fill={'#272834'} />,
      fitquickie: <FitQuickieIcon fill={'#272834'} />,
      facebook: <FacebookIcon strokeColor={'#272834'} />,
    }
    const headline = benefit.node.childMarkdownRemark.frontmatter.headline
    const body = benefit.node.childMarkdownRemark.html
    const icon = benefit.node.childMarkdownRemark.frontmatter.icon

    return (
      <BenefitWithBackgroundCard
        key={index}
        headline={headline}
        body={body}
        svg={iconArray[icon]}
      />
    )
  })

  return <>{benefits}</>
}

export default BenefitCopy
