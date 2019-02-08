import React from 'react'

import {
  BodyTextContainer,
  ListContainer,
  SectionContainer,
  HeadlineContainer,
} from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import ArrowList from '../../Shared/ArrowList'
import { BaseSubhead } from '../../../styles/Headlines'
import BodyBurnLogo from '../../../svgs/BodyBurnLogo'

const LeadSection = ({ copy }) => {
  const bodyObj = copy.edges.find(copyChunk => {
    const id = copyChunk.node.childMarkdownRemark.frontmatter.id
    return id === 'body_burn_top'
  })

  const body = bodyObj.node.childMarkdownRemark.html

  return (
    <SectionContainer>
      <BodyTextContainer>
        <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
        <ListContainer mobile={'40px'}>
          <ArrowList
            listItems={[
              { text: 'Some workouts will have more cardio…' },
              { text: 'Some workouts will focus more on strength…' },
              {
                text:
                  'Every week you’ll get a new, balanced set of workouts to hit your goals.',
              },
            ]}
          />
        </ListContainer>
      </BodyTextContainer>
      <HeadlineContainer mMarginTop={'80px;'}>
        <BaseSubhead mobileLineHeight={'1.4'}>We Call This Workout</BaseSubhead>
        <BodyBurnLogo width={'280px'} />
      </HeadlineContainer>
    </SectionContainer>
  )
}

export default LeadSection
