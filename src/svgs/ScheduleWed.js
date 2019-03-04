import React, { Component } from 'react'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import '../components/Schedule/Schedule.css'

class ScheduleWed extends Component {
  constructor(props) {
    super(props)

    this.morphSVG = MorphSVGPlugin
    this.inactiveLetter = null
    this.activeLetter = null

    this.setInactiveLetter = element => {
      this.inactiveLetter = element
    }

    this.setActiveLetter = element => {
      this.activeLetter = element
    }

    this.tl = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.tl.add(
      TweenMax.to(this.inactiveLetter, 0.3, {
        morphSVG: this.activeLetter,
        fill: '#2AD2E2',
      })
    )
  }

  componentDidUpdate() {
    if (this.props.active) {
      this.tl.play()
    }

    if (!this.props.active) {
      this.tl.reverse()
    }
  }

  render() {
    const { width, height, className } = this.props

    return (
      <svg
        id="wednesday"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 200 200"
      >
        <title>Wednesday Icon</title>
        <g id="inactive-w">
          <path
            ref={this.setInactiveLetter}
            id="inactive-w-2"
            data-name="inactive-w"
            d="M174.27 48.73l-32.76 98h-14.7l-26.74-78.26-26.74 78.26h-15l-32.76-98H40l26.46 79.66 27.59-79.66h12.88l27 80.08 27-80.08z"
            fill="#8991ff"
          />
        </g>
        <g id="active-w">
          <path
            ref={this.setActiveLetter}
            id="active-w-2"
            data-name="active-w"
            d="M182.55 48.73l-31.36 98h-35.42L100 94.38l-16.71 52.35H47.87l-31.36-98h34l17.08 55.72 18.08-55.72h30.38l17.08 56.42 18.06-56.42z"
            fill="#2ad2e2"
          />
        </g>
      </svg>
    )
  }
}

export default ScheduleWed
