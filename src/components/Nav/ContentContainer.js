import React from 'react'
import styled from 'styled-components'

import MenuList from './MenuList'
import MenuOpenContext from '../../context/MenuOpenContext'

const ContentContainer = () => {
  return (
    <MenuOpenContext.Consumer>
      {({ drawerMaxWidth }) => (
        <MenuContainer width={drawerMaxWidth}>
          <MenuList />
        </MenuContainer>
      )}
    </MenuOpenContext.Consumer>
  )
}

export default ContentContainer

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${props => `${props.width}px`};
  height: 100%;
`
