import React, { Component } from 'react'
import styled from 'styled-components'
import { TweenMax, Power3 } from 'gsap/TweenMax'

import { InputContainer, FormTextInput } from '../../../styles/Form'
import ErrorMessageBox from '../../Shared/Form/ErrorMessageBox'
import InstructionBox from '../../Shared/Form/InstructionBox'

class TextInput extends Component {
  constructor(props) {
    super(props)

    this.messageBox = null

    this.setMessageBoxRef = element => {
      this.messageBox = element
    }
  }

  componentDidMount() {
    TweenMax.to(this.messageBox, 1, {
      startAt: { opacity: 0, x: -200, autoAlpha: 0 },
    })
  }

  animateInstructionBox = () => {
    TweenMax.to(this.messageBox, 0.6, {
      opacity: 1,
      x: 0,
      autoAlpha: 1,
      ease: Power3.easeOut,
    })
  }

  animateErrorBox = () => {
    // Tween out the instruction box first
    TweenMax.to(this.messageBox, 0.6, {
      opacity: 0,
      x: 400,
      autoAlpha: 0,
      ease: Power3.easeIn,
    })

    // Then Tween in the error box immediately behind it.
    TweenMax.to(this.messageBox, 0.6, {
      opacity: 1,
      x: 0,
      autoAlpha: 1,
      ease: Power3.easeOut,
      delay: 0.6,
    })
  }

  render() {
    const { initial, valid, showInstruction, touched, name } = this.props

    let messageBox
    let message

    if (name === 'firstName' && showInstruction) {
      message = 'Enter only your first name.'
    }

    if (name === 'firstName' && !valid && !touched) {
      message = 'Your name must be at least 2 characters long.'
    }

    if (name === 'email' && showInstruction) {
      message = 'What email can I send you a special bonus?'
    }

    if (name === 'email' && !valid && !touched) {
      message = 'Please enter a good email address.'
    }

    if (showInstruction) {
      messageBox = <InstructionBox message={message} />
      this.animateInstructionBox()
    }

    if (!valid && !initial && !touched && !showInstruction) {
      messageBox = <ErrorMessageBox message={message} />
      this.animateErrorBox()
    }

    return (
      <InputContainer>
        <FormTextInput type="text" {...this.props} />
        <div ref={this.setMessageBoxRef}>{messageBox}</div>
      </InputContainer>
    )
  }
}

export default TextInput
