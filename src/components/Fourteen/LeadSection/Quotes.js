import React from 'react'
import styled from 'styled-components'

import QuoteBubble1 from '../../../svgs/QuoteBubble1'
import QuoteBubble2 from '../../../svgs/QuoteBubble2'
import QuoteBubble3 from '../../../svgs/QuoteBubble3'
import QuoteBubble4 from '../../../svgs/QuoteBubble4'
import { above } from '../../../styles/Theme'

const Quotes = () => {
  return (
    <QuoteContainer>
      <QuoteWrapper rotate={'-10.76deg'}>
        <Quote1>
          <QuoteBubble1 width={'100%'} />
        </Quote1>
      </QuoteWrapper>
      <QuoteWrapper rotate={'7.28deg'}>
        <Quote2>
          <QuoteBubble2 width={'100%'} />
        </Quote2>
      </QuoteWrapper>
      <QuoteWrapper rotate={'-4.42deg'}>
        <Quote3>
          <QuoteBubble3 width={'100%'} />
        </Quote3>
      </QuoteWrapper>
      <QuoteWrapper moveX={'60px'} rotate={'-2.53deg'}>
        <Quote4>
          <QuoteBubble4 width={'100%'} />
        </Quote4>
      </QuoteWrapper>
    </QuoteContainer>
  )
}

export default Quotes

const QuoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;
  justify-content: center;
  ${above.mobile`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `}
`

const QuoteWrapper = styled.div`
  transform: ${props =>
    `rotate(${props.rotate || '0'}) translate(${props.moveX ||
      '0'}, ${props.moveY || '0'})`};
`

const Quote1 = styled(QuoteWrapper)`
  width: 90%;
`

const Quote2 = styled(QuoteWrapper)`
  margin-top: 20px;
`

const Quote3 = styled(QuoteWrapper)`
  width: 90%;
`

const Quote4 = styled(QuoteWrapper)`
  width: 85%;
`
