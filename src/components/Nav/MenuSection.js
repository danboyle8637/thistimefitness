import React, { Component } from 'react'
import styled from 'styled-components'

import SecheduleIcon from '../../svgs/ScheduleIcon'
import HamburgerMenuIcon from '../../svgs/HamburgerMenuIcon'

class MenuSection extends Component {
  render() {
    return (
      <MenuWrapper>
        <SecheduleIcon width={'30px'} />
        <HamburgerMenuIcon width={'30px'} />
      </MenuWrapper>
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
