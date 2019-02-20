import React, { Component } from 'react'
import styled from 'styled-components'

import SecheduleIcon from '../../svgs/ScheduleIcon'
import MainMenuIcon from '../../svgs/MainMenuIcon'
import MenuDrawer from './MenuDrawer'
import ScheduleDrawer from './ScheduleDrawer'
import ContentContainer from './ContentContainer'
import MenuOpenContext from '../../context/MenuOpenContext'
import TweenMax from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

class MenuSection extends Component {
  static contextType = MenuOpenContext

  handleToggleMenu = () => {
    this.context.handleCloseSchedule()
    this.context.handleToggleMenu()
  }

  handleToggleSchedule = () => {
    this.context.handleCloseMenu()
    this.context.handleToggleSchedule()
  }

  render() {
    return (
      <Transition
        in={this.context.menuOpen || this.context.scheduleOpen}
        timeout={5000}
        addEndListener={(node, done) => {
          if (this.context.menuOpen || this.context.scheduleOpen) {
            TweenMax.to(node, 0.3, {
              rotation: '90',
              x: '-278px',
              y: '360px',
              onComplete: done,
            })
          } else {
            TweenMax.to(node, 0.3, {
              rotation: '0',
              x: '0',
              y: '0',
              onComplete: done,
            })
          }
        }}
      >
        <MenuWrapper>
          <ScheduleWrapper onClick={this.handleToggleSchedule}>
            <SecheduleIcon width={'30px'} />
          </ScheduleWrapper>
          <HamburgerWrapper onClick={this.handleToggleMenu}>
            <MainMenuIcon width={'30px'} />
          </HamburgerWrapper>
          <MenuDrawer in={this.context.menuOpen}>
            <ContentContainer />
          </MenuDrawer>
          <ScheduleDrawer in={this.context.scheduleOpen}>
            This is some children
          </ScheduleDrawer>
        </MenuWrapper>
      </Transition>
    )
  }
}

export default MenuSection

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #2b2c3a;
  border-radius: 4px;
  width: 110px;
  height: 48px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
`

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScheduleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
