import React from 'react'
import styled from 'styled-components'

import {
  BodyTextContainer,
  ListContainer,
  SectionContainer,
  HeadlineContainer,
} from '../../../styles/Containers'
import { BodyText } from '../../../styles/BodyText'
import ArrowList from '../../Shared/ArrowList'
import { BaseSubhead } from '../../../styles/Headlines'
import BodyBurnLogo from '../../../svgs/BodyBurnLogo'

const LeadSection = () => {
  return (
    <SectionContainer>
      <BodyTextContainer marginTop={'40px'}>
        <BodyText>
          Functional strength training maximizes cardio during a workout to burn
          calories… <br />
          <br />
          ...but it’s focus is on strength so you build lean muscle mass while
          melting inches from your body at the same time.
        </BodyText>
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
      <HeadlineContainer mobile={'40px;'}>
        <BaseSubhead mobileLineHeight={'1.4'}>We Call This Workout</BaseSubhead>
        <BodyBurnLogo width={'280px'} />
      </HeadlineContainer>
    </SectionContainer>
  )
}

export default LeadSection
