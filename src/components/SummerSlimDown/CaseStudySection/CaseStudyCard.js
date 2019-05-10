import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import { BodyText } from '../../../styles/BodyText'
import { BaseSubhead } from '../../../styles/Headlines'

const CaseStudyCard = ({ client, results, pic, slug }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <CaseStudyImage fluid={pic} />
      </ImageWrapper>
      <ContentWrapper>
        <BodyText>{client}</BodyText>
        <BaseSubhead secondary>{results}</BaseSubhead>
        <Button to={slug}>Read More...</Button>
      </ContentWrapper>
    </CardContainer>
  )
}

export default CaseStudyCard

const CardContainer = styled.div`
  margin: 0;
  margin-bottom: 20px;
  display: flex;
  background: #393b4f;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

const ImageWrapper = styled.div`
  width: 100%;
`

const CaseStudyImage = styled(Image)`
  border-radius: 4px 0 0 4px;
`

const ContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

const Button = styled(Link)`
  margin: 0;
  margin-top: 8px;
  padding: 4px;
  border: none;
  border-radius: 4px;
  background: ${props => props.theme.active.buttonColor};
  color: #f8f8f8;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  text-decoration: none;
  width: 100%;
`
