import React, { Component } from 'react'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import '../components/Schedule/Schedule.css'

class ScheduleTuesday extends Component {
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
        id="tuesday"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 200 200"
      >
        <title>Tuesday Icon</title>
        <g id="inactive-tu" fill="#8991ff">
          <path
            ref={this.setInactiveLetter1}
            id="inactive-t"
            d="M52.27 60.91h-33.6V48.73h81.06v12.18h-33.6v85.82H52.27z"
          />
          <path
            ref={this.setInactiveLetter2}
            id="inactive-u"
            d="M180.37 72.53v74.2h-12.74v-11.2c-5.46 7.7-14.7 12-25.2 12-19.18 0-31.92-10.5-31.92-32.34V72.53H124v41.16c0 14.56 7.28 21.84 20 21.84 14 0 23-8.68 23-24.64V72.53z"
          />
        </g>
        <g id="active-tu" fill="#2ad2e2">
          <path
            ref={this.setActiveLetter1}
            id="active-t"
            d="M46 67.21H14.67V48.73h85.4v18.48H68.71v79.52H46z"
          />
          <path
            ref={this.setActiveLetter2}
            id="active-u"
            d="M184.91 71.41v75.32h-20.72v-9c-5.74 6.58-14.14 10.08-23.38 10.08-18.9 0-32.2-10.64-32.2-33.88V71.41h21.84v39.34c0 12.6 5.6 18.2 15.26 18.2 10.08 0 17.36-6.44 17.36-20.3V71.41z"
          />
        </g>
      </svg>
    )
  }
}

export default ScheduleTuesday
