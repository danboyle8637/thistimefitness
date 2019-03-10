import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { ListContainer, SectionContainer } from '../styles/Containers'
import { BaseSubhead } from '../styles/Headlines'
import ArrowList from '../components/Shared/ArrowList'
import TextHeader from '../components/Shared/TextHeader'
import BigPricingCard from '../components/Pricing/BigPricingCard'
import { siteConfig } from '../helpers/siteConfig'
import { above } from '../styles/Theme'
import SEO from '../components/seo'

const Pricing = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={siteConfig.pricing.title}
        description={siteConfig.pricing.description}
        image={data.facebookShare.publicURL}
        url={siteConfig.pricing.url}
        lang={siteConfig.pricing.lang}
      />
      <TextHeader
        word={'pricing'}
        tagLine={'Monthly | Class Passes | Custom'}
        fontSize={'64px'}
        letterSpacing={'1.4'}
      />
      <SectionContainer desktopWidth={'70%'}>
        <PurchaseContainer>
          <OptionWrapper>
            <BaseSubhead>Monthly Options:</BaseSubhead>
            <ListContainer
              mMarginTop={'10px'}
              tMarginTop={'16px'}
              dMarginTop={'20px'}
              tabletWidth={'100%'}
              desktopWidth={'100%'}
            >
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
              <BigPricingCard
                link={siteConfig.purchaseLinks.eightPerMonth}
                price={87}
                priceTitle={'8 Classes per Month'}
                priceDescription={`Get 8 classes each month to use as you want. That's only $10.87 per class... an amazing deal.`}
              />
              <BigPricingCard
                link={siteConfig.purchaseLinks.twelvePerMonth}
                price={127}
                priceTitle={'12 Classes per Month'}
                priceDescription={`Get 12 classes every month to use as you want. That's only $10.58 per class... an even better deal.`}
              />
              <BigPricingCard
                link={siteConfig.purchaseLinks.unlimitedPerMonth}
                price={150}
                priceTitle={'Unlimited Classes per Month'}
                priceDescription={
                  'Get unlimited classes you can use however you want. This is clearly the best membership option.'
                }
              />
            </PurchaseCardWrapper>
          </OptionWrapper>
          <OptionWrapper marginTop={'60px'}>
            <BaseSubhead>Class Pass Options:</BaseSubhead>
            <ListContainer
              mMarginTop={'10px'}
              tMarginTop={'16px'}
              dMarginTop={'20px'}
              tabletWidth={'100%'}
              desktopWidth={'100%'}
            >
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
              <BigPricingCard
                link={siteConfig.purchaseLinks.fiveClassPass}
                price={60}
                priceTitle={'5 Classes'}
                priceDescription={`Get a class pass for 5 classes to use how you want. You have 6 months to use your pass.`}
              />
              <BigPricingCard
                link={siteConfig.purchaseLinks.tenClassPass}
                price={120}
                priceTitle={'10 Classes'}
                priceDescription={`Get a class pass for 10 classes to use how you want. You have 6 months to use your pass.`}
              />
              <BigPricingCard
                link={siteConfig.purchaseLinks.fifteenClassPass}
                price={167}
                priceTitle={'15 Classes'}
                priceDescription={`Get a class pass for 15 classes to use how you want. You have 6 months to use your pass.`}
              />
            </PurchaseCardWrapper>
          </OptionWrapper>
        </PurchaseContainer>
      </SectionContainer>
    </Layout>
  )
}

export default Pricing

const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${above.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}
`

const OptionWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 60px;
    ${above.tablet`
      margin-top: 0;
    `}
  }
`

const PurchaseCardWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 40px;
  }
  width: 100%;
`

export const query = graphql`
  query {
    facebookShare: file(
      sourceInstanceName: { eq: "FacebookImages" }
      name: { eq: "pricing-share-image" }
    ) {
      publicURL
    }
  }
`
