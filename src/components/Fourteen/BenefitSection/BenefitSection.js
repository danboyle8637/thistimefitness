import React, { Component } from 'react'
import styled from 'styled-components'

import Image from '../../Shared/Image'
import BenefitCard from '../../Shared/BenefitCard'
import { above } from '../../../styles/Theme'

class BenefitSection extends Component {
  state = {
    jessFlex: {},
    groupFlex: {},
  }

  componentDidMount() {
    const {
      mobileJessFlex,
      tabletJessFlex,
      desktopJessFlex,
      mobileGroupFlex,
      tabletGroupFlex,
      desktopGroupFlex,
    } = this.props
    const screenWidth = window.innerWidth
    if (screenWidth >= 1240) {
      this.setState({
        jessFlex: desktopJessFlex.childImageSharp.fluid,
        groupFlex: desktopGroupFlex.childImageSharp.fluid,
      })
    }
    if (screenWidth > 600 && screenWidth < 1240) {
      this.setState({
        jessFlex: tabletJessFlex.childImageSharp.fluid,
        groupFlex: tabletGroupFlex.childImageSharp.fluid,
      })
    }
    if (screenWidth <= 600) {
      this.setState({
        jessFlex: mobileJessFlex.childImageSharp.fluid,
        groupFlex: mobileGroupFlex.childImageSharp.fluid,
      })
    }
  }

  renderBenefits = () => {
    const { copy } = this.props

    const benefits = copy.edges
      .filter(benefit => {
        const id = benefit.node.childMarkdownRemark.frontmatter.id
        return (
          id !== 'fourteen-quiz-call-to-action' && id !== 'fourteen-thank-you'
        )
      })
      .map(benefit => {
        const headline = benefit.node.childMarkdownRemark.frontmatter.headline
        const id = benefit.node.childMarkdownRemark.frontmatter.id
        const body = benefit.node.childMarkdownRemark.html
        return <BenefitCard key={id} headline={headline} body={body} />
      })

    return benefits
  }

  render() {
    return (
      <BenefitContainer>
        <Image
          image={this.state.jessFlex}
          imageTitle={'Jessica flexing and having fun'}
          imageAlt={'Jessica flexing and having fun'}
          top={'topBlue'}
          bottom={'bottomPurple'}
        />
        <BenefitsWrapper>{this.renderBenefits()}</BenefitsWrapper>
        <Image
          image={this.state.groupFlex}
          imageTitle={'A group flexing and showing their results'}
          imageAlt={'A group flexing and showing their results'}
          top={'topPurple'}
          bottom={'bottomBlue'}
        />
      </BenefitContainer>
    )
  }
}

export default BenefitSection

const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.secondaryBackground};
  width: 100%;
`

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin: 20px 0;
  padding: 0 20px;
  width: 100%;
  ${above.mobile`
    width: 60%;
    margin: 40px 0;
  `}
  ${above.tablet`
    flex-direction: row;
    align-items: flex-start;
    width: 90%;
    margin: 120px 0;
  `}
`
