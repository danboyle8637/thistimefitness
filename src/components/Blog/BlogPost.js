import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import {
  BlogPageContainer,
  BlogFeatureImageContainer,
  BlogContentWrapper,
  BlogPostTitle,
  BlogHTMLWrapper,
} from '../../styles/BlogStyles'
import BlogAuthor from './BlogAuthor'
import './blog-post.css'

const BlogPost = ({ data }) => {
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
          <BlogAuthor name={authorName} url={authorUrl} />
          <BlogHTMLWrapper dangerouslySetInnerHTML={{ __html: body }} />
        </BlogContentWrapper>
      </BlogPageContainer>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($id: ID!) {
    gcms {
      blogPost(where: { id: $id }) {
        id
        slug
        title
        postTags
        author {
          name
          avatar {
            url
          }
        }
        featureImage {
          url
        }
        blogText {
          html
        }
      }
    }
  }
`
