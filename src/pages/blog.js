import React from 'react'
import { graphql } from 'gatsby'

import { SectionContainer } from '../styles/Containers'
import BlogPostCard from '../components/Blog/BlogPostCard'
import TextHeader from '../components/Shared/TextHeader'
import Layout from '../components/layout'

const Blog = ({ data }) => {
  const cards = data.gcms.blogPosts.map(post => {
    // const id = post.node.id
    const title = post.title
    const author = post.author.name
    const image = post.featureImage.url
    const postTags = post.postTags

    return (
      <>
        <BlogPostCard
          key={1}
          title={title}
          author={author}
          image={image}
          postTags={postTags}
        />
        <BlogPostCard
          key={2}
          title={title}
          author={author}
          image={image}
          postTags={postTags}
        />
        <BlogPostCard
          key={3}
          title={title}
          author={author}
          image={image}
          postTags={postTags}
        />
        <BlogPostCard
          key={4}
          title={title}
          author={author}
          image={image}
          postTags={postTags}
        />
        <BlogPostCard
          key={5}
          title={title}
          author={author}
          image={image}
          postTags={postTags}
        />
        <BlogPostCard
          key={6}
          title={title}
          author={author}
          image={image}
          postTags={postTags}
        />
      </>
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
      <SectionContainer>{cards}</SectionContainer>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    gcms {
      blogPosts {
        id
        slug
        title
        author {
          name
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
