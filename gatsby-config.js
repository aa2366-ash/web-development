module.exports = {
  siteMetadata: {
    title: "Getting started with web development",
    subtitle: "web development",
    description:
      "With our web development courses, go from no prior coding knowledge to crafting your own websites using HTML, CSS, JavaScript, and Node.js.",
    keywords: ["guvi", "zen", "zen class", "full stack development"]
  },
  pathPrefix: "/web-development",
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
