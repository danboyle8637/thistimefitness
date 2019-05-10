import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { SectionContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import HowItWorksCard from './HowItWorksCard'

const HowItWorksSection = () => {
  const query = graphql`
    query {
      whatIsItCopy: allFile(
        filter: {
          sourceInstanceName: { eq: "SummerSlimDownCopy" }
          name: { regex: "/HowItWorks/" }
        }
        sort: { fields: name }
      ) {
        nodes {
          name
          childMarkdownRemark {
            html
            frontmatter {
              headline
            }
          }
        }
      }
    }
  `

  const copy = useStaticQuery(query)

  const cards = copy.whatIsItCopy.nodes.map(card => {
    const name = card.name
    const headline = card.childMarkdownRemark.frontmatter.headline
    const body = card.childMarkdownRemark.html

    return <HowItWorksCard key={name} headline={headline} body={body} />
  })

  return (
    <SectionContainer color={'#26243E'}>
      <Headline1 />
      <CardContainer>{cards}</CardContainer>
    </SectionContainer>
  )
}

export default HowItWorksSection

const CardContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
