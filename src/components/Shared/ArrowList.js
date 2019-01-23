import React from 'react'
import styled from 'styled-components'

import ListArrow from '../../svgs/ListArrow'
import { BodyText } from '../../styles/BodyText'

const ArrowList = ({ listItems }) => {
  const items = listItems.map((item, index) => {
    return (
      <ListItem key={index}>
        <ListArrow width={'30px'} />
        <BodyText marginLeft={'10px'}>{item.text}</BodyText>
      </ListItem>
    )
  })

  return <List>{items}</List>
}

export default ArrowList

const List = styled.ul`
  margin: 0;
  margin-left: 60px;
  padding: 0;
  list-style: none;
`

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`
