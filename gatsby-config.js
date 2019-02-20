require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `This Time Fitness`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `This Time Fitness`,
    social: {
      instagram: '@thistimefitness',
      facebook: '@thistimefitness',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Home`,
        path: `${__dirname}/src/images/Home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Fourteen`,
        path: `${__dirname}/src/images/Fourteen`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `FourteenCopy`,
        path: `${__dirname}/src/content/Fourteen`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `FAQ`,
        path: `${__dirname}/src/content/Faq`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `AboutImages`,
        path: `${__dirname}/src/images/About`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `AboutCopy`,
        path: `${__dirname}/src/content/About`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `IgniteImages`,
        path: `${__dirname}/src/images/Ignite`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `IgniteCopy`,
        path: `${__dirname}/src/content/Ignite`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ClassesImages`,
        path: `${__dirname}/src/images/Classes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ClassesCopy`,
        path: `${__dirname}/src/content/Classes`,
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `${process.env.GRAPHCMS_ENDPOINT}`,
        token: `${process.env.GRAPHCMS_TOKEN}`,
        query: `{
          blogPosts {
            id
            title
            author {
              name
            }
            published
            imagePicker {
              url
            }
            blogContent
            postTags
            slug
          }
        }
        `,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: { pure: true },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
