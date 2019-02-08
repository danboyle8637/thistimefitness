import React from 'react'

import { InnerBodyText } from '../../../styles/BodyText'
import { BaseSubhead } from '../../../styles/Headlines'
import {
  BodyTextContainer,
  HeadlineContainer,
  SectionContainer,
} from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'

const CTASection = ({ copy }) => {
  const preBody = copy.edges.find(copyChunk => {
    const id = copyChunk.node.childMarkdownRemark.frontmatter.id
    return id === 'need_for_speed_bottom'
  })

  const body = preBody.node.childMarkdownRemark.html

  return (
    <SectionContainer>
      <HeadlineContainer>
        <BaseSubhead>Are You Ready!?!</BaseSubhead>
      </HeadlineContainer>
      <BodyTextContainer>
        <InnerBodyText
          marginTop={'20px'}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </BodyTextContainer>
      <MainButton to={'/14-for-14-new-member-spcial'}>
        See Our Specials
      </MainButton>
    </SectionContainer>
  )
}

export default CTASection
