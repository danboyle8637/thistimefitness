import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import TweenMax from 'gsap/TweenMax'
import TimelineLite from 'gsap/TimelineLite'
import MorphSVGPlugin from '../greensockplugins/MorphSVGPlugin'

import MenuOpenContext from '../context/MenuOpenContext'
import '../components/Nav/MainMenu.css'

class MainMenuIcon extends Component {
  static contextType = MenuOpenContext

  constructor(props) {
    super(props)

    this.morphSVG = MorphSVGPlugin
    this.rightCloseMenuBar = null
    this.leftCloseMenuBar = null
    this.topOpenMenuBar = null
    this.middleOpenMenuBar = null
    this.bottomOpenMenuBar = null

    this.setLeftCloseMenuRef = element => {
      this.leftCloseMenuBar = element
    }

    this.setRightCloseMenuRef = element => {
      this.rightCloseMenuBar = element
    }

    this.setTopOpenMenuRef = element => {
      this.topOpenMenuBar = element
    }

    this.setMiddleOpenMenuRef = element => {
      this.middleOpenMenuBar = element
    }

    this.setBottomOpenMenuRef = element => {
      this.bottomOpenMenuBar = element
    }

    this.tl = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.tl.add(
      TweenMax.to(this.middleOpenMenuBar, 0.2, {
        y: '20px',
        opacity: 0,
      })
    )
    this.tl.add(
      TweenMax.to(this.topOpenMenuBar, 0.2, {
        morphSVG: this.leftCloseMenuBar,
        stroke: '#b44cff',
      })
    )
    this.tl.add(
      TweenMax.to(this.bottomOpenMenuBar, 0.2, {
        morphSVG: this.rightCloseMenuBar,
        stroke: '#b44cff',
      })
    )
    this.tl.add(
      TweenMax.to([this.bottomOpenMenuBar, this.topOpenMenuBar], 0.3, {
        transformOrigin: '50% 50%',
        rotation: 360,
      })
    )

    this.tl.pause()
  }

  componentDidUpdate() {
    if (this.context.menuOpen) {
      this.tl.play()
    }

    if (!this.context.menuOpen) {
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
          viewBox="0 0 278.5 205.36"
        >
          <g
            id="close-menu-icon"
            fill="#fff"
            stroke="#b44cff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="30"
          >
            <path
              ref={this.setRightCloseMenuRef}
              id="right-cross"
              d="M51.82 190.36l75.66-75.66 99.7-99.7"
            />
            <path
              ref={this.setLeftCloseMenuRef}
              id="left-cross"
              d="M227.18 190.36l-75.66-75.66L51.82 15"
            />
          </g>
          <g
            id="menu-icon"
            fill="#fff"
            stroke="#d7daff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="30"
          >
            <path
              ref={this.setTopOpenMenuRef}
              id="top-menu-bar"
              d="M15 28.18h248"
            />
            <path
              ref={this.setMiddleOpenMenuRef}
              id="middle-menu-bar"
              d="M102.5 100.74h161"
            />
            <path
              ref={this.setBottomOpenMenuRef}
              id="bottom-menu-bar"
              d="M53.5 173.3h210"
            />
          </g>
        </svg>
      </Transition>
    )
  }
}

export default MainMenuIcon
