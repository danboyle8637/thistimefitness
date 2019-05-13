import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Headline1 from './Headlines/Headline1'
import {
  HeadlineContainer,
  BodyTextContainer,
} from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import { above } from '../../../styles/Theme'

const LeadYouCopy = () => {
  const query = graphql`
    query {
      leadYouCopy: file(
        sourceInstanceName: { eq: "SummerSlimDownCopy" }
        name: { regex: "/LeadYou/" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `

  const copy = useStaticQuery(query)
  const body = copy.leadYouCopy.childMarkdownRemark.html

  return (
    <ContentContainer>
      <HeadlineContainer>
        <Headline1 />
      </HeadlineContainer>
      <BodyTextContainer
        mMarginTop={'60px'}
        tMarginTop={'60px'}
        dMarginTop={'60px'}
      >
        <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
      </BodyTextContainer>
    </ContentContainer>
  )
}

export default LeadYouCopy

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  padding: 50px 0 20px 16px;
  ${above.mobile`
    width: 70%;
    padding: 60px 0 20px 24px;
  `}
  ${above.tablet`
    padding: 80px 0 20px 160px;
  `}
`
