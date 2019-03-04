import React from 'react'
import styled from 'styled-components'

import { above } from '../../styles/Theme'

const TextHeader = ({ word, tagLine, fontSize, letterSpacing, purple }) => {
  const wordArray = word.split('')

  const pageTitle = wordArray.map((letter, index) => {
    return (
      <LetterStyle
        purple={purple}
        key={index}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
      >
        {letter}
      </LetterStyle>
    )
  })

  return (
    <TextHeaderContainer>
      <WordWrapper>{pageTitle}</WordWrapper>
      <TagLine purple={purple}>{tagLine}</TagLine>
    </TextHeaderContainer>
  )
}

export default TextHeader

const TextHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 80px;
  ${above.mobile`
    width: 60%;
  `}
  ${above.tablet`
    width: 50%;
  `}
`

const LetterStyle = styled.div`
  font-family: Montserrat;
  text-transform: uppercase;
  color: ${props => (props.purple ? '#1f1e2f' : '#21222b')};
  font-weight: 800;
  font-size: ${props => props.fontSize};
  letter-spacing: ${props => props.letterSpacing};
  line-height: 1;
`

const TagLine = styled.div`
  font-family: Montserrat;
  text-transform: uppercase;
  color: ${props => (props.purple ? '#1f1e2f' : '#21222b')};
  font-size: 18px;
`

const WordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
`
