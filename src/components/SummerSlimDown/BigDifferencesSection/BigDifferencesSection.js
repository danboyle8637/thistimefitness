import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { SectionContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import DifferenceCard from './DifferenceCard'

const BigDifferencesSection = () => {
  const query = graphql`
    query {
      differencesCopy: allFile(
        filter: {
          sourceInstanceName: { eq: "SummerSlimDownCopy" }
          name: { regex: "/Difference/" }
        }
        sort: { fields: name }
      ) {
        nodes {
          childMarkdownRemark {
            html
            frontmatter {
              headline
              number
            }
          }
        }
      }
    }
  `

  const copy = useStaticQuery(query)

  const cards = copy.differencesCopy.nodes.map(card => {
    const number = card.childMarkdownRemark.frontmatter.number
    const headline = card.childMarkdownRemark.frontmatter.headline
    const body = card.childMarkdownRemark.html

    return (
      <DifferenceCard
        key={number}
        number={number}
        headline={headline}
        body={body}
      />
    )
  })

  return (
    <SectionContainer>
      <Headline1 />
      <CardContainer>{cards}</CardContainer>
    </SectionContainer>
  )
}

export default BigDifferencesSection

const CardContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
