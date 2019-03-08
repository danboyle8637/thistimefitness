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

const IgniteThankYouPage = ({ data }) => {
  const prehead = data.file.childMarkdownRemark.frontmatter.prehead
  const headline = data.file.childMarkdownRemark.frontmatter.headline
  const body = data.file.childMarkdownRemark.html

  const purchaseIgnite =
    'https://thistimefitness.sites.zenplanner.com/sign-up-now.cfm?display=MBRSHPS&categoryId=0E70FCAC-A8A6-45CB-A5B9-949B88196C5C&'

  return (
    <Layout>
      <TextHeader
        word={'Ignite'}
        tagLine={'Ignite Beginner Program'}
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
          <GhostButton href={purchaseIgnite} target="_blank" rel={'noopener'}>
            Register Now On ZenPlanner
          </GhostButton>
        </ButtonContainer>
      </SectionContainer>
    </Layout>
  )
}

export default IgniteThankYouPage

export const query = graphql`
  query {
    file(sourceInstanceName: { eq: "IgniteCopy" }, name: { eq: "thank_you" }) {
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
