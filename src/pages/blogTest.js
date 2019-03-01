import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import {
  BlogPageContainer,
  BlogFeatureImageContainer,
  BlogContentWrapper,
  BlogPostTitle,
  BlogAuthorWrapper,
  BlogAuthorImage,
  BlogAuthorName,
  BlogHTMLWrapper,
} from '../styles/BlogStyles'

const BlogByLine = ({ url, name }) => {
  return (
    <BlogAuthorWrapper>
      <BlogAuthorImage src={url} />
      <BlogAuthorName>by {name}</BlogAuthorName>
    </BlogAuthorWrapper>
  )
}

const BlogTest = ({ data }) => {
  const blogFeatureImage = data.gcms.blogPost.featureImage.url
  const blogTitle = data.gcms.blogPost.title
  const authorName = data.gcms.blogPost.author.name
  const authorUrl = data.gcms.blogPost.author.avatar.url
  const body = data.gcms.blogPost.blogText.html

  return (
    <Layout>
      <BlogPageContainer>
        <BlogFeatureImageContainer>
          <img src={blogFeatureImage} style={{ margin: 0, padding: 0 }} />
        </BlogFeatureImageContainer>
        <BlogContentWrapper>
          <BlogPostTitle>{blogTitle}</BlogPostTitle>
          <BlogByLine name={authorName} url={authorUrl} />
          <BlogHTMLWrapper dangerouslySetInnerHTML={{ __html: body }} />
        </BlogContentWrapper>
      </BlogPageContainer>
    </Layout>
  )
}

export default BlogTest

export const query = graphql`
  query {
    gcms {
      blogPost(where: { id: "cjsnjaxufx1sm0947utc2r54p" }) {
        title
        postTags
        featureImage {
          url
        }
        blogText {
          html
        }
        author {
          name
          avatar {
            url
          }
        }
      }
    }
  }
`
