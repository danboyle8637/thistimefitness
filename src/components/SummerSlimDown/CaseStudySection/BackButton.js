import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BackButton = () => {
  return (
    <Button to={'/summer-slim-down-challenge#summer_case_studies'}>Back</Button>
  )
}

export default BackButton

const Button = styled(Link)`
  padding: 4px 14px;
  margin: 0;
  background: transparent;
  border: 3px solid ${props => props.theme.pricingColor};
  border-radius: 4px;
  color: ${props => props.theme.pricingColor};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`
