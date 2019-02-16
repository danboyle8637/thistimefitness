import React, { Component } from 'react'
import styled from 'styled-components'
import TimelineMax from 'gsap/TimelineMax'
import TweenMax, { Power3, Power2 } from 'gsap/TweenMax'

import {
  MagazineH1,
  MagazineH1Filler,
  MagazineSubhead,
} from '../../../styles/Headlines'
import { HeadlineContainer } from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'
import FaqArrow from '../../../svgs/FaqArrow'
import { above } from '../../../styles/Theme'

class HeadlineContent extends Component {
  constructor(props) {
    super(props)

    this.arrow = null

    this.setArrowRef = element => {
      this.arrow = element
    }

    this.scrollArrowTimeline = new TimelineMax({ paused: true, repeat: -1 })
  }

  componentDidMount() {
    this.scrollArrowTimeline.add(
      TweenMax.to(this.arrow, 0.5, {
        startAt: { y: '-40px', opacity: 0 },
      })
    )
    this.scrollArrowTimeline.add(
      TweenMax.to(this.arrow, 0.5, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      })
    )
    this.scrollArrowTimeline.add(
      TweenMax.to(this.arrow, 0.5, {
        y: '20px',
        opacity: 0,
        ease: Power2.easeOut,
      })
    )

    this.scrollArrowTimeline.play()
  }

  componentWillUnmount() {
    this.scrollArrowTimeline.stop()
  }

  render() {
    return (
      <HeaderContainer>
        <HeadlineContainer
          mMarginTop={'20px'}
          tMarginTop={'30px'}
          dMarginTop={'50px'}
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
            fontSize={'16px'}
            letterSpacing={'1px'}
            mobileLineHeight={'1.5'}
            tabletLineHeight={'1.3'}
            desktopLineHeight={'1.5'}
          >
            Ready to burn fat… get strong… and build the healthy lifestyle
            you’ve always wanted?
          </MagazineSubhead>
        </HeadlineContainer>
        <ArrowWrapper ref={this.setArrowRef}>
          <FaqArrow strokeWidth={'10px'} />
        </ArrowWrapper>
        <MainButton purple>See Our Specials</MainButton>
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

const ArrowWrapper = styled.div`
  position: absolute;
  width: 30px;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
`
