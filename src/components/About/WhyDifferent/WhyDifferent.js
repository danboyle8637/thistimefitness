import React from 'react'
import styled from 'styled-components'

import { BaseSubhead, SpecialSubhead } from '../../../styles/Headlines'
import { HeadlineContainer } from '../../../styles/Containers'
import { SiteButton } from '../../../styles/Buttons'
import WhyDifferentCard from './WhyDifferentCard'
import WorkoutIcon from '../../../svgs/WorkoutIcon'
import FlexIcon from '../../../svgs/FlexIcon'
import HeartIcon from '../../../svgs/HeartIcon'

const WhyDifferent = () => {
  const whyDiffrentData = [
    {
      icon: <WorkoutIcon width={'30px'} />,
      headline: 'Custom Workouts',
      text:
        'As a member you’ll experience a proprietary… different… workout in every class and found only in our studio.',
    },
    {
      icon: <FlexIcon width={'30px'} />,
      headline: 'Total Body',
      text:
        'As a member you’ll workout but you’ll also learn how to take care of your body by increasing mobility, flexibility, and understanding why your body feels the way it does.',
    },
    {
      icon: <HeartIcon width={'30px'} />,
      headline: 'Community',
      text:
        'Being a member means you’re part of the closest… more supportive… group of women in the Charleston area. ',
    },
  ]

  const reasons = whyDiffrentData.map((reason, index) => {
    return (
      <WhyDifferentCard
        key={index}
        icon={reason.icon}
        headline={reason.headline}
        text={reason.text}
      />
    )
  })

  return (
    <>
      <WhyDifferentContainer>
        <HeadlineContainer marginTop={'0px'}>
          <BaseSubhead>Why We're</BaseSubhead>
          <SpecialSubhead mobileLineHeight={'1.4'}>DIFFERENT</SpecialSubhead>
        </HeadlineContainer>
        {reasons}
        <SiteButton purple marginTop={'60px'}>
          See Our Specials
        </SiteButton>
      </WhyDifferentContainer>
    </>
  )
}

export default WhyDifferent

const WhyDifferentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px;
`
