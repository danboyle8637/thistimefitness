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
import BackTab from '../Nav/BackTab'
import SEO from '../seo'
import './blog-post.css'

const BlogPost = ({ data }) => {
  const postSlug = data.gcms.blogPost.slug
  const blogFeatureImage = data.gcms.blogPost.featureImage.url
  const blogTitle = data.gcms.blogPost.title
  const postDescription = data.gcms.blogPost.postDescription
  const authorName = data.gcms.blogPost.author.name
  const authorUrl = data.gcms.blogPost.author.avatar.url
  const body = data.gcms.blogPost.blogText.html

  return (
    <Layout>
      <SEO
        title={blogTitle}
        description={postDescription}
        image={blogFeatureImage}
        url={`https://thistimefitness.com/${postSlug}`}
        lang={'en-us'}
      />
      <BlogPageContainer>
        <BlogFeatureImageContainer>
          <img
            src={blogFeatureImage}
            style={{ margin: 0, padding: 0 }}
            alt={blogTitle}
          />
        </BlogFeatureImageContainer>
        <BlogContentWrapper>
          <BlogPostTitle>{blogTitle}</BlogPostTitle>
          <BlogAuthor name={authorName} url={authorUrl} />
          <BlogHTMLWrapper dangerouslySetInnerHTML={{ __html: body }} />
        </BlogContentWrapper>
        <BackTab path={'/blog'} />
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
        postDescription
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
