import React, { Component } from 'react'
import TweenMax, { Power2 } from 'gsap/TweenMax'

class AnimatedEmail extends Component {
  constructor(props) {
    super(props)

    this.emailIcon = null
    this.emailStroke = null

    this.setEmailIcon = element => {
      this.emailIcon = element
    }

    this.setEmailStroke = element => {
      this.emailStroke = element
    }
  }

  handleMouseEnter = () => {
    TweenMax.to(this.emailIcon, 0.3, {
      scale: '1.08',
      rotation: '8deg',
      ease: Power2.easeOut,
    })
    TweenMax.to(this.emailStroke, 0.3, {
      stroke: '#B44CFF',
    })
  }

  handleMouseLeave = () => {
    TweenMax.to(this.emailIcon, 0.3, {
      scale: '1',
      rotation: '0',
      ease: Power2.easeIn,
    })
    TweenMax.to(this.emailStroke, 0.3, {
      stroke: '#5afdf2',
    })
  }

  handleMouseUp = () => {
    TweenMax.to(this.emailIcon, 0.3, {
      scale: '1',
      rotation: '0',
      ease: Power2.easeIn,
    })
    TweenMax.to(this.emailStroke, 0.3, {
      stroke: '#5afdf2',
    })
  }

  render() {
    const { width, height, className } = this.props

    return (
      <svg
        ref={this.setEmailIcon}
        id="email-icon"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 220.95 143.32"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
      >
        <title>Email Me Icon</title>
        <path
          ref={this.setEmailStroke}
          id="envelope"
          d="M215.47 22.99v97.33a17.53 17.53 0 0 1-17.52 17.52h-175a17.55 17.55 0 0 1-17.48-17.52V22.99a17.43 17.43 0 0 1 6.18-13.34l65.91 63.92 28.17 27.33a6.81 6.81 0 0 0 9.48 0l28.33-27.43L209.29 9.7a17.43 17.43 0 0 1 6.18 13.29zm-6.18-13.34a17.37 17.37 0 0 0-11.34-4.18h-175a17.37 17.37 0 0 0-11.34 4.18m195.86 125.2l-64-61.43m-129 61.43L77.6 73.57"
          fill="none"
          stroke="#5afdf2"
          strokeLinejoin="bevel"
          strokeWidth="10.95"
        />
      </svg>
    )
  }
}

export default AnimatedEmail
