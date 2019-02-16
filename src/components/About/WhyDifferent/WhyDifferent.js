import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { BaseSubhead, SpecialSubhead } from '../../../styles/Headlines'
import {
  HeadlineContainer,
  SectionContainer,
  ButtonContainer,
} from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'
import WorkoutIcon from '../../../svgs/WorkoutIcon'
import FlexIcon from '../../../svgs/FlexIcon'
import HeartIcon from '../../../svgs/HeartIcon'
import BenefitWithBackgroundCard from '../../Shared/BenefitWithBackgroundCard'
import { above } from '../../../styles/Theme'

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
        const benefits = data.whyDifferent.edges.map(benefit => {
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
          <SectionContainer desktopWidth={'100%'}>
            <HeadlineContainer marginTop={'0px'}>
              <BaseSubhead>Why We're</BaseSubhead>
              <SpecialSubhead
                mobileLineHeight={'1.4'}
                tabletLineHeight={'1.4'}
                desktopLineHeight={'1.6'}
              >
                DIFFERENT
              </SpecialSubhead>
            </HeadlineContainer>
            <BenefitWrapper>{benefits}</BenefitWrapper>
            <ButtonContainer
              mMarginTop={'20px'}
              tMarginTop={'40px'}
              dMarginTop={'60px'}
            >
              <MainButton to={'/'} purple>
                See Our Specials
              </MainButton>
            </ButtonContainer>
          </SectionContainer>
        )
      }}
    />
  )
}

export default WhyDifferent

const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${above.tablet`
    flex-direction: row;
    width: 90%;
  `}
`
