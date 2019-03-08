import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { above } from '../../styles/Theme'

const TransformationCard = ({ image, name }) => (
  <ImageContainer>
    <Img fluid={image} title={name} alt={name} />
  </ImageContainer>
)

export default TransformationCard

const ImageContainer = styled.div`
  border: 2px solid ${props => props.theme.secondaryColor};
  width: 100%;
  ${above.mobile`
    width: 200px;
  `}
`
