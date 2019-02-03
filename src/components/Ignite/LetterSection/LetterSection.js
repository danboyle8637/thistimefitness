import React from 'react'

import LetterHeadline from './LetterHeadline'
import Letter from './Letter'

const LetterSection = ({ copy, images }) => {
  const letterPart1 = copy.edges.find(part1 => {
    const id = part1.node.childMarkdownRemark.frontmatter.id
    return id === 'letter_part_one'
  })

  const letterPart2 = copy.edges.find(part2 => {
    const id = part2.node.childMarkdownRemark.frontmatter.id
    return id === 'letter_part_two'
  })

  const kindal = images.igniteKindal.childImageSharp.fluid

  return (
    <>
      <LetterHeadline />
      <Letter part1={letterPart1} part2={letterPart2} kindal={kindal} />
    </>
  )
}

export default LetterSection
