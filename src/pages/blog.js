import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { SectionContainer } from '../styles/Containers'
import BlogPostCard from '../components/Blog/BlogPostCard'
import TextHeader from '../components/Shared/TextHeader'
import Layout from '../components/layout'
import { above } from '../styles/Theme'

const Blog = ({ data }) => {
  const cards = data.gcms.blogPosts.map(post => {
    const id = post.id
    const title = post.title
    const author = post.author.name
    const image = post.featureImage.url
    const postTags = post.postTags

    return (
      <BlogPostCard
        key={id}
        title={title}
        author={author}
        image={image}
        postTags={postTags}
      />
    )
  })

  return (
    <Layout>
      <TextHeader
        word={'blog'}
        tagLine={'Success Secrets | Case Studies'}
        fontSize={'90px'}
        letterSpacing={'1.6px'}
      />
      <SectionContainer>
        <BlogPostContainer>{cards}</BlogPostContainer>
      </SectionContainer>
    </Layout>
  )
}

export default Blog

const BlogPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  ${above.tablet`
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
  `}
`

export const query = graphql`
  query {
    gcms {
      blogPosts {
        id
        title
        postTags
        author {
          name
        }
        featureImage {
          url
        }
      }
    }
  }
`
