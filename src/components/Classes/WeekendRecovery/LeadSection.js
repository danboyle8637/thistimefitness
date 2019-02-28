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
import WeekendRecoveryLogo from '../../../svgs/WeekendRecoveryLogo'

const LeadSection = ({ copy }) => {
  const bodyObj = copy.edges.find(copyChunk => {
    const id = copyChunk.node.childMarkdownRemark.frontmatter.id
    return id === 'weekend_top'
  })

  const body = bodyObj.node.childMarkdownRemark.html

  return (
    <SectionContainer>
      <BodyTextContainer>
        <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
        <ListContainer
          mMarginTop={'20px'}
          tMarginTop={'30px'}
          dMarginTop={'40px'}
          tabletWidth={'100%'}
          desktopWidth={'100%'}
        >
          <ArrowList
            listItems={[
              { text: 'Some workouts focus on balance...' },
              { text: 'Some workouts focus on agility and coordination...' },
              {
                text: 'And yoga focuses on restoring your range of motion...',
              },
              {
                text:
                  'End every week filling in the important fitness gaps most women completely ignore.',
              },
            ]}
          />
        </ListContainer>
      </BodyTextContainer>
      <HeadlineContainer
        mMarginTop={'80px;'}
        tMarginTop={'80px'}
        dMarginTop={'80px'}
      >
        <BaseSubhead
          mobileLineHeight={'1.4'}
          tabletLineHeight={'1.4'}
          desktopLineHeight={'1.4'}
        >
          We Call This Workout
        </BaseSubhead>
        <WeekendRecoveryLogo width={'230px'} />
      </HeadlineContainer>
    </SectionContainer>
  )
}

export default LeadSection
