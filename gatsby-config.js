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

    'gatsby-plugin-offline',

    {
      resolve: 'gatsby-plugin-offline',
      options: {
        importWorkboxFrom: `local`,
        globDirectory: rootDir,
        globPatterns,
        modifyUrlPrefix: {
          rootDir: ``,
          // If `pathPrefix` is configured by user, we should replace
          // the default prefix with `pathPrefix`.
          '': args.pathPrefix || ``,
        },
        navigateFallback: `/offline-plugin-app-shell-fallback/index.html`,
        // Only match URLs without extensions or the query `no-cache=1`.
        // So example.com/about/ will pass but
        // example.com/about/?no-cache=1 and
        // example.com/cheeseburger.jpg will not.
        // We only want the service worker to handle our "clean"
        // URLs and not any files hosted on the site.
        //
        // Regex based on http://stackoverflow.com/a/18017805
        navigateFallbackWhitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
        navigateFallbackBlacklist: [/\?(.+&)?no-cache=1$/],
        cacheId: `gatsby-plugin-offline`,
        // Don't cache-bust JS files and anything in the static directory
        dontCacheBustUrlsMatching: /(.*js$|\/static\/)/,
        runtimeCaching: [
          {
            // Add runtime caching of various page resources.
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
  ],
}
