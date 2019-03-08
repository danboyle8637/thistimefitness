import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import {
  SectionContainer,
  HeadlineContainer,
  BodyTextContainer,
  ButtonContainer,
} from '../styles/Containers'
import { GhostButton } from '../styles/Buttons'
import { BaseSubhead } from '../styles/Headlines'
import { InnerBodyText } from '../styles/BodyText'
import TextHeader from '../components/Shared/TextHeader'

const FourteenThankYouPage = ({ data }) => {
  const prehead = data.file.childMarkdownRemark.frontmatter.prehead
  const headline = data.file.childMarkdownRemark.frontmatter.headline
  const body = data.file.childMarkdownRemark.html

  const purchaseFourteen =
    'https://thistimefitness.sites.zenplanner.com/registration.cfm?payment=MEMBERSHIP&MembershipTemplateId=4012AB4B-B964-40D1-840D-CDE8E78BAAD4&personId=C6DA3B35-E59E-4E62-A630-605A1FD4BA2F'

  return (
    <Layout>
      <TextHeader
        word={'14 for 14'}
        tagLine={'Unlimited Class Trial'}
        fontSize={'66px'}
        letterSpacing={'1.8px'}
      />
      <SectionContainer>
        <HeadlineContainer>
          <BaseSubhead thin>{prehead}</BaseSubhead>
          <BaseSubhead
            mobileLineHeight={'2.2'}
            tabletLineHeight={'2.4'}
            desktopLineHeight={'2.4'}
          >
            {headline}
          </BaseSubhead>
          <BodyTextContainer
            mMarginTop={'30px'}
            tMarginTop={'40px'}
            dMarginTop={'40px'}
            tabletWidth={'100%'}
            desktopWidth={'100%'}
          >
            <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
          </BodyTextContainer>
        </HeadlineContainer>
        <ButtonContainer
          mMarginTop={'30px'}
          tMarginTop={'40px'}
          dMarginTop={'40px'}
        >
          <GhostButton href={purchaseFourteen} target="_blank" rel={'noopener'}>
            Register On ZenPlanner
          </GhostButton>
        </ButtonContainer>
      </SectionContainer>
    </Layout>
  )
}

export default FourteenThankYouPage

export const query = graphql`
  query {
    file(
      sourceInstanceName: { eq: "FourteenCopy" }
      name: { eq: "thank_you" }
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
`
