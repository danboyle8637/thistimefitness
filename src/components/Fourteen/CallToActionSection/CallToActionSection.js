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
  console.log(copy)
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
        <ListContainer
          mMarginTop={'40px'}
          tMarginTop={'40px'}
          dMarginTop={'50px'}
          desktopWidth={'100%'}
        >
          <ArrowList
            listItems={[
              { text: `You'll get the right type of workout` },
              { text: `You'll get the challenge you deserve` },
              { text: `You'll have a ton of fun!` },
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
