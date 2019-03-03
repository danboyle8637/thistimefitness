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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/components/Blog/BlogPost.js`)
    graphql(
      `
        {
          gcms {
            blogPosts {
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
