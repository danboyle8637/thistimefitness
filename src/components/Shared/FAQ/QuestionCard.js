import React, { Component } from 'react'
import styled from 'styled-components'

import FaqArrow from '../../../svgs/FaqArrow'
import { InnerBodyText } from '../../../styles/BodyText'
import FaqContext from '../../../context/FaqContext'

class QuestionCard extends Component {
  static contextType = FaqContext

  handleQuestionClick = () => {
    const { handleToggleFaq } = this.context
    handleToggleFaq()
    console.log(this.context.open)
  }

  render() {
    const { q, a } = this.props
    return (
      <QuestionContainer onClick={this.handleQuestionClick}>
        <QuestionWrapper>{q}</QuestionWrapper>
        <ArrowWrapper>
          <Arrow width={'20px'} strokeWidth={'12px'} />
        </ArrowWrapper>
        {this.context.open ? (
          <InnerBodyText dangerouslySetInnerHTML={{ __html: a }} />
        ) : (
          <div />
        )}
      </QuestionContainer>
    )
  }
}

export default QuestionCard

const QuestionContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-gap: 20px;
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
