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
        name: 'Christopher Albanese | Front End Developer',
        short_name: 'Albanese Portfolio',
        start_url: '/',
        background_color: '#283044',
        theme_color: '#283044',
        display: 'minimal-ui',
        icon: 'public/icons/icon-144x144.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
