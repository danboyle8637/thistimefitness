import React from 'react'

import Quotes from './Quotes'
import ArrowList from '../../Shared/ArrowList'
import {
  SectionContainer,
  HeadlineContainer,
  BodyTextContainer,
  ButtonContainer,
} from '../../../styles/Containers'
import { BodyText } from '../../../styles/BodyText'
import { BaseSubhead, SpecialSubhead } from '../../../styles/Headlines'
import { MainButton } from '../../../styles/Buttons'
import TTFLogoShort from '../../../svgs/TTFLogoShort'

const LeadSection = () => {
  return (
    <>
      <Quotes />
      <SectionContainer>
        <HeadlineContainer>
          <SpecialSubhead
            moveMobileX={'16px'}
            moveTabletX={'14px'}
            moveDesktopX={'14px'}
          >
            Where On The
          </SpecialSubhead>
          <SpecialSubhead
            big
            moveMobileX={'-15px'}
            mobileLineHeight={'1.2'}
            tabletLineHeight={'1.2'}
            desktopLineHeight={'1.2'}
          >
            Spectrum
          </SpecialSubhead>
          <SpecialSubhead
            moveMobileX={'20px'}
            moveTabletX={'40px'}
            moveDesktopX={'40px'}
            mobileLineHeight={'1.1'}
          >
            Do You Fall?
          </SpecialSubhead>
        </HeadlineContainer>
        <BodyTextContainer mobile={'80px'}>
          <BodyText>
            I created This Time Fitness for women who want more than a generic
            workout.
          </BodyText>
          <BodyText>Women who want...</BodyText>
          <ArrowList
            listItems={[
              { text: 'Personalized training...' },
              { text: 'Custom support…' },
              { text: 'Real community...' },
              { text: 'Results that last!' },
            ]}
          />
        </BodyTextContainer>
        <HeadlineContainer mobile={'80px'}>
          <BaseSubhead moveMobileX={'-50px'} moveTabletX={'-50px'}>
            This Time
          </BaseSubhead>
          <BaseSubhead
            moveMobileX={'10px'}
            moveTabletX={'10px'}
            mobileLineHeight={'1.4'}
            tabletLineHeight={'1.4'}
            desktopLineHeight={'1.6'}
          >
            You Found It!
          </BaseSubhead>
        </HeadlineContainer>
        <HeadlineContainer mobile={'80px'}>
          <BaseSubhead
            mobileLineHeight={'1.8'}
            tabletLineHeight={'1.8'}
            desktopLineHeight={'2'}
          >
            Come try unlimited
          </BaseSubhead>
          <TTFLogoShort width={'270px'} />
          <BaseSubhead
            mobileLineHeight={'1.8'}
            tabletLineHeight={'1.8'}
            desktopLineHeight={'2'}
          >
            workouts for the
          </BaseSubhead>
          <BaseSubhead>next 14 days!</BaseSubhead>
        </HeadlineContainer>
        <ButtonContainer mobile={'40px'}>
          <MainButton purple>Click to Sign Up</MainButton>
        </ButtonContainer>
      </SectionContainer>
    </>
  )
}

export default LeadSection
