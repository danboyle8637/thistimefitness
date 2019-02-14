import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TweenMax, Back } from 'gsap/TweenMax'

import ListArrow from '../../svgs/ListArrow'
import { above } from '../../styles/Theme'

class HeadlineMenu extends Component {
  constructor(props) {
    super(props)

    this.menuItems = []

    this.setMenuItemRef = element => {
      this.menuItems.push(element)
    }
  }

  componentDidMount() {
    TweenMax.staggerFrom(
      this.menuItems,
      0.8,
      { ease: Back.easeOut.config(1.2), x: -600, opacity: 0 },
      0.2
    )
  }

  render() {
    return (
      <MenuContainer>
        <MenuText ref={this.setMenuItemRef}>
          <MenuArrow />
          <MenuLink to="/14-for-14-new-member-special/">
            First Timer Specials
          </MenuLink>
        </MenuText>
        <MenuText ref={this.setMenuItemRef}>
          <MenuArrow />
          <MenuLink to="/about">About</MenuLink>
        </MenuText>
        <MenuText ref={this.setMenuItemRef}>
          <MenuArrow />
          <MenuLink to="/classes">Our Classes</MenuLink>
        </MenuText>
        <MenuText ref={this.setMenuItemRef}>
          <MenuArrow />
          <MenuLink to="/">Case Studies</MenuLink>
        </MenuText>
        <MenuText ref={this.setMenuItemRef}>
          <MenuArrow />
          <MenuLink to="/">Schedule</MenuLink>
        </MenuText>
      </MenuContainer>
    )
  }
}

export default HeadlineMenu

const MenuContainer = styled.ul`
  margin: 0;
  margin-top: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
  ${above.mobile`
    margin-top: 30px;
    transform: translateX(82px);
  `}
  ${above.tablet`
    transform: translateX(76px);
  `}
`

const MenuText = styled.li`
  margin: 0;
  margin-right: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  &:nth-child(n + 1) {
    margin-top: 20px;
  }
  ${above.mobile`
    margin-right: 8px;
  `}
`

const MenuLink = styled(Link)`
  margin-left: 8px;
  text-decoration: none;
  color: #f8f8f8;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.4px;
  cursor: pointer;
  transition: color, 150ms ease-out;
  &:hover {
    color: #5afdf2;
  }
  ${above.mobile`
    font-size: 20px;
  `}
`

const MenuArrow = styled(ListArrow)`
  width: 40px;
  ${above.mobile`
    width: 50px;
  `}
  ${above.tablet`
    width: 60px;
  `}
`
