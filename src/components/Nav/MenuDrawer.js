import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import TweenMax, { Power2 } from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

const menuDrawerRoot =
  typeof document !== 'undefined'
    ? document.getElementById('menu_portal')
    : null

class MenuDrawer extends Component {
  constructor(props) {
    super(props)

    this.el =
      typeof document !== 'undefined' ? document.createElement('div') : null
  }

  componentDidMount() {
    menuDrawerRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    menuDrawerRoot.removeChild(this.el)
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
                left: '20%',
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

export default MenuDrawer

const MenuDrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  padding: 30px 10px 30px 30px;
  border-radius: 8px 0 0 8px;
  background: #3a3767;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.3);
  z-index: 2;
`
