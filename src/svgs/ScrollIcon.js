import React, { Component } from 'react'
import { TweenMax } from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'

class ScrollIcon extends Component {
  constructor(props) {
    super(props)

    this.leftArrow = null
    this.rightArrow = null

    this.setLeftArrowRef = element => {
      this.leftArrow = element
    }

    this.setRightArrowRef = element => {
      this.rightArrow = element
    }

    this.leftTimeLine = new TimelineLite({ paused: true })
    this.rightTimeLine = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.leftTimeLine.add(
      TweenMax.fromTo(
        this.leftArrow,
        1,
        {
          x: '16px',
          repeat: -1,
          yoyo: true,
          stroke: '#b44cff',
        },
        { x: '-1.5px', repeat: -1, yoyo: true, stroke: '#D7DAFF' }
      )
    )

    this.rightTimeLine.add(
      TweenMax.fromTo(
        this.rightArrow,
        1,
        {
          x: '-16px',
          repeat: -1,
          yoyo: true,
          stroke: '#b44cff',
        },
        { x: '1.5px', repeat: -1, yoyo: true, stroke: '#D7DAFF' }
      )
    )

    this.leftTimeLine.pause()
    this.rightTimeLine.pause()
  }

  render() {
    const { width, height, className } = this.props

    if (this.leftArrow && this.rightArrow) {
      this.leftTimeLine.play()
      this.rightTimeLine.play()
    }

    return (
      <svg
        id="scroll-indicator"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 97.79 30.79"
      >
        <circle cx="48.9" cy="15.4" r="13.53" fill="#d7daff" id="center-dot" />
        <path
          ref={this.setRightArrowRef}
          id="right-arrow"
          fill="none"
          stroke="#d7daff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          d="M82.39 2.5l12.9 12.89-12.9 12.9"
        />
        <path
          ref={this.setLeftArrowRef}
          id="left-arrow"
          fill="none"
          stroke="#d7daff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          d="M15.39 28.29L2.5 15.39 15.39 2.5"
        />
      </svg>
    )
  }
}

export default ScrollIcon
