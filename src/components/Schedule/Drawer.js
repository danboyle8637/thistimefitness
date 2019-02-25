import React, { Component } from 'react'
import styled from 'styled-components'
import TweenMax, { Power2 } from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

import ScheduleRow from '../Schedule/ScheduleRow'
import MenuOpenContext from '../../context/MenuOpenContext'

class Drawer extends Component {
  static contextType = MenuOpenContext
  render() {
    return (
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
        <ScheduleDrawerWrapper>
          <ScheduleRow />
        </ScheduleDrawerWrapper>
      </Transition>
    )
  }
}

export default Drawer

const ScheduleDrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px 0 0 8px;
  background: #26243e;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 999;
`
