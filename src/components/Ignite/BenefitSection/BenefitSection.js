import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { HeadlineContainer, SectionContainer } from '../../../styles/Containers'
import { SpecialSubhead, BaseSubhead } from '../../../styles/Headlines'
import BenefitWithBackgroundCard from '../../Shared/BenefitWithBackgroundCard'
import WorkoutIcon from '../../../svgs/WorkoutIcon'
import ForkKnifeIcon from '../../../svgs/ForkKnifeIcon'
import FitQuickieIcon from '../../../svgs/FitQuickieIcon'
import FacebookIcon from '../../../svgs/FacebookIcon'

const BenefitSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          benefitCopy: allFile(
            filter: {
              sourceInstanceName: { eq: "IgniteCopy" }
              name: { regex: "/benefit/" }
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
        const benefits = data.benefitCopy.edges.map(benefit => {
          const iconObj = {
            workout: <WorkoutIcon kbFill={'#272834'} dbFill={'#272834'} />,
            nutrition: <ForkKnifeIcon fill={'#272834'} />,
            fitquickie: <FitQuickieIcon fill={'#272834'} />,
            facebook: <FacebookIcon strokeColor={'#272834'} />,
          }

          const id = benefit.node.childMarkdownRemark.frontmatter.id
          const headline = benefit.node.childMarkdownRemark.frontmatter.headline
          const icon = benefit.node.childMarkdownRemark.frontmatter.icon
          const body = benefit.node.childMarkdownRemark.html

          return (
            <BenefitWithBackgroundCard
              key={id}
              headline={headline}
              body={body}
              svg={iconObj[icon]}
            />
          )
        })

        return (
          <SectionContainer>
            <HeadlineContainer left>
              <BaseSubhead>Here's what you</BaseSubhead>
              <SpecialSubhead big upper mobileLineHeight={'1.4'}>
                get
              </SpecialSubhead>
            </HeadlineContainer>
            <BenefitWrapper>{benefits}</BenefitWrapper>
          </SectionContainer>
        )
      }}
    />
  )
}

export default BenefitSection

const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
