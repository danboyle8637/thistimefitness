import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import TweenMax, { Power2 } from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

import MenuOpenContext from '../../context/MenuOpenContext'

const menuPortalRoot =
  typeof document !== 'undefined'
    ? document.getElementById('menu_portal')
    : null

class MenuPortal extends Component {
  static contextType = MenuOpenContext

  constructor(props) {
    super(props)

    this.el =
      typeof document !== 'undefined' ? document.createElement('div') : null
  }

  componentDidMount() {
    menuPortalRoot.appendChild(this.el)
    const screenWidth = window.innerWidth

    if (screenWidth <= 600) {
      const leftPosition = '20%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(leftPosition)) / 100
      this.context.setMenuState(maxWidth, leftPosition)
    }

    if (screenWidth > 600 && screenWidth <= 960) {
      const leftPosition = '60%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(leftPosition)) / 100
      this.context.setMenuState(maxWidth, leftPosition)
    }

    if (screenWidth > 960) {
      const leftPosition = '70%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(leftPosition)) / 100
      this.context.setMenuState(maxWidth, leftPosition)
    }
  }

  componentWillUnmount() {
    menuPortalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props

    const drawer = (
      <Transition
        in={this.props.in}
        timeout={5000}
        mountOnEnter={true}
        unmountOnExit={true}
        addEndListener={(node, done) => {
          if (this.props.in) {
            TweenMax.fromTo(
              node,
              0.3,
              {
                left: '100%',
                ease: Power2.easeOut,
                onComplete: done,
              },
              {
                left: `${this.context.leftPosition}`,
                ease: Power2.easeOut,
                onComplete: done,
              }
            )
          } else {
            TweenMax.to(node, 0.3, {
              left: '100%',
              ease: Power2.easeIn,
              onComplete: done,
            })
          }
        }}
      >
        <MenuDrawerWrapper>{children}</MenuDrawerWrapper>
      </Transition>
    )

    if (this.el) {
      return ReactDOM.createPortal(drawer, this.el)
    } else {
      return null
    }
  }
}

export default MenuPortal

const MenuDrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  padding: 30px 10px 30px 30px;
  border-radius: 8px 0 0 8px;
  background: #3a3767;
  pointer-events: auto;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.3);
  z-index: 7;
`
