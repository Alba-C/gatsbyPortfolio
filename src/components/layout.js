import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'emotion'

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
    render={data => (
      <div
        className={css`
          // background-image: url('/static/assets/dark_exa.png');
          // background-repeat: repeat;
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
            // { name: 'viewport', content: '320' },
            { name: 'charset', content: 'utf-8' },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Audiowide|Carter+One|Montserrat|Poller+One"
            rel="stylesheet"
          />
          
          <html lang="en" />
        </Helmet>
        <Header />
        <main
          id="top"
          className={css`
            margin: 0 auto;
            // max-width: 1200px;
            padding-top: 0;
            /* font-family: 'Montserrat', sans-serif; */
            // box-shadow: 0px 2px 14px 10px rgba(20, 20, 20, 0.1);
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
