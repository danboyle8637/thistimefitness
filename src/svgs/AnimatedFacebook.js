import React, { Component } from 'react'
import TweenMax, { Power2 } from 'gsap/TweenMax'

class AnimatedFacebook extends Component {
  constructor(props) {
    super(props)

    this.facebookIcon = null
    this.facebookStroke = null

    this.setFacebookIcon = element => {
      this.facebookIcon = element
    }

    this.setFacebookStroke = element => {
      this.facebookStroke = element
    }
  }

  handleMouseEnter = () => {
    TweenMax.to(this.facebookIcon, 0.3, {
      scale: '1.08',
      rotation: '8deg',
      ease: Power2.easeOut,
    })
    TweenMax.to(this.facebookStroke, 0.3, {
      stroke: '#B44CFF',
    })
  }

  handleMouseLeave = () => {
    TweenMax.to(this.facebookIcon, 0.3, {
      scale: '1',
      rotation: '0',
      ease: Power2.easeIn,
    })
    TweenMax.to(this.facebookStroke, 0.3, {
      stroke: '#5afdf2',
    })
  }

  render() {
    const { width, height, className } = this.props

    return (
      <svg
        ref={this.setFacebookIcon}
        id="facebook-icon"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 220.09 220.09"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <path
          ref={this.setFacebookStroke}
          id="icon"
          d="M176.24 5.04H43.84a38.8 38.8 0 0 0-38.8 38.8v132.4a38.8 38.8 0 0 0 38.8 38.8h71.14v-91.7h-12.73V95.83h12.79v-22c0-9.17 4.66-17.92 14.68-22.93 9.17-4.58 42.18 1.84 42.18 1.84v22h-19.22a7.13 7.13 0 0 0-4.58 1.84c-1.84 1.83-1.84 3-1.84 5.5v13.76h25.68l-4.59 27.51h-21.48v91.69h30.37a38.8 38.8 0 0 0 38.8-38.8V43.84a38.8 38.8 0 0 0-38.8-38.8z"
          fill="none"
          stroke="#5afdf2"
          strokeMiterlimit="10"
          strokeWidth="10.09"
        />
      </svg>
    )
  }
}

export default AnimatedFacebook
