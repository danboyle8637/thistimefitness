import React from 'react'
import styled from 'styled-components'

import ListArrow from '../../svgs/ListArrow'
import { ListContainer } from '../../styles/Containers'
import { BodyText } from '../../styles/BodyText'

const ArrowList = ({ listItems }) => {
  const items = listItems.map((item, index) => {
    return (
      <ListItem key={index}>
        <StyledArrow width={'30px'} />
        <BodyText>{item.text}</BodyText>
      </ListItem>
    )
  })

  return <List>{items}</List>
}

export default ArrowList

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledArrow = styled(ListArrow)`
  align-self: start;
  transform: translateY(8px);
`

const ListItem = styled.li`
  margin: 0;
  margin-top: 10px;
  padding: 0;
  display: grid;
  grid-template-columns: 30px auto;
  grid-gap: 10px;
`
