import React, { Component } from 'react'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import '../components/Schedule/Schedule.css'

class ScheduleFriday extends Component {
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
        id="friday"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 200 200"
      >
        <title>Friday Icon</title>
        <g id="inactive-f">
          <path
            ref={this.setInactiveLetter}
            id="inactive-f-2"
            data-name="inactive-f"
            d="M81.81 60.91v34.16H131v12H81.81v39.62h-14v-98H137v12.22z"
            fill="#8991ff"
          />
        </g>
        <g id="active-f">
          <path
            ref={this.setActiveLetter}
            id="active-f-2"
            data-name="active-f"
            d="M94.13 73.65v16.8H135v24.93H94.13v31.35h-33v-98h79.66v24.92z"
            fill="#2ad2e2"
          />
        </g>
      </svg>
    )
  }
}

export default ScheduleFriday
