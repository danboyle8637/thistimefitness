import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { InnerBodyText } from '../../../styles/BodyText'
import {
  ButtonContainer,
  BodyTextContainer,
  HeadlineContainer,
  SectionContainer,
} from '../../../styles/Containers'
import { BaseSubhead } from '../../../styles/Headlines'
import { SiteButton } from '../../../styles/Buttons'
import TextHeader from '../../Shared/TextHeader'
import KindalSig from '../../../svgs/KindalSig'
import BigPricingCard from '../../Pricing/BigPricingCard'
import { above } from '../../../styles/Theme'

const ThankYouPage = () => {
  const query = graphql`
    query {
      summerThankYou: file(
        sourceInstanceName: { eq: "SummerSlimDownCopy" }
        name: { eq: "SummerThankYou" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            prehead
            headline
            book {
              childImageSharp {
                fluid(
                  jpegProgressive: true
                  maxWidth: 600
                  maxHeight: 500
                  quality: 90
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      gcms {
        asset(where: { id: "cjvn2i1dxh3qw0946o96ttjw4" }) {
          url
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const prehead = data.summerThankYou.childMarkdownRemark.frontmatter.prehead
  const headline = data.summerThankYou.childMarkdownRemark.frontmatter.headline
  const image =
    data.summerThankYou.childMarkdownRemark.frontmatter.book.childImageSharp
      .fluid
  const body = data.summerThankYou.childMarkdownRemark.html
  const switchUrl = data.gcms.asset.url

  const purchase8Classes =
    'https://thistimefitness.sites.zenplanner.com/registration.cfm?payment=MEMBERSHIP&MembershipTemplateId=C4DAD012-573D-49C0-9BB7-870053EB42FC&personId=99434575-5502-48EC-B39F-F203DD684C0D'
  const purchase12Classes =
    'https://thistimefitness.sites.zenplanner.com/registration.cfm?payment=MEMBERSHIP&MembershipTemplateId=0DFA204D-2B53-4FE4-AFC2-035056D23EFC&personId=052BAAC6-73AB-45A0-AD3A-5103A5EA0AA9'
  const purchaseUnlimited =
    'https://thistimefitness.sites.zenplanner.com/registration.cfm?payment=MEMBERSHIP&MembershipTemplateId=7F5CE37C-A83F-473E-8288-4D5D8C72611A&personId=C01D637A-304D-4F33-9811-614EB31CB791'

  return (
    <>
      <TextHeader
        word={`You're In!`}
        tagLine={'Summer Slim Down Challenge'}
        fontSize={'62px'}
        letterSpacing={'1.8px'}
      />
      <SectionContainer>
        <HeadlineContainer>
          <BaseSubhead thin>{prehead}</BaseSubhead>
          <BaseSubhead
            mobileLineHeight={'2.2'}
            tabletLineHeight={'2.4'}
            desktopLineHeight={'2.4'}
          >
            {headline}
          </BaseSubhead>
        </HeadlineContainer>
        <BodyTextContainer
          mMarginTop={'30px'}
          tMarginTop={'40px'}
          dMarginTop={'40px'}
          tabletWidth={'100%'}
          desktopWidth={'70%'}
        >
          <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
          <KindalSignature fill={'#2AD2E2'} />
          <BigPricingCard
            link={purchase8Classes}
            price={87}
            priceTitle={'8 Classes per Month'}
            priceDescription={`You're signing up for 2 months. 16 classes. Plus all the challenge extras. That's only $10.87 per class... an amazing deal.`}
          />
          <BigPricingCard
            link={purchase12Classes}
            price={127}
            priceTitle={'12 Classes per Month'}
            priceDescription={`You're signing up for 2 months. 24 classes. Plus all the challenge extras. That's only $10.58 per class... an amazing deal.`}
          />
          <BigPricingCard
            link={purchaseUnlimited}
            price={150}
            priceTitle={'Unlimited Classes'}
            priceDescription={`You're signing up for 2 months. Unlimited classes. Plus all the challenge extras. This is the full experience and the best deal!`}
          />
          <SwitchWrapper>
            <Image fluid={image} />
          </SwitchWrapper>
        </BodyTextContainer>
        <ButtonContainer
          mMarginTop={'30px'}
          tMarginTop={'40px'}
          dMarginTop={'40px'}
        >
          <SiteButton
            href={switchUrl}
            rel={'noopener noreferrer'}
            target={'_blank'}
          >
            Download Switch!
          </SiteButton>
        </ButtonContainer>
      </SectionContainer>
    </>
  )
}

export default ThankYouPage

const SwitchWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
`

const KindalSignature = styled(KindalSig)`
  margin-bottom: 20px;
  width: 120px;
  align-self: flex-end;
  ${above.mobile`
    width: 230px;
  `}
`
