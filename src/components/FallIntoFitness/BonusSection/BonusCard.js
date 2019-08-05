import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import {
  HeadlineContainer,
  BodyTextContainer,
} from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import { above } from '../../../styles/Theme'

const BonusCard = () => {
  const query = graphql`
    query {
      welcomePackCopy: file(
        sourceInstanceName: { eq: "FallIntoFitnessCopy" }
        name: { eq: "welcome-pack" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `

  const copy = useStaticQuery(query)
  const body = copy.welcomePackCopy.childMarkdownRemark.html

  return (
    <CardContainer>
      <HeadlineContainer>
        <CardHeadline>Special Bonus Welcome Pack!</CardHeadline>
      </HeadlineContainer>
      <BodyTextContainer
        mMarginTop={'16px'}
        tMarginTop={'20px'}
        dMarginTop={'30px'}
      >
        <InnerBodyText note purple dangerouslySetInnerHTML={{ __html: body }} />
      </BodyTextContainer>
    </CardContainer>
  )
}

export default BonusCard

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
    transform: translateX(160px);
  `}
`

const CardHeadline = styled.h3`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.primaryBackground};
  font-weight: 800;
  text-align: left;
  font-size: 26px;
`
