/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "Some Description",
    author: "Jon doe",
    data: ["item 1", "item 2"],
    person: { name: "Peter", age: 32 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `g7k2cu4n39oi`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "zVF6ZvhJWCupndZz7NQ37EZIhfyilIxX_KrkN0kNYfM",
      },
    },
  ],
}
