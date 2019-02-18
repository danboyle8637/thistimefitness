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
import Need4SpeedLogo from '../../../svgs/Need4SpeedLogo'

const LeadSection = ({ copy }) => {
  const bodyObj = copy.edges.find(copyChunk => {
    const id = copyChunk.node.childMarkdownRemark.frontmatter.id
    return id === 'need_for_speed_top'
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
              { text: 'Some workouts you’ll run through drills.' },
              { text: 'Some workouts you’ll complete longer runs.' },
              {
                text:
                  'But every week you’ll move closer to completing your first 5k… 10k… half marathon… or longer!',
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
          mobileLineHeight={'1.6'}
          tabletLineHeight={'1.6'}
          desktopLineHeight={'1.6'}
        >
          We Call This Workout
        </BaseSubhead>
        <Need4SpeedLogo width={'280px'} />
      </HeadlineContainer>
    </SectionContainer>
  )
}

export default LeadSection
