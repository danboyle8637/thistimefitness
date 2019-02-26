import React, { Component } from 'react'
import styled from 'styled-components'
import TweenMax, { Power2 } from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

import SideScheduleRow from '../Nav/Schedule/SideScheduleRow'
import MenuOpenContext from '../../context/MenuOpenContext'
import ScheduleDots from '../Schedule/ScheduleDots'
import ClassKeyCard from '../Schedule/ClassKeyCard'

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
        <ScheduleDrawerContainer>
          <ClassKeyCardWrapper width={`${this.context.drawerMaxWidth}px`}>
            <ClassKeyCard classType={'body_burn'} />
            <ClassKeyCard classType={'running'} />
            <ClassKeyCard classType={'yoga'} />
          </ClassKeyCardWrapper>
          <SideScheduleRow
            scheduleOpen={this.context.scheduleOpen}
            maxWidth={this.context.drawerMaxWidth}
          />
          <ScheduleDots />
        </ScheduleDrawerContainer>
      </Transition>
    )
  }
}

export default Drawer

const ScheduleDrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px 0 0 8px;
  background: ${props => props.theme.secondaryBackground};
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 999;
`

const ClassKeyCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${props => props.width};
`
