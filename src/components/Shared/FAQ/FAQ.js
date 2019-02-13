import React from 'react'
import styled from 'styled-components'

import QuestionCard from './QuestionCard'
import { SectionContainer } from '../../../styles/Containers'

const Faq = ({ questions }) => {
  const faq = questions.edges.map((question, index) => {
    const q = question.node.childMarkdownRemark.frontmatter.question
    const a = question.node.childMarkdownRemark.html
    return <QuestionCard key={index} q={q} a={a} />
  })

  return (
    <SectionContainer>
      <FaqContainer>{faq}</FaqContainer>
    </SectionContainer>
  )
}

export default Faq

const FaqContainer = styled.div`
  background: #393b4f;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 40px;
`
