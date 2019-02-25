import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import PurchaseCard from '../components/Pricing/PurchaseCard'
import { SectionContainer, ListContainer } from '../styles/Containers'
import { SpecialSubhead, BaseSubhead } from '../styles/Headlines'
import ArrowList from '../components/Shared/ArrowList'
import TextHeader from '../components/Shared/TextHeader'

const Pricing = () => {
  return (
    <Layout>
      <TextHeader
        word={'pricing'}
        tagLine={'Monthly | Class Passes | Custom'}
        fontSize={'64px'}
        letterSpacing={'1.4'}
      />
      <SectionContainer>
        <OptionWrapper>
          <ExtendBaseSubhead>Monthly Options:</ExtendBaseSubhead>
          <ListContainer>
            <ArrowList
              listItems={[
                { text: '8... 12... unlimited classes per month' },
                { text: 'Personalized coaching' },
                { text: 'Private Facebook Group' },
                { text: 'Month to month. No contracts' },
              ]}
            />
          </ListContainer>
          <PurchaseCardWrapper>
            <PurchaseCard title={'8 classes per month'} price={'$87'} />
            <PurchaseCard title={'12 classes per month'} price={'$127'} />
            <PurchaseCard
              title={'Unlimited Classes per Month'}
              price={'$150'}
            />
          </PurchaseCardWrapper>
        </OptionWrapper>
        <OptionWrapper marginTop={'60px'}>
          <ExtendBaseSubhead>Class Pass Options:</ExtendBaseSubhead>
          <ListContainer>
            <ArrowList
              listItems={[
                { text: '5... 10... 15 class pass options' },
                { text: 'Personalized coaching' },
                { text: 'Private Facebook Group' },
                { text: 'Use classes within 6 months' },
              ]}
            />
          </ListContainer>
          <PurchaseCardWrapper>
            <PurchaseCard title={'5 class pass'} price={'$60'} />
            <PurchaseCard title={'10 class pass'} price={'$120'} />
            <PurchaseCard title={'15 class pass'} price={'$167'} />
          </PurchaseCardWrapper>
        </OptionWrapper>
      </SectionContainer>
    </Layout>
  )
}

export default Pricing

const PurchaseCardWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
`

const ExtendBaseSubhead = styled(BaseSubhead)`
  align-self: flex-start;
  margin-bottom: 12px;
`

const OptionWrapper = styled.div`
  width: 100%;
  margin-top: ${props => props.marginTop || 0};
`
