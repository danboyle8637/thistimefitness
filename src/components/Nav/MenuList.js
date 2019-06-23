import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import TweenMax, { Back } from 'gsap/TweenMax'

import { HeadlineContainer } from '../../styles/Containers'
import { SpecialSubhead } from '../../styles/Headlines'
import { above } from '../../styles/Theme'
import ListArrow from '../../svgs/ListArrow'

class MenuList extends Component {
  constructor(props) {
    super(props)

    this.menuItems = []

    this.setMenuItemRef = element => {
      this.menuItems.push(element)
    }
  }

  componentDidMount() {
    this.menuItems.map(item => {
      if (
        item.firstChild.textContent === 'Specials' ||
        item.firstChild.textContent === 'Summer Slim Down'
      ) {
        TweenMax.set(item.firstChild, { color: '#2AD2E2' })
      }
    })

    TweenMax.staggerFrom(
      this.menuItems,
      0.2,
      { ease: Back.easeOut.config(1.2), x: 300, opacity: 0, delay: 0.2 },
      0.1
    )
  }

  render() {
    return (
      <MenuContainer>
        <HeadlineContainer left>
          <SpecialSubhead secondary>MENU</SpecialSubhead>
        </HeadlineContainer>
        <MenuListContainer>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/about">About</MenuLink>
          </MenuText>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/classes">Classes</MenuLink>
          </MenuText>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/schedule">Schedule</MenuLink>
          </MenuText>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/specials">Specials</MenuLink>
          </MenuText>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/case-studies">Case Studies</MenuLink>
          </MenuText>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/transformations">Before/Afters</MenuLink>
          </MenuText>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/pricing">Pricing</MenuLink>
          </MenuText>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/blog">Blog</MenuLink>
          </MenuText>
          <MenuText ref={this.setMenuItemRef}>
            <MenuLink to="/location">Location</MenuLink>
          </MenuText>
        </MenuListContainer>
      </MenuContainer>
    )
  }
}

export default MenuList

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuListContainer = styled.ul`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
`

const MenuText = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  &:nth-child(n):not(:first-of-type) {
    margin-top: 15px;
  }
`

const MenuLink = styled(Link)`
  margin: 0;
  margin-right: 20px;
  padding: 0;
  text-decoration: none;
  color: #b3b6e1;
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color, 150ms ease-out;
  &:hover {
    color: #5afdf2;
  }
  ${above.mobile`
    font-size: 20px;
  `}
`
