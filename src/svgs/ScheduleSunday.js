import React, { Component } from 'react'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import '../components/Schedule/Schedule.css'

class ScheduleSunday extends Component {
  constructor(props) {
    super(props)

    this.morphSVG = MorphSVGPlugin
    this.inactiveLetter1 = null
    this.inactiveLetter2 = null
    this.activeLetter1 = null
    this.activeLetter2 = null

    this.setInactiveLetter1 = element => {
      this.inactiveLetter1 = element
    }

    this.setInactiveLetter2 = element => {
      this.inactiveLetter2 = element
    }

    this.setActiveLetter1 = element => {
      this.activeLetter1 = element
    }

    this.setActiveLetter2 = element => {
      this.activeLetter2 = element
    }

    this.tl = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.tl.add(
      TweenMax.to(this.inactiveLetter1, 0.3, {
        morphSVG: this.activeLetter1,
        fill: '#2AD2E2',
      })
    )
    this.tl.add(
      TweenMax.to(this.inactiveLetter2, 0.3, {
        morphSVG: this.activeLetter2,
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
        id="sunday"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 200 200"
      >
        <g id="inactive-su" fill="#8991ff">
          <path
            ref={this.setInactiveLetter1}
            id="inactive-s"
            d="M17.85 135.53L23 124.61C30.31 131.19 42.77 136 55.37 136c16.94 0 24.22-6.58 24.22-15.12 0-23.94-59.36-8.82-59.36-45.22 0-15.12 11.76-28 37.52-28 11.48 0 23.38 3.08 31.5 8.68l-4.62 11.2a50.61 50.61 0 0 0-26.88-8c-16.66 0-23.8 7-23.8 15.54C34 99 93.31 84 93.31 120c0 15-12 27.86-37.94 27.86-14.98-.01-29.68-5.05-37.52-12.33z"
          />
          <path
            ref={this.setInactiveLetter2}
            id="inactive-u"
            d="M181 72.53v74.2h-12.79v-11.2c-5.46 7.7-14.7 12-25.2 12-19.18 0-31.92-10.5-31.92-32.34V72.53h13.44v41.16c0 14.56 7.28 21.84 20 21.84 14 0 23-8.68 23-24.64V72.53z"
          />
        </g>
        <g id="active-su" fill="#2ad2e2">
          <path
            ref={this.setActiveLetter1}
            id="active-s"
            d="M8.93 138.89l10.64-24.08a67.23 67.23 0 0 0 32.34 9c9.38 0 12.74-2 12.74-5.32 0-12.32-54.18-2.38-54.18-38.92 0-18.2 15.26-33 45.64-33 13.16 0 26.74 2.8 37 8.54L83.13 79c-9.66-4.9-18.76-7.28-27.3-7.28-9.66 0-12.74 2.8-12.74 6.16 0 11.76 54.18 2 54.18 38.08 0 17.92-15.26 33-45.64 33-16.38.04-32.9-4.05-42.7-10.07z"
          />
          <path
            ref={this.setActiveLetter2}
            id="active-u"
            d="M189.81 70.15v76.58h-30.1v-7.28c-5.74 5.88-13.44 8.68-21.7 8.68-18.34 0-32.2-10.78-32.2-35.7V70.15h31.64V107c0 10.92 3.78 14.56 9.94 14.56 5.46 0 10.78-4.06 10.78-15.4v-36z"
          />
        </g>
      </svg>
    )
  }
}

export default ScheduleSunday
