import React from 'react'
import styled from 'styled-components'

import { SectionContainer } from '../../styles/Containers'
import BlogPostCard from './BlogPostCard'
import Layout from '../layout'

const BlogPost = ({ data }) => {
  const cards = data.allBlogPost.edges.map(post => {
    const title = post.node.title
    const author = post.node.author.name
    const image = post.node.imagePicker.url

    return (
      <BlogPostCard ke={title} title={title} author={author} image={image} />
    )
  })

  return (
    <Layout>
      <SectionContainer>{cards}</SectionContainer>
    </Layout>
  )
}

export default BlogPost
