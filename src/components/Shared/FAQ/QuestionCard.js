import React, { Component } from 'react'
import styled from 'styled-components'
import { TweenMax } from 'gsap/TweenMax'

import FaqArrow from '../../../svgs/FaqArrow'
import { InnerBodyText } from '../../../styles/BodyText'
import { BodyTextContainer } from '../../../styles/Containers'

class QuestionCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      height: 0,
    }

    this.arrow = null
    this.answer = null
    this.question = null

    this.setArrowRef = element => {
      this.arrow = element
    }

    this.setAnswerRef = element => {
      this.answer = element
    }

    this.setQuestionRef = element => {
      this.question = element
    }
  }

  componentDidMount() {
    this.setState({ height: this.answer.scrollHeight })

    TweenMax.to(this.arrow, 1, {
      transformOrigin: '50% 50',
      startAt: { directionalRotation: '90_cw' },
    })

    TweenMax.to(this.answer, 1, {
      startAt: { opacity: 0, height: 0, paddingTop: 0 },
    })
  }

  handleToggle = () => {
    const toggle = !this.state.open
    this.setState({ open: toggle })

    this.handleArrowAnimation()
    this.handleContainerAnimation()
  }

  handleContainerAnimation = () => {
    if (this.state.open) {
      TweenMax.to(this.answer, 0.2, {
        opacity: 0,
        height: 0,
        paddingTop: 0,
      })

      TweenMax.to(this.question, 0.2, {
        color: '#d7daff',
      })
    }

    if (!this.state.open) {
      TweenMax.to(this.answer, 0.2, {
        opacity: 1,
        height: this.state.height,
        paddingTop: 20,
      })

      TweenMax.to(this.question, 0.2, {
        color: '#2AD2E2',
      })
    }
  }

  handleArrowAnimation = () => {
    if (!this.state.open) {
      TweenMax.to(this.arrow, 0.2, {
        transformOrigin: '50% 50%',
        directionalRotation: '0',
      })
    }

    if (this.state.open) {
      TweenMax.to(this.arrow, 0.2, {
        transformOrigin: '50% 50%',
        directionalRotation: '90_cw',
      })
    }
  }

  render() {
    const { q, a } = this.props

    return (
      <QuestionContainer>
        <QuestionWrapper ref={this.setQuestionRef} onClick={this.handleToggle}>
          {q}
        </QuestionWrapper>
        <ArrowWrapper ref={this.setArrowRef} onClick={this.handleToggle}>
          <Arrow width={'20px'} strokeWidth={'12px'} />
        </ArrowWrapper>
        <BodyTextContainer ref={this.setAnswerRef}>
          <InnerBodyText dangerouslySetInnerHTML={{ __html: a }} />
        </BodyTextContainer>
      </QuestionContainer>
    )
  }
}

export default QuestionCard

const QuestionContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-column-gap: 10px;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #2b2c3a;
`

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #d7daff;
`

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`

const Arrow = styled(FaqArrow)`
  transform-origin: 50% 50%;
  transform: rotate(0deg);
`
