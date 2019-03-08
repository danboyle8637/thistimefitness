import React from 'react'
import styled from 'styled-components'

import { ButtonContainer } from '../../styles/Containers'
import { MainButton } from '../../styles/Buttons'

const ReviewsLink = () => {
  return (
    <ButtonContainer
      mMarginTop={'40px'}
      tMarginTop={'50px'}
      dMarginTop={'70px'}
    >
      <MainButton to={'/reviews'}>Read Reviews</MainButton>
    </ButtonContainer>
  )
}

export default ReviewsLink
