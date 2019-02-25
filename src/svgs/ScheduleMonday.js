import React, { Component } from 'react'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import '../components/Schedule/Schedule.css'

class ScheduleMonday extends Component {
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
        id="monday"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 200 200"
      >
        <g id="inactive-m">
          <path
            ref={this.setInactiveLetter}
            id="inactive-m-2"
            data-name="inactive-m"
            d="M138.67 146.73l-.14-71.4-35.42 59.5h-6.44L61.25 75.75v71H47.81v-98h11.48l40.88 68.88 40.32-68.88H152l.14 98z"
            fill="#8991ff"
          />
        </g>
        <g id="active-m">
          <path
            ref={this.setActiveLetter}
            id="active-m-2"
            data-name="active-m"
            d="M128.59 146.73l-.28-44.66L107 137.91H92.47l-21.28-34.3v43.12h-30.1v-98h27.16L100.17 101l31.08-52.22h27.16l.28 98z"
            fill="#2ad2e2"
          />
        </g>
      </svg>
    )
  }
}

export default ScheduleMonday
