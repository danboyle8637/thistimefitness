import React from 'react'
import styled from 'styled-components'

import { MainButton } from '../../styles/Buttons'
import { ButtonContainer, HeadlineContainer } from '../../styles/Containers'
import { above } from '../../styles/Theme'

const BlogPostCard = ({ title, author, image, slug, postTags }) => {
  const tags = postTags.map((tag, index) => (
    <BlogPostTag key={index}>{tag}</BlogPostTag>
  ))

  return (
    <BlogCardContainer>
      <FeatureImageWrapper src={image} />
      <BlogContentWrapper>
        <HeadlineContainer
          left
          mMarginTop={'10px'}
          tMarginTop={'14px'}
          tabletWidth={'100%'}
          desktopWidth={'100%'}
        >
          <BlogPostTitle>{title}</BlogPostTitle>
        </HeadlineContainer>
        <BlogPostTagWrapper>{tags}</BlogPostTagWrapper>
        <HorizontalLine />
        <BlogPostAuthor>By {author}</BlogPostAuthor>
        <ButtonContainer
          mMarginTop={'14px'}
          tMarginTop={'18px'}
          tabletWidth={'100%'}
        >
          <MainButton to={`/blog/${slug}`}>Read Post</MainButton>
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
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  &:not(:first-child) {
    margin-top: 76px;
  }
  ${above.tablet`
    &:not(:first-child) {
    margin-top: 0;
  }
  `}
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
  line-height: 1.2em;
  ${above.tablet`
    font-size: 22px;
  `}
`

const BlogPostTag = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: #9193b3;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  &:not(:first-child) {
    margin-left: 5px;
  }
`

const BlogPostTagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  letter-spacing: 1.4px;
`
