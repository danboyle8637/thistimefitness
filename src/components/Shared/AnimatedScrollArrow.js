import React, { Component } from 'react'
import styled from 'styled-components'
import TimelineMax from 'gsap/TimelineMax'
import TweenMax, { Power3, Power2 } from 'gsap/TweenMax'

import FaqArrow from '../../svgs/FaqArrow'

class AnimatedScrollArrow extends Component {
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
      <ArrowWrapper ref={this.setArrowRef}>
        <FaqArrow strokeWidth={'10px'} />
      </ArrowWrapper>
    )
  }
}

export default AnimatedScrollArrow

const ArrowWrapper = styled.div`
  position: absolute;
  width: 30px;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
`
