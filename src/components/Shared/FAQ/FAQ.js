import React from 'react'
import styled from 'styled-components'

import QuestionCard from './QuestionCard'
import { SectionContainer, HeadlineContainer } from '../../../styles/Containers'
import { SpecialSubhead } from '../../../styles/Headlines'

const Faq = ({ questions }) => {
  const faq = questions.edges.map((question, index) => {
    const q = question.node.childMarkdownRemark.frontmatter.question
    const a = question.node.childMarkdownRemark.html
    return <QuestionCard key={index} q={q} a={a} />
  })

  return (
    <SectionContainer>
      <HeadlineContainer>
        <SpecialSubhead>F.A.Q.</SpecialSubhead>
      </HeadlineContainer>
      <FaqContainer>{faq}</FaqContainer>
    </SectionContainer>
  )
}

export default Faq

const FaqContainer = styled.div`
  background: #393b4f;
  border-radius: 4px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`
