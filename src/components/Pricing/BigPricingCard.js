import React from 'react'
import styled from 'styled-components'

import { PurchaseButton } from '../../styles/Buttons'
import { ButtonContainer } from '../../styles/Containers'
import { above } from '../../styles/Theme'

const BigPricingCard = ({ price, priceTitle, priceDescription, link }) => {
  return (
    <PurchaseCardContainer>
      <PricingWrapper>
        <Price>{price}</Price>
        <DescriptionHeadline>{priceTitle}</DescriptionHeadline>
      </PricingWrapper>
      <DescriptionText>{priceDescription}</DescriptionText>
      <ButtonContainer
        mMarginTop={'10px'}
        tMarginTop={'14px'}
        dMarginTop={'18px'}
        tabletWidth={'100%'}
        desktopWidth={'100%'}
      >
        <PurchaseButton href={link} target={'_blank'} rel={'noopener'}>
          Join The Family
        </PurchaseButton>
      </ButtonContainer>
    </PurchaseCardContainer>
  )
}

export default BigPricingCard

const PurchaseCardContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.specialBackground};
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
  ${above.mobile`
    width: 380px;
  `}
`

const PricingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  justify-items: center;
  align-items: center;
`

const Price = styled.h4`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 66px;
  font-weight: 800;
  letter-spacing: '2.3px';
  color: ${props => props.theme.pricingColor};
  &::before {
    position: absolute;
    content: '$';
    top: 0;
    left: 0;
    font-size: 22px;
    font-weight: 400;
    color: ${props => props.theme.pricingColor};
    transform: translate(-110%, 50%);
  }
`

const DescriptionHeadline = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-family: Quicksand;
  color: ${props => props.theme.textColor};
`

const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: ${props => props.theme.textColor};
`
