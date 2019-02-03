import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import ListArrow from '../../svgs/ListArrow'
import { above } from '../../styles/Theme'

const HeadlineMenu = () => {
  return (
    <MenuContainer>
      <MenuText>
        <MenuArrow />
        <MenuLink to="/14-for-14-new-member-special/">
          First Timer Specials
        </MenuLink>
      </MenuText>
      <MenuText>
        <MenuArrow />
        <MenuLink to="/about">About</MenuLink>
      </MenuText>
      <MenuText>
        <MenuArrow />
        <MenuLink to="/classes">Our Classes</MenuLink>
      </MenuText>
      <MenuText>
        <MenuArrow />
        <MenuLink to="/">Case Studies</MenuLink>
      </MenuText>
      <MenuText>
        <MenuArrow />
        <MenuLink to="/">Schedule</MenuLink>
      </MenuText>
    </MenuContainer>
  )
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
  transform: translateX(0);
  transition: transform 150ms ease-out;
  &:nth-child(n + 1) {
    margin-top: 20px;
  }
  &:hover {
    transform: translateX(-8px);
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
  transform: translateX(0);
  transition: color, transform, 150ms ease-out;
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
