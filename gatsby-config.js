require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Swarm Intelligence LLC`,
    siteTitleAlt: `Swarm Intelligence LLC`,
    siteHeadline: `Swarm Intelligence`,
    siteUrl: `https://swarmintelligence.llc`,
    siteDescription: `Future of business design, delegated and distributed with trust.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@swarmintelligencellc`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Swarm Intelligence LLC`,
        short_name: `Swarm Intelligence`,
        description: `Future of business design, delegated and distributed with trust.`,
        start_url: `/`,
        background_color: `#00043c`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#00043c`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
