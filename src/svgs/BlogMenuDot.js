import React, { Component } from 'react'
import TweenMax, { Power2 } from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import MenuOpenContext from '../context/MenuOpenContext'
import '../components/Blog/blog-post.css'

class BlogMenuDot extends Component {
  static contextType = MenuOpenContext

  constructor(props) {
    super(props)

    this.morphSVG = MorphSVGPlugin
    this.leftX = null
    this.rightX = null
    this.solidDot = null
    this.pulseDot = null

    this.setLeftXRef = element => {
      this.leftX = element
    }

    this.setRightXRef = element => {
      this.rightX = element
    }

    this.setSolidDotRef = element => {
      this.solidDot = element
    }

    this.setPulseDotRef = element => {
      this.pulseDot = element
    }

    this.tl = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    TweenMax.to(this.pulseDot, 0.8, {
      transformOrigin: '50% 50%',
      scale: 1.5,
      repeat: -1,
      ease: Power2.easeInOut,
      yoyo: true,
    })

    this.tl.add(
      TweenMax.to(this.pulseDot, 0.2, {
        opacity: 0,
      })
    )
    this.tl.add(
      TweenMax.to(this.solidDot, 0.2, {
        morphSVG: this.rightX,
        stroke: '#b44cff',
      })
    )
    this.tl.add(
      TweenMax.from(this.leftX, 0.2, {
        x: -20,
        y: -20,
        opacity: 0,
      })
    )
  }

  render() {
    const { width, height, className } = this.props

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 174.12 174.12"
      >
        <title>Blog Menu Icon</title>
        <g id="blog-menu-dot">
          <polyline
            ref={this.setRightXRef}
            id="blog-right-cross"
            points="12.72 161.4 76.87 97.25 161.4 12.72"
            fill="#fff"
            stroke="#b44cff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="25.44"
          />
          <polyline
            ref={this.setLeftXRef}
            id="blog-left-cross"
            points="161.4 161.4 97.25 97.25 12.72 12.72"
            fill="#fff"
            stroke="#b44cff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="25.44"
          />
        </g>
        <g id="menu-dot">
          <g id="pulse-dot" opacity="0.37">
            <circle
              ref={this.setPulseDotRef}
              cx="86.9"
              cy="86.9"
              r="38.5"
              fill="#5afdf2"
            />
          </g>
          <path
            ref={this.setSolidDotRef}
            d="M138,100.5A37.5,37.5,0,1,1,100.5,63,37.5,37.5,0,0,1,138,100.5Z"
            transform="translate(-13.6 -13.6)"
            fill="#5afdf2"
          />
        </g>
      </svg>
    )
  }
}

export default BlogMenuDot
