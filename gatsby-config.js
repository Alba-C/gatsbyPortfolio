module.exports = {
  siteMetadata: {
    title: 'Chris Albanese | Front End Developer ',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Christopher Albanese | Front End Developer',
        short_name: 'Albanese Portfolio',
        start_url: '/',
        background_color: '#283044',
        theme_color: '#283044',
        display: 'minimal-ui',
        icon: 'src/images/CA-Logo.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-127667741-1',
    //     // Puts tracking script in the head instead of the body
    //     head: true,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ['/preview/**', '/do-not-track/me/too/'],
    //     // Enables Google Optimize using your container Id
    //     // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Any additional create only fields (optional)
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     // cookieDomain: 'ChristopherAlbanese.com',
    //   },
    // },

    'gatsby-plugin-offline',
  ],
}
 