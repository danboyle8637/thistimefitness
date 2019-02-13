import React from 'react'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import TweenMax, { Power3 } from 'gsap/TweenMax'

const InstructionBox = props => {
  return (
    <Transition
      in={props.in}
      timeout={5000}
      mountOnEnter={true}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (props.in) {
          TweenMax.fromTo(
            node,
            0.3,
            {
              autoAlpha: 0,
              x: -200,
              ease: Power3.easeOut,
              delay: 0.3,
              onComplete: done,
            },
            {
              autoAlpha: 1,
              x: 0,
              ease: Power3.easeIn,
              delay: 0.3,
              onComplete: done,
            }
          )
        } else {
          TweenMax.to(node, 0.3, {
            autoAlpha: 0,
            x: 200,
            onComplete: done,
          })
        }
      }}
    >
      <InstructionMessage>{props.message}</InstructionMessage>
    </Transition>
  )
}

export default InstructionBox

const InstructionMessage = styled.div`
  position: absolute;
  margin-top: 6px;
  padding: 3px 15px;
  background: rgba(179, 182, 225, 0.18);
  border-radius: 50px;
  color: #f8f8f8;
  font-size: 13px;
  font-weight: lighter;
`
