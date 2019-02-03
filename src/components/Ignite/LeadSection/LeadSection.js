import React from 'react'

import { BodyTextContainer, SectionContainer } from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'

const LeadSection = ({ copy }) => {
  const leadCopy = copy.edges.find(text => {
    const id = text.node.childMarkdownRemark.frontmatter.id
    return id === 'what_is_ignite'
  })

  const body = leadCopy.node.childMarkdownRemark.html

  return (
    <SectionContainer>
      <BodyTextContainer>
        <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
      </BodyTextContainer>
    </SectionContainer>
  )
}

export default LeadSection
