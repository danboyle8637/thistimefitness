/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// This makes the .env variables available in this file.
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve(`./src/components/Blog/BlogPost.js`)
//     resolve(
//       graphql(
//         `
//           {
//             gcms {
//               blogPosts {
//                 slug
//               }
//             }
//           }
//         `
//       )
//     ).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }

//       //Create pages for each post
//       result.data.gcms.blogPosts.forEach(post => {
//         const path = post.slug
//         createPage({
//           path,
//           component: blogPost,
//           context: {
//             path,
//           },
//         })
//       })
//       resolve()
//     })
//   })
// }
