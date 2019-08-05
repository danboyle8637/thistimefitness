import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import { InnerBodyText } from '../../../styles/BodyText'
import FallLeaf1 from '../../../svgs/FallLeaf1'
import FallLeaf2 from '../../../svgs/FallLeaf2'
import FallLeaf3 from '../../../svgs/FallLeaf3'
import { above } from '../../../styles/Theme'
import KindalSig from '../../../svgs/KindalSig'

const Letter = ({ part1, part2, kindal }) => {
  const body1 = part1.node.childMarkdownRemark.html
  const body2 = part2.node.childMarkdownRemark.html

  return (
    <>
      <Part1Wrapper>
        <InnerBodyText note dangerouslySetInnerHTML={{ __html: body1 }} />
      </Part1Wrapper>
      <Part2Wrapper>
        <ImageWrapper>
          <KindalPic fluid={kindal} />
        </ImageWrapper>
        <InnerBodyText note dangerouslySetInnerHTML={{ __html: body2 }} />
        <Signature fill={'#2b2c3a'} />
        <Leaf1 />
        <Leaf2 />
        <Leaf3 />
      </Part2Wrapper>
    </>
  )
}

export default Letter

const Part1Wrapper = styled.div`
  margin-top: 20px;
  background: #f8f8f8;
  width: 76%;
  border-radius: 4px;
  padding: 30px 16px 0px 16px;
  box-shadow: 2px 4px 18px rgba(0, 0, 0, 0.3);
  transform: rotate(3deg);
  ${above.mobile`
    width: 60%;
  `}
  ${above.tablet`
    width: 40%;
  `}
`

const Part2Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background: #f8f8f8;
  width: 76%;
  border-radius: 4px;
  padding: 30px 16px 0px 16px;
  box-shadow: 2px 4px 18px rgba(0, 0, 0, 0.3);
  transform: translate(46px, -40px) rotate(4deg);
  ${above.mobile`
    width: 60%;
  `}
  ${above.tablet`
    width: 40%;
  `}
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-94%, 0);
  z-index: 1;
`

const KindalPic = styled(Image)`
  width: 180px;
  border-radius: 50%;
  box-shadow: 2px 4px 18px rgba(0, 0, 0, 0.3);
  ${above.tablet`
    width: 240px;
  `}
`

const Signature = styled(KindalSig)`
  align-self: flex-end;
  margin: 10px 30px;
  width: 100px;
  ${above.mobile`
    margin: 20px 30px;
    width: 140px;
  `}
`

const Leaf1 = styled(FallLeaf1)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  transform: translate(26px, -80px);
  z-index: 2;
`

const Leaf2 = styled(FallLeaf2)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  transform: translate(12px, 20px) rotate(24deg);
  z-index: 2;
`

const Leaf3 = styled(FallLeaf3)`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 60px;
  transform: translate(-70px, -10px) rotate(-24deg);
  z-index: 2;
  ${above.tablet`
    transform: translate(20px, -10px) rotate(-24deg);
  `}
`
