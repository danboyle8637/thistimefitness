import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {
  SectionContainer,
  HeadlineContainer,
  BodyTextContainer,
} from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import { BaseSubhead, MagazineH1Filler } from '../../../styles/Headlines'

const CTASection = () => (
  <StaticQuery
    query={graphql`
      query {
        ctaSection: file(
          sourceInstanceName: { eq: "IgniteCopy" }
          relativePath: { eq: "cta_section.md" }
        ) {
          childMarkdownRemark {
            html
            frontmatter {
              prehead
              headline
            }
          }
        }
      }
    `}
    render={data => {
      const prehead = data.ctaSection.childMarkdownRemark.frontmatter.prehead
      const headline = data.ctaSection.childMarkdownRemark.frontmatter.headline
      const body = data.ctaSection.childMarkdownRemark.html

      return (
        <SectionContainer>
          <HeadlineContainer>
            <MagazineH1Filler thin>{prehead}</MagazineH1Filler>
            <BaseSubhead center marginTop={'12px'} mobileLineHeight={'1.4'}>
              {headline}
            </BaseSubhead>
          </HeadlineContainer>
          <BodyTextContainer mMarginTop={'20px'}>
            <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
          </BodyTextContainer>
        </SectionContainer>
      )
    }}
  />
)

export default CTASection
