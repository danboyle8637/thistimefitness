import React, { Component } from 'react'
import TweenMax from 'gsap/TweenMax'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import Quotes from './Quotes'
import ArrowList from '../../Shared/ArrowList'
import {
  SectionContainer,
  HeadlineContainer,
  BodyTextContainer,
  ButtonContainer,
  ListContainer,
} from '../../../styles/Containers'
import { BodyText } from '../../../styles/BodyText'
import { BaseSubhead, SpecialSubhead } from '../../../styles/Headlines'
import { SiteButton } from '../../../styles/Buttons'
import TTFLogoShort from '../../../svgs/TTFLogoShort'

class LeadSection extends Component {
  constructor(props) {
    super(props)

    this.scrollTo = ScrollToPlugin
  }

  handlePageScroll = () => {
    if (typeof window !== undefined) {
      TweenMax.to(window, 1.5, { scrollTo: '#take-the-quiz' })
    }
  }

  render() {
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
          <BodyTextContainer
            mMarginTop={'80px'}
            tMarginTop={'80px'}
            dMarginTop={'80px'}
          >
            <BodyText>
              I created This Time Fitness for women who want more than a generic
              workout.
            </BodyText>
            <BodyText marginTop={'30px'}>Women who want...</BodyText>
            <ListContainer
              mMarginTop={'20px'}
              tMarginTop={'20px'}
              dMarginTop={'20px'}
            >
              <ArrowList
                listItems={[
                  { text: 'Personalized training...' },
                  { text: 'One-on-one support…' },
                  { text: 'Real community...' },
                  { text: 'Results that last!' },
                ]}
              />
            </ListContainer>
          </BodyTextContainer>
          <HeadlineContainer
            mMarginTop={'80px'}
            tMarginTop={'80px'}
            dMarginTop={'80px'}
          >
            <BaseSubhead
              moveMobileX={'-50px'}
              moveTabletX={'-50px'}
              moveDesktopX={'-50px'}
            >
              This Time
            </BaseSubhead>
            <BaseSubhead
              moveMobileX={'10px'}
              moveTabletX={'10px'}
              moveDesktopX={'10px'}
              mobileLineHeight={'1.4'}
              tabletLineHeight={'1.4'}
              desktopLineHeight={'1.6'}
            >
              You Found It!
            </BaseSubhead>
          </HeadlineContainer>
          <HeadlineContainer
            mMarginTop={'80px'}
            tMarginTop={'80px'}
            dMarginTop={'80px'}
          >
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
          <ButtonContainer
            mMarginTop={'40px'}
            tMarginTop={'40px'}
            dMarginTop={'60px'}
          >
            <SiteButton onClick={this.handlePageScroll}>
              Click to Sign Up
            </SiteButton>
          </ButtonContainer>
        </SectionContainer>
      </>
    )
  }
}

export default LeadSection
