import React, { Component } from 'react'
import styled from 'styled-components'

import SecheduleIcon from '../../svgs/ScheduleIcon'
import MainMenuIcon from '../../svgs/MainMenuIcon'
import MenuPortal from './MenuPortal'
import SchedulePortal from './SchedulePortal'
import ContentContainer from './ContentContainer'
import MenuOpenContext from '../../context/MenuOpenContext'
import TweenMax from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

import Drawer from '../Schedule/Drawer'

class MenuSection extends Component {
  static contextType = MenuOpenContext

  state = {
    screenWidth: 0,
    x: 0,
  }

  componentDidMount() {
    const screenWidth = window.innerWidth
    let x

    if (screenWidth <= 600) {
      x = Math.round((screenWidth - screenWidth * 0.2 - 48) * -1)
    }

    if (screenWidth > 600 && screenWidth < 1024) {
      x = Math.round((screenWidth - screenWidth * 0.6 - 48) * -1)
    }

    if (screenWidth >= 1024) {
      x = Math.round(
        (screenWidth - (screenWidth - 960) / 2 - screenWidth * 0.7 - 48) * -1
      )
    }

    this.setState({
      screenWidth,
      x,
    })
  }

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
              x: `${this.state.x}`,
              y: '90px',
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
          <MenuPortal in={this.context.menuOpen}>
            <ContentContainer />
          </MenuPortal>
          <SchedulePortal>
            <Drawer in={this.context.scheduleOpen} />
          </SchedulePortal>
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
