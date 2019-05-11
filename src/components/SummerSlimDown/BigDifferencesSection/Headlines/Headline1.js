import React from 'react'
import styled from 'styled-components'

import { SpecialSubhead } from '../../../../styles/Headlines'
import { above } from '../../../../styles/Theme'

const Headline1 = () => {
  return (
    <HeadlineGrid>
      <BigNumber>3</BigNumber>
      <HeadlineWrapper>
        <SpecialSubhead big upper>
          Big
        </SpecialSubhead>
        <SpecialSubhead upper>Differences</SpecialSubhead>
      </HeadlineWrapper>
    </HeadlineGrid>
  )
}

export { BigNumber, Headline1 as default }

const HeadlineGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: left;
  align-items: center;
`

const BigNumber = styled.p`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0;
  padding: 0;
  line-height: 0;
  font-family: Montserrat;
  font-weight: 800;
  color: ${props => props.theme.pricingColor};
  font-size: 160px;
  ${above.mobile`
    font-size: 220px;
  `}
`

const HeadlineWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin-left: 70px;
  z-index: 1;
  ${above.mobile`
    margin-left: 100px;
  `}
`
