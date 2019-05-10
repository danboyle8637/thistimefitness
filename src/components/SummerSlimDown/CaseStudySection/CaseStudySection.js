import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { SectionContainer } from '../../../styles/Containers'
import Headline1 from './Headlines/Headline1'
import CaseStudyCard from './CaseStudyCard'

const CaseStudySection = () => {
  const query = graphql`
    query {
      caseStudies: allFile(
        filter: {
          sourceInstanceName: { eq: "SummerSlimDownCopy" }
          name: { regex: "/CaseStudy/" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              id
              client
              pic {
                childImageSharp {
                  fluid(
                    jpegProgressive: true
                    maxWidth: 400
                    maxHeight: 400
                    quality: 90
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              results
              slug
            }
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)

  const cards = data.caseStudies.nodes.map(card => {
    const id = card.childMarkdownRemark.frontmatter.id
    const client = card.childMarkdownRemark.frontmatter.client
    const results = card.childMarkdownRemark.frontmatter.results
    const pic = card.childMarkdownRemark.frontmatter.pic.childImageSharp.fluid
    const slug = card.childMarkdownRemark.frontmatter.slug

    return (
      <CaseStudyCard
        key={id}
        client={client}
        results={results}
        pic={pic}
        slug={slug}
      />
    )
  })

  return (
    <SectionContainer>
      <Headline1 />
      <CardsContainer>{cards}</CardsContainer>
    </SectionContainer>
  )
}

export default CaseStudySection

const CardsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
