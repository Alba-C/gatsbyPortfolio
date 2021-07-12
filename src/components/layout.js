import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/react'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div
        css={css`
          font-family: 'Montserrat', sans-serif;
        `}
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Portfolio of Chris Albanese' },
            { name: 'robots', content: 'follow' },
            { name: 'robots', content: 'index' },
            { name: 'googlebot', content: 'follow' },
            { name: 'charset', content: 'utf-8' },
          ]}
        >
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Audiowide|Montserrat|Poller+One"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Audiowide|Montserrat|Poller+One"
          />

          <html lang="en" />
        </Helmet>
        <Header />
        <main
          id="top"
          css={css`
            margin: 0 auto;
            padding-top: 0;
            h1,
            h2,
            h3 {
              font-family: 'Poller One';
            }
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
