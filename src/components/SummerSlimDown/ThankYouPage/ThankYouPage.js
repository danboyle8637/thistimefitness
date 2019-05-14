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

  return (
    <>
      <TextHeader
        word={`You're In!`}
        tagLine={'Summer Slim Down Early Bird'}
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
  width: 120px;
  align-self: flex-end;
  ${above.mobile`
    width: 230px;
  `}
`
