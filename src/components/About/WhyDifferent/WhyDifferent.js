import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { BaseSubhead, SpecialSubhead } from '../../../styles/Headlines'
import { HeadlineContainer, SectionContainer } from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'
import WorkoutIcon from '../../../svgs/WorkoutIcon'
import FlexIcon from '../../../svgs/FlexIcon'
import HeartIcon from '../../../svgs/HeartIcon'
import BenefitWithBackgroundCard from '../../Shared/BenefitWithBackgroundCard'

const WhyDifferent = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          whyDifferent: allFile(
            filter: {
              sourceInstanceName: { eq: "AboutCopy" }
              name: { regex: "/Why/" }
            }
            sort: { fields: name, order: ASC }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  html
                  frontmatter {
                    id
                    headline
                    icon
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const benefits = data.whyDifferent.edges.map((benefit, index) => {
          const iconObj = {
            workout: <WorkoutIcon kbFill={'#272834'} dbFill={'#272834'} />,
            total_body: <FlexIcon fill={'#272834'} />,
            community: <HeartIcon fill={'#272834'} />,
          }

          const id = benefit.node.childMarkdownRemark.frontmatter.id
          const headline = benefit.node.childMarkdownRemark.frontmatter.headline
          const icon = benefit.node.childMarkdownRemark.frontmatter.icon
          const body = benefit.node.childMarkdownRemark.html

          return (
            <BenefitWithBackgroundCard
              key={id}
              svg={iconObj[icon]}
              headline={headline}
              body={body}
            />
          )
        })

        return (
          <SectionContainer>
            <HeadlineContainer marginTop={'0px'}>
              <BaseSubhead>Why We're</BaseSubhead>
              <SpecialSubhead mobileLineHeight={'1.4'}>
                DIFFERENT
              </SpecialSubhead>
            </HeadlineContainer>
            {benefits}
            <MainButton purple marginTop={'60px'}>
              See Our Specials
            </MainButton>
          </SectionContainer>
        )
      }}
    />
  )
}

export default WhyDifferent
