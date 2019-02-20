import React from 'react'
import styled from 'styled-components'

import { MainButton } from '../../styles/Buttons'
import { ButtonContainer, HeadlineContainer } from '../../styles/Containers'

const BlogPostCard = ({ title, author, image }) => {
  return (
    <BlogCardContainer>
      <FeatureImageWrapper src={image} />
      <BlogContentWrapper>
        <HeadlineContainer left mMarginTop={'10px'}>
          <BlogPostTitle>{title}</BlogPostTitle>
        </HeadlineContainer>
        <HorizontalLine />
        <BlogPostAuthor>By {author}</BlogPostAuthor>
        <ButtonContainer mMarginTop={'20px'}>
          <MainButton to={'/'}>Read Post</MainButton>
        </ButtonContainer>
      </BlogContentWrapper>
    </BlogCardContainer>
  )
}

export default BlogPostCard

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f8f8f8;
  border-radius: 0 0 4px 4px;
`

const BlogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`

const FeatureImageWrapper = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
`

const BlogPostTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 800;
  color: #494b64;
  line-height: 1.4em;
`

const HorizontalLine = styled.div`
  margin-top: 26px;
  width: 100%;
  border-top: 1px solid #e1e1e1;
`

const BlogPostAuthor = styled.p`
  margin: 0;
  margin-top: 8px;
  padding: 0;
  align-self: flex-end;
  color: #80829f;
  text-transform: uppercase;
  letter-spacing: 1.4;
`
