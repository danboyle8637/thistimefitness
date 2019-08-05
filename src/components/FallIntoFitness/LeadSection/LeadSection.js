import React from 'react'

import { BodyTextContainer, SectionContainer } from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import ArrowList from '../../Shared/ArrowList'

const LeadSection = ({ copy }) => {
  const leadCopy = copy.edges.find(text => {
    const id = text.node.childMarkdownRemark.frontmatter.id
    return id === 'what_is_fall_into_fitness'
  })

  const body = leadCopy.node.childMarkdownRemark.html

  return (
    <SectionContainer
      mobilePadding={'80px 20px 30px 20px'}
      tabletPadding={'120px 20px 30px 20px'}
      desktopPadding={'120px 20px 30px 20px'}
    >
      <BodyTextContainer>
        <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
        <ArrowList
          listItems={[
            { text: 'Get back into exercise the right way...' },
            { text: 'Help you restore proper movement...' },
            { text: 'And get you strong, lean and confident!' },
          ]}
        />
      </BodyTextContainer>
    </SectionContainer>
  )
}

export default LeadSection
