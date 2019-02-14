import React from 'react'
import styled from 'styled-components'

import MenuList from './MenuList'

const ContentContainer = () => {
  return (
    <MenuContainer>
      <MenuList />
    </MenuContainer>
  )
}

export default ContentContainer

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`
