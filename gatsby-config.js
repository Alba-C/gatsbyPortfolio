module.exports = {
  siteMetadata: {
    title: 'Chris Albanese | Front End Developer ',
  },
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#283044',
        theme_color: '#283044',
        display: 'minimal-ui',
        icon: 'public/assets/CA-Logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
