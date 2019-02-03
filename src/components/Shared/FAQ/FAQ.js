import React from 'react'
import styled from 'styled-components'

import QuestionCard from './QuestionCard'
import { above } from '../../../styles/Theme'

const Faq = ({ questions }) => {
  const faq = questions.edges.map((question, index) => {
    const q = question.node.childMarkdownRemark.frontmatter.question
    const a = question.node.childMarkdownRemark.html
    return <QuestionCard key={index} q={q} a={a} />
  })

  return <FaqContainer>{faq}</FaqContainer>
}

export default Faq

const FaqContainer = styled.div`
  background: #393b4f;
  border-radius: 4px;
  width: 90%;
  margin-bottom: 40px;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
  `}
`
