import React from 'react'

import { InnerBodyText } from '../../../styles/BodyText'
import { BaseSubhead } from '../../../styles/Headlines'
import {
  BodyTextContainer,
  HeadlineContainer,
  SectionContainer,
  ButtonContainer,
} from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'

const CTASection = ({ copy }) => {
  const preBody = copy.edges.find(copyChunk => {
    const id = copyChunk.node.childMarkdownRemark.frontmatter.id
    return id === 'weekend_bottom'
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
      <ButtonContainer
        mMarginTop={'30px'}
        tMarginTop={'40px'}
        dMarginTop={'40px'}
      >
        <MainButton to={'/14-for-14-new-member-special'}>
          See Our Specials
        </MainButton>
      </ButtonContainer>
    </SectionContainer>
  )
}

export default CTASection
