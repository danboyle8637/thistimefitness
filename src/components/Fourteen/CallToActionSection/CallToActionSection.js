import React from 'react'

import ArrowList from '../../Shared/ArrowList'
import {
  HeadlineContainer,
  BodyTextContainer,
  SectionContainer,
  ListContainer,
} from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import { BaseSubhead, SpecialSubhead } from '../../../styles/Headlines'

const CallToActionSection = ({ copy }) => {
  const callToAction = copy.edges.find(edge => {
    const id = edge.node.childMarkdownRemark.frontmatter.id
    return id === 'fourteen-quiz-call-to-action'
  })

  const body = callToAction.node.childMarkdownRemark.html

  return (
    <SectionContainer>
      <HeadlineContainer>
        <SpecialSubhead>Get Your 14 Days</SpecialSubhead>
        <BaseSubhead
          thin
          mobileLineHeight={'1.7'}
          tabletLineHeight={'1.7'}
          desktopLineHeight={'1.9'}
        >
          of unlimited classes
        </BaseSubhead>
        <SpecialSubhead>For Only $14!</SpecialSubhead>
      </HeadlineContainer>
      <BodyTextContainer>
        <ListContainer mMarginTop={'40px'}>
          <ArrowList
            listItems={[
              { text: 'You will be able to keep up and excell' },
              { text: 'You will get the challenge you deserve' },
              { text: 'You will have a ton of fun!' },
            ]}
          />
        </ListContainer>
        <InnerBodyText
          marginTop={'40px'}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </BodyTextContainer>
    </SectionContainer>
  )
}

export default CallToActionSection
