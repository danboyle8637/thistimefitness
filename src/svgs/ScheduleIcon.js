import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import MenuOpenContext from '../context/MenuOpenContext'
import '../components/Nav/MainMenu.css'

class ScheduleIcon extends Component {
  static contextType = MenuOpenContext

  constructor(props) {
    super(props)

    this.morphSVG = MorphSVGPlugin
    this.rightCloseMenuBar = null
    this.leftCloseMenuBar = null
    this.leftCalendarHook = null
    this.rightCalendarHook = null
    this.calendar = []

    this.setLeftCloseMenuRef = element => {
      this.leftCloseMenuBar = element
    }

    this.setRightCloseMenuRef = element => {
      this.rightCloseMenuBar = element
    }

    this.setLeftCalendarHook = element => {
      this.leftCalendarHook = element
    }

    this.setRightCalendarHook = element => {
      this.rightCalendarHook = element
    }

    this.setCalendarRef = element => {
      this.calendar.push(element)
    }

    this.tl = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.tl.add(
      TweenMax.to(this.calendar, 0.2, {
        y: '20px',
        opacity: 0,
      })
    )
    this.tl.add(
      TweenMax.to(this.leftCalendarHook, 0.2, {
        morphSVG: this.leftCloseMenuBar,
        stroke: '#b44cff',
        strokeWidth: '30',
      })
    )
    this.tl.add(
      TweenMax.to(this.rightCalendarHook, 0.2, {
        morphSVG: this.rightCloseMenuBar,
        stroke: '#b44cff',
        strokeWidth: '30',
      })
    )
    this.tl.add(
      TweenMax.to([this.leftCalendarHook, this.rightCalendarHook], 0.3, {
        transformOrigin: '50% 50%',
        rotation: 360,
      })
    )

    this.tl.pause()
  }

  componentDidUpdate() {
    if (this.context.scheduleOpen) {
      this.tl.play()
    }

    if (!this.context.scheduleOpen) {
      this.tl.reverse()
    }
  }

  render() {
    const { width, height, className } = this.props

    this.tl.pause()

    return (
      <Transition
        in={this.context.menuOpen || this.context.scheduleOpen}
        timeout={5000}
        addEndListener={(node, done) => {
          if (this.context.menuOpen || this.context.scheduleOpen) {
            TweenMax.to(node, 0.3, {
              rotation: '-90',
              onComplete: done,
            })
          } else {
            TweenMax.to(node, 0.3, {
              rotation: '0',
              delay: 0.3,
              onComplete: done,
            })
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width={width}
          height={height}
          viewBox="0 0 279.27 260.54"
        >
          <g
            id="close-calendar"
            fill="#fff"
            stroke="#b44cff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="30"
          >
            <path
              ref={this.setRightCloseMenuRef}
              id="right-cross"
              d="M52.12 234.43l75.66-75.66 99.7-99.7"
            />
            <path
              ref={this.setLeftCloseMenuRef}
              id="left-cross"
              d="M227.48 234.43l-75.66-75.66-99.7-99.7"
            />
          </g>
          <g id="calendar-icon">
            <path
              ref={this.setCalendarRef}
              id="calendar"
              d="M266.37 39.36h-19.59v16.71A17.94 17.94 0 0 1 228.84 74a17.94 17.94 0 0 1-17.94-17.93V39.36H89.18v16.71a17.94 17.94 0 0 1-35.88 0V39.36H33.62a23.26 23.26 0 0 0-23.25 23.26V248a23.26 23.26 0 0 0 23.25 23.26h232.75A23.26 23.26 0 0 0 289.63 248V62.62a23.26 23.26 0 0 0-23.26-23.26zm6.25 207.94a6.56 6.56 0 0 1-6.56 6.56H34.26a6.56 6.56 0 0 1-6.55-6.56V98.49a6.56 6.56 0 0 1 6.55-6.56h231.8a6.56 6.56 0 0 1 6.56 6.56z"
              transform="translate(-10.37 -10.71)"
              fill="#d7daff"
            />
            <g id="day-grid">
              <rect
                ref={this.setCalendarRef}
                id="day-block"
                x="91.78"
                y="98.55"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-2"
                data-name="day-block"
                x="148.64"
                y="98.55"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-3"
                data-name="day-block"
                x="205.51"
                y="98.55"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-4"
                data-name="day-block"
                x="34.42"
                y="146.75"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-5"
                data-name="day-block"
                x="91.45"
                y="146.75"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-6"
                data-name="day-block"
                x="148.48"
                y="146.75"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#b44cff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-7"
                data-name="day-block"
                x="205.51"
                y="146.75"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-8"
                data-name="day-block"
                x="34.42"
                y="195.24"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-9"
                data-name="day-block"
                x="91.45"
                y="195.24"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
              <rect
                ref={this.setCalendarRef}
                id="day-block-10"
                data-name="day-block"
                x="148.48"
                y="195.24"
                width="39.24"
                height="30.65"
                rx="4.23"
                fill="#d7daff"
              />
            </g>
            <path
              ref={this.setRightCalendarHook}
              id="right-hook"
              fill="none"
              stroke="#d7daff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="21.05"
              d="M61.17 10.53v34.29"
            />
            <path
              ref={this.setLeftCalendarHook}
              id="left-hook"
              fill="none"
              stroke="#d7daff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="21.05"
              d="M218.38 10.53v34.29"
            />
          </g>
        </svg>
      </Transition>
    )
  }
}

export default ScheduleIcon
