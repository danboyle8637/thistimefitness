import React, { Component } from 'react'
import styled from 'styled-components'

import SecheduleIcon from '../../svgs/ScheduleIcon'
import HamburgerMenuIcon from '../../svgs/HamburgerMenuIcon'
import MenuDrawer from './MenuDrawer'
import ContentContainer from './ContentContainer'
import MenuOpenContext from '../../context/MenuOpenContext'
import TweenMax from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'

class MenuSection extends Component {
  static contextType = MenuOpenContext

  handleToggleMenu = () => {
    this.context.handleToggleMenu()
  }

  render() {
    return (
      <Transition
        in={this.context.menuOpen}
        timeout={5000}
        addEndListener={(node, done) => {
          if (this.context.menuOpen) {
            TweenMax.to(node, 0.3, {
              rotation: '90',
              x: '-252px',
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
          <SecheduleIcon width={'30px'} />
          <HamburgerWrapper onClick={this.handleToggleMenu}>
            <HamburgerMenuIcon width={'30px'} />
          </HamburgerWrapper>
          <MenuDrawer in={this.context.menuOpen}>
            <ContentContainer />
          </MenuDrawer>
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
  width: 100px;
  height: 48px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
`

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
