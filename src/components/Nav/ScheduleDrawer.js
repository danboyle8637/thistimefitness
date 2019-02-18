import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import TweenMax, { Power2 } from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

const scheduleDrawerRoot =
  typeof document !== 'undefined'
    ? document.getElementById('schedule_portal')
    : null

class ScheduleDrawer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leftPosition: '20%',
    }

    this.el =
      typeof document !== 'undefined' ? document.createElement('div') : null
  }

  componentDidMount() {
    scheduleDrawerRoot.appendChild(this.el)
    const screenWidth = window.innerWidth

    if (screenWidth <= 600) {
      const leftPosition = '20%'
      this.setState({ leftPosition })
    }

    if (screenWidth > 600 && this.context.screenWidth <= 960) {
      const leftPosition = '60%'
      this.setState({ leftPosition })
    }

    if (screenWidth > 960) {
      const leftPosition = '70%'
      this.setState({ leftPosition })
    }
  }

  componentWillUnmount() {
    scheduleDrawerRoot.removeChild(this.el)
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
                left: `${this.state.leftPosition}`,
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
        <ScheduleDrawerWrapper />
      </Transition>
    )

    if (this.el) {
      return ReactDOM.createPortal(drawer, this.el)
    } else {
      return null
    }
  }
}

export default ScheduleDrawer

const ScheduleDrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  border-radius: 8px 0 8px 0;
  background: #26243e;
  pointer-events: none;
  z-index: 7;
`
