require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `This Time Fitness`,
    description: `This Time Fitness is a West Ashley strength, weight loss, and fitness studio for women. Learn more, come in , and take control of your health now!`,
    url: 'https://thistimefitness.com',
    author: `Never Back Down`,
    app_id: '734625066685760',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `SpecialsImages`,
        path: `${__dirname}/src/images/Specials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `LegalCopy`,
        path: `${__dirname}/src/content/Legal`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Transformations`,
        path: `${__dirname}/src/images/Transformations`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: `GCMS`,
        fieldName: `gcms`,
        url: `${process.env.GRAPHCMS_ENDPOINT}`,
        headers: {
          Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `This Time Fitness`,
        short_name: `ttf`,
        start_url: `/`,
        background_color: `#2b2c3a`,
        theme_color: `#2b2c3a`,
        display: `minimal-ui`,
        icon: `src/images/ttf-icon.png`, // This path is relative to the root of the site.
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
