/**
 * Configure your Gatsby site with this file.
 *
 *
 *
 *
 * spaceId: process.env.CONTENTFUL_SPACE_ID,
 * accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dt = new Date()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Full-Stack Dev",
    author: "Nazim",
    year: dt.getFullYear(),
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "5radnoeh3jp6",
        accessToken: "gSYeOqjWQ6d98-QvforMQNzvha3WYKVku_ZsfSPFHnk",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
