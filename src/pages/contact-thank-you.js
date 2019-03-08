import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import {
  SectionContainer,
  HeadlineContainer,
  BodyTextContainer,
  ButtonContainer,
} from '../styles/Containers'
import { BaseSubhead } from '../styles/Headlines'
import { InnerBodyText } from '../styles/BodyText'
import { MainButton } from '../styles/Buttons'
import TextHeader from '../components/Shared/TextHeader'

const Contact = ({ data }) => {
  const prehead = data.file.childMarkdownRemark.frontmatter.prehead
  const headline = data.file.childMarkdownRemark.frontmatter.headline
  const body = data.file.childMarkdownRemark.html

  return (
    <Layout>
      <TextHeader
        word={'Thank You'}
        tagLine={'I Will Be In Touch'}
        fontSize={'56px'}
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
        </HeadlineContainer>
        <BodyTextContainer
          mMarginTop={'30px'}
          tMarginTop={'40px'}
          dMarginTop={'40px'}
          tabletWidth={'100%'}
          desktopWidth={'100%'}
        >
          <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
        </BodyTextContainer>
        <ButtonContainer
          mMarginTop={'20px'}
          tMarginTop={'40px'}
          dMarginTop={'60px'}
        >
          <MainButton to={'/'}>Back To Home</MainButton>
        </ButtonContainer>
      </SectionContainer>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    file(sourceInstanceName: { eq: "ContactCopy" }) {
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
