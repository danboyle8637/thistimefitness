import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Quotes from './Quotes'
import ArrowList from '../../Shared/ArrowList'
import { BodyText, BodyTextContainer } from '../../../styles/BodyText'
import {
  HeadlineContainer,
  Heading3,
  Heading2Small,
} from '../../../styles/Headlines'
import { SiteButton } from '../../../styles/Buttons'
import TTFLogoShort from '../../../svgs/TTFLogoShort'
import { Desktop900 } from '../../../styles/Layouts'
import { above } from '../../../styles/Theme'

const LeadSection = () => {
  return (
    <SectionContainer>
      <Desktop900>
        <Quotes />
        <HeadlineContainer>
          <Heading3
            moveMobileX={'0px'}
            moveTabletX={'40px'}
            moveDesktopX={'30px'}
          >
            Where On The
          </Heading3>
          <Heading2Small
            moveMobileX={'-15px'}
            tabletLineHeight={'1.1'}
            desktopLineHeight={'1.2'}
          >
            Spectrum
          </Heading2Small>
          <Heading3
            moveMobileX={'6px'}
            moveTabletX={'60px'}
            moveDesktopX={'30px'}
            mobileLineHeight={'1.4'}
            desktopLineHeight={'1.2'}
          >
            Do You Fall?
          </Heading3>
        </HeadlineContainer>
        <BodyTextContainer left>
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
        <HeadlineContainer>
          <Heading3 moveMobileX={'-50px'} moveTabletX={'-50px'}>
            This Time
          </Heading3>
          <Heading3
            moveMobileX={'10px'}
            moveTabletX={'10px'}
            mobileLineHeight={'1.4'}
            tabletLineHeight={'1.4'}
            desktopLineHeight={'1.6'}
          >
            You Found It!
          </Heading3>
        </HeadlineContainer>
        <HeadlineContainer>
          <Heading3
            mobileLineHeight={'1.8'}
            tabletLineHeight={'1.8'}
            desktopLineHeight={'2'}
          >
            Come try unlimited
          </Heading3>
          <TTFLogoShort width={'270px'} />
          <Heading3
            mobileLineHeight={'1.8'}
            tabletLineHeight={'1.8'}
            desktopLineHeight={'2'}
          >
            workouts for the
          </Heading3>
          <Heading3>next 14 days!</Heading3>
        </HeadlineContainer>
        <SiteButton purple>Click to Sign Up</SiteButton>
      </Desktop900>
    </SectionContainer>
  )
}

export default LeadSection

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
`
