import React, { Component } from 'react'
import styled from 'styled-components'

class CharacterCount extends Component {
  state = {
    characterCount: 0,
  }

  handleTyping = event => {
    const count = event.target.value.length
    this.setState({ characterCount: count })
  }

  render() {
    return (
      <Container>
        <textarea
          onChange={this.handleTyping}
          name="charcount"
          id="charcount"
          cols="30"
          rows="10"
        />
        <Count>{this.state.characterCount}</Count>
      </Container>
    )
  }
}

export default CharacterCount

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80%;
  padding: 100px;
`

const Count = styled.div`
  padding: 50px;
  font-size: 46px;
  color: #5c5c5c;
`
