import React, { Component } from 'react'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import '../components/Schedule/Schedule.css'

class ScheduleThursday extends Component {
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
        id="thursday"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 200 200"
      >
        <title>Thursday Icon</title>
        <g id="inactive-th" fill="#8991ff">
          <path
            ref={this.setInactiveLetter1}
            id="inactive-t"
            d="M46.27 60.91h-33.6V48.73h81.06v12.18h-33.6v85.82H46.27z"
          />
          <path
            ref={this.setInactiveLetter2}
            id="inactive-h"
            d="M177.45 104v42.7H164v-41.13c0-14.56-7.28-21.7-20-21.7-14.28 0-23.52 8.54-23.52 24.64v38.22H107V42.85h13.44V83c5.6-7.14 14.84-11.2 26.18-11.2 18.09.03 30.83 10.39 30.83 32.2z"
          />
        </g>
        <g id="active-th" fill="#2ad2e2">
          <path
            ref={this.setActiveLetter1}
            id="active-t"
            d="M37.37 74.35H8.67V48.73h90.44v25.62h-28.7v72.38h-33z"
          />
          <path
            ref={this.setActiveLetter2}
            id="active-h"
            d="M191.23 103.05v43.68h-31.64v-38.22c0-9.52-3.64-13.16-9.38-13.16-6.44 0-11.9 4.07-11.9 15.4v36h-31.64V42.85h31.64v33.46a32.42 32.42 0 0 1 21.56-7.56c17.64 0 31.36 10.25 31.36 34.3z"
          />
        </g>
      </svg>
    )
  }
}

export default ScheduleThursday
