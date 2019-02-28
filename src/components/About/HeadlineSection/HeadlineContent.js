import React, { Component } from 'react'
import styled from 'styled-components'

import {
  MagazineH1,
  MagazineH1Filler,
  MagazineSubhead,
} from '../../../styles/Headlines'
import { HeadlineContainer } from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'
import AnimatedScrollArrow from '../../Shared/AnimatedScrollArrow'

class HeadlineContent extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeadlineContainer
          mMarginTop={'20px'}
          tMarginTop={'30px'}
          dMarginTop={'50px'}
          tabletWidth={'90%'}
        >
          <MagazineH1Filler
            mobileLineHeight={'1.4'}
            tabletLineHeight={'1.1'}
            desktopLineHeight={'1.1'}
          >
            We Are
          </MagazineH1Filler>
          <MagazineH1>STRONG</MagazineH1>
          <MagazineSubhead
            thin
            center
            mobileFontSize={'16px'}
            letterSpacing={'1px'}
            mobileLineHeight={'1.5'}
            tabletLineHeight={'1.3'}
            desktopLineHeight={'1.5'}
          >
            Ready to burn fat… get strong… and build the healthy lifestyle
            you’ve always wanted?
          </MagazineSubhead>
        </HeadlineContainer>
        <AnimatedScrollArrow />
        <MainButton to={'/specials'}>See Our Specials</MainButton>
      </HeaderContainer>
    )
  }
}

export default HeadlineContent

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 30px;
`
