import React, { Component } from 'react'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import '../components/Schedule/Schedule.css'

class ScheduleSaturday extends Component {
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
        id="saturday"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 200 200"
      >
        <g id="inactive-s">
          <path
            ref={this.setInactiveLetter}
            id="inactive-s-2"
            data-name="inactive-s"
            d="M63.85 135.53L69 124.61c7.31 6.58 19.77 11.39 32.37 11.39 16.94 0 24.22-6.58 24.22-15.12 0-23.94-59.36-8.82-59.36-45.22 0-15.12 11.76-28 37.52-28 11.48 0 23.38 3.08 31.5 8.68l-4.62 11.2a50.61 50.61 0 0 0-26.88-8c-16.66 0-23.8 7-23.8 15.54C80 99 139.31 84 139.31 120c0 15-12 27.86-37.94 27.86-14.98-.01-29.68-5.05-37.52-12.33z"
            fill="#8991ff"
          />
        </g>
        <g id="active-s">
          <path
            ref={this.setActiveLetter}
            d="M59.93 138.89l10.64-24.08a67.23 67.23 0 0 0 32.34 9c9.38 0 12.74-2 12.74-5.32 0-12.32-54.18-2.38-54.18-38.92 0-18.2 15.26-33 45.64-33 13.16 0 26.74 2.8 37 8.54L134.13 79c-9.66-4.9-18.76-7.28-27.3-7.28-9.66 0-12.74 2.8-12.74 6.16 0 11.76 54.18 2 54.18 38.08 0 17.92-15.26 33-45.64 33-16.38.04-32.9-4.05-42.7-10.07z"
            fill="#2ad2e2"
          />
        </g>
      </svg>
    )
  }
}

export default ScheduleSaturday
