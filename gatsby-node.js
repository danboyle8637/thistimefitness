/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// You can delete this file if you're not using it

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPost = path.resolve(`./src/components/Blog/BlogPost.js`)
//   return graphql(
//     `
//       {
//         allPost {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//     // Create blog posts pages.
//     const posts = result.data.allPost.edges

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node
//       createPage({
//         path: post.node.slug,
//         component: blogPost,
//         context: {
//           slug: post.node.slug,
//           previous,
//           next,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
