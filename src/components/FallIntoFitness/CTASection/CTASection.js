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
          sourceInstanceName: { eq: "FallIntoFitnessCopy" }
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
            <MagazineH1Filler
              thin
              tabletFontSize={'28px'}
              desktopFontSize={'28px'}
            >
              {prehead}
            </MagazineH1Filler>
            <BaseSubhead
              center
              marginTop={'12px'}
              mobileLineHeight={'1.4'}
              tabletLineHeight={'1.4'}
              desktopLineHeight={'1.4'}
            >
              {headline}
            </BaseSubhead>
          </HeadlineContainer>
          <BodyTextContainer
            mMarginTop={'20px'}
            tMarginTop={'30px'}
            dMarginTop={'40px'}
            tabletWidth={'100%'}
            desktopWidth={'100%'}
          >
            <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
          </BodyTextContainer>
        </SectionContainer>
      )
    }}
  />
)

export default CTASection
