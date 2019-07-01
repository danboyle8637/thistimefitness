/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// This makes the .env variables available in this file.
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

const path = require(`path`)

// This creates blog pages based on the number of total blog posts.
// Currently I have 6 blog posts showing up per page.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPage = path.resolve(
      `${__dirname}/src/components/Blog/BlogList.js`
    )
    const blogPost = path.resolve(
      `${__dirname}/src/components/Blog/BlogPost.js`
    )
    graphql(
      `
        {
          gcms {
            blogPosts(orderBy: published_DESC) {
              id
              slug
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      //Create pages based on posts per page.
      const posts = result.data.gcms.blogPosts
      const postsPerPage = 6
      const numberOfPages = Math.ceil(posts.length / postsPerPage)
      Array.from({ length: numberOfPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: blogPage,
          context: {
            first: postsPerPage,
            skip: i * postsPerPage,
            pageNumber: i + 1,
            hasNextPage: i + 1 < posts.length / postsPerPage,
            hasPrevPage: posts.length / postsPerPage - (i + 1) < i,
            nextPageLink: `/blog/${i + 2}`,
            prevPageLink: i === 0 || 1 ? `/blog` : `/blog/${i}`,
          },
        })
      })

      //Create pages for each post
      result.data.gcms.blogPosts.forEach(post => {
        const slug = `/blog/${post.slug}`
        const id = post.id
        createPage({
          path: slug,
          component: blogPost,
          context: {
            slug,
            id,
          },
        })
      })
      resolve()
    })
  })
}

// For the moment, tells Webpack to ignore the ThrowPropsPlugin file.
// Will take this out and retst building becuase I updated GSAP
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /ThrowPropsPlugin/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
