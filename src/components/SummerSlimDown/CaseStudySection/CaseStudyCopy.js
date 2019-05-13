import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import {
  SectionContainer,
  BodyTextContainer,
  ButtonContainer,
} from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import BackButton from './BackButton'

const CaseStudyCopy = ({ name }) => {
  const query = graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "SummerSlimDownCopy" }
          name: { in: ["CaseStudy1", "CaseStudy2", "CaseStudy3"] }
        }
      ) {
        nodes {
          name
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `

  const copy = useStaticQuery(query)
  const body = copy.allFile.nodes
    .filter(node => {
      return node.name === name
    })
    .map(node => {
      const body = node.childMarkdownRemark.html
      return (
        <InnerBodyText key={name} dangerouslySetInnerHTML={{ __html: body }} />
      )
    })

  return (
    <SectionContainer
      mobilePadding={'80px 20px 40px 20px'}
      tabletPadding={'120px 20px 60px 20px'}
      desktopPadding={'120px 20px 60px 20px'}
      tabletWidth={'100%'}
      desktopWidth={'100%'}
    >
      <ButtonContainer left>
        <BackButton />
      </ButtonContainer>
      <BodyTextContainer
        mMarginTop={'40px'}
        tMarginTop={'40px'}
        dMarginTop={'40px'}
      >
        {body}
      </BodyTextContainer>
    </SectionContainer>
  )
}

export default CaseStudyCopy
