import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import PurchaseCard from '../components/Pricing/PurchaseCard'
import { SectionContainer } from '../styles/Containers'
import { SpecialSubhead } from '../styles/Headlines'
import ArrowList from '../components/Shared/ArrowList'

const Pricing = () => {
  return (
    <Layout>
      <SectionContainer>
        <SpecialSubhead>Monthly Options:</SpecialSubhead>
        <ArrowList
          listItems={[
            { text: '8... 12... unlimited classes per month' },
            { text: 'Personalized coaching' },
            { text: 'Private Facebook Group' },
            { text: 'No contracts' },
          ]}
        />
        <PurchaseCardWrapper>
          <PurchaseCard title={'8 classes per month'} price={'$87'} />
          <PurchaseCard title={'12 classes per month'} price={'$127'} />
          <PurchaseCard title={'Unlimited Classes per Month'} price={'$155'} />
        </PurchaseCardWrapper>
      </SectionContainer>
    </Layout>
  )
}

export default Pricing

const PurchaseCardWrapper = styled.div`
  margin-top: 40px;
`
