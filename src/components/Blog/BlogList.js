import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { SectionContainer } from '../../styles/Containers'
import BlogPostCard from '../Blog/BlogPostCard'
import { above } from '../../styles/Theme'
import TextHeader from '../Shared/TextHeader'
import Layout from '../layout'
import BlogPagination from './BlogPagination'
import { siteConfig } from '../../helpers/siteConfig'
import SEO from '../seo'

const BlogList = ({ data, pageContext }) => {
  const cards = data.gcms.blogPosts.map(post => {
    const id = post.id
    const title = post.title
    const author = post.author.name
    const image = post.featureImage.url
    const slug = post.slug
    const postTags = post.postTags

    return (
      <BlogPostCard
        key={id}
        title={title}
        author={author}
        image={image}
        slug={slug}
        postTags={postTags}
      />
    )
  })

  return (
    <Layout>
      <SEO
        title={siteConfig.blog.title}
        description={siteConfig.blog.description}
        image={data.facebookShare.publicURL}
        url={siteConfig.blog.url}
        keywords={siteConfig.blog.keywords}
        lang={siteConfig.blog.lang}
      />
      <TextHeader
        word={'blog'}
        tagLine={'Success Secrets | Case Studies'}
        fontSize={'90px'}
        letterSpacing={'1.6px'}
      />
      <SectionContainer>
        <BlogPostContainer>{cards}</BlogPostContainer>
        <BlogPagination
          hasPrevPage={pageContext.hasPrevPage}
          hasNextPage={pageContext.hasNextPage}
          nextPageLink={pageContext.nextPageLink}
          prevPageLink={pageContext.prevPageLink}
          pageNumber={pageContext.pageNumber}
        />
      </SectionContainer>
    </Layout>
  )
}

export default BlogList

const BlogPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  ${above.tablet`
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: 1fr 1fr;
    gap: 20px;
  `}
`

export const query = graphql`
  query allBlogPostsQuery($first: Int!, $skip: Int!) {
    gcms {
      blogPosts(first: $first, skip: $skip, orderBy: published_DESC) {
        id
        title
        slug
        postTags
        author {
          name
        }
        featureImage {
          url
        }
      }
    }
    facebookShare: file(
      sourceInstanceName: { eq: "FacebookImages" }
      name: { eq: "blog-share-image" }
    ) {
      publicURL
    }
  }
`
