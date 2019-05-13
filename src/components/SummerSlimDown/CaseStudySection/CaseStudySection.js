import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { SectionContainer, ButtonContainer } from '../../../styles/Containers'
import { MainButton } from '../../../styles/Buttons'
import Headline1 from './Headlines/Headline1'
import CaseStudyCard from './CaseStudyCard'
import CountdownTimer from '../CountdownSection/CountdownTimer'
import { above } from '../../../styles/Theme'

const CaseStudySection = () => {
  const query = graphql`
    query {
      caseStudies: allFile(
        filter: {
          sourceInstanceName: { eq: "SummerSlimDownCopy" }
          name: { regex: "/CaseStudyPreview/" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              id
              client
              mobileThumbnail {
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
              desktopThumbnail {
                childImageSharp {
                  fluid(
                    jpegProgressive: true
                    maxWidth: 600
                    maxHeight: 300
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
    const mobileThumbnail =
      card.childMarkdownRemark.frontmatter.mobileThumbnail.childImageSharp.fluid
    const desktopThumbnail =
      card.childMarkdownRemark.frontmatter.desktopThumbnail.childImageSharp
        .fluid
    const slug = card.childMarkdownRemark.frontmatter.slug

    return (
      <CaseStudyCard
        key={id}
        client={client}
        results={results}
        mobileThumbnail={mobileThumbnail}
        desktopThumbnail={desktopThumbnail}
        slug={slug}
      />
    )
  })

  return (
    <SectionContainer
      mobilePadding={'20px 16px 80px 16px'}
      tabletPadding={'20px 16px 120px 16px'}
      desktopPadding={'20px 16px 120px 16px'}
      desktopWidth={'100%'}
    >
      <div id="summer_case_studies" />
      <ButtonContainer>
        <MainButton to={'/summer-early-bird-form'}>I'm Interested!</MainButton>
      </ButtonContainer>
      <CountdownTimer />
      <Headline1 />
      <CardsContainer>{cards}</CardsContainer>
    </SectionContainer>
  )
}

export default CaseStudySection

const CardsContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${above.mobile`
    margin-top: 60px;
  `}
  ${above.tablet`
    margin-top: 100px;
    flex-direction: row;
    justify-content: space-around;
  `}
`
