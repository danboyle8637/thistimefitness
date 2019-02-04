import React from 'react'
import styled from 'styled-components'

import FaqArrow from '../../../svgs/FaqArrow'
import { InnerBodyText } from '../../../styles/BodyText'
import Toggle from '../../Shared/Toggle'

const QuestionCard = ({ q, a }) => {
  return (
    <Toggle>
      {({ open, handleToggle }) => (
        <QuestionContainer onClick={handleToggle}>
          <QuestionWrapper>{q}</QuestionWrapper>
          <ArrowWrapper>
            <Arrow width={'20px'} strokeWidth={'12px'} />
          </ArrowWrapper>
          {open ? (
            <InnerBodyText dangerouslySetInnerHTML={{ __html: a }} />
          ) : (
            <div />
          )}
        </QuestionContainer>
      )}
    </Toggle>
  )
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
