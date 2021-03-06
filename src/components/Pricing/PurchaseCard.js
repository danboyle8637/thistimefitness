import React from 'react'
import styled from 'styled-components'

import { MagazineH1Filler, Price } from '../../styles/Headlines'
import { PurchaseButton } from '../../styles/Buttons'

const PurchaseCard = ({ title, price }) => {
  return (
    <PurchaseCardContainer>
      <MagazineH1Filler fontSize={'20px'} color={'#D7DAFF'}>
        {title}
      </MagazineH1Filler>
      <PurchaseWrapper>
        <Price>{price}</Price>
        <PurchaseButton>Join Our Family</PurchaseButton>
      </PurchaseWrapper>
    </PurchaseCardContainer>
  )
}

export default PurchaseCard

const PurchaseCardContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  background: #393b4f;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
`

const PurchaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`
