import React, { Component } from 'react'
import { TweenMax } from 'gsap/TweenMax'

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
  }

  componentDidMount() {}

  render() {
    return (
      <svg
        id="scroll-indicator"
        xmlns="http://www.w3.org/2000/svg"
        className={this.props.className}
        width="97.79"
        height="30.79"
        viewBox="0 0 97.79 30.79"
      >
        <circle cx="48.9" cy="15.4" r="13.53" fill="#d7daff" id="center-dot" />
        <path
          ref={this.rightArrow}
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
