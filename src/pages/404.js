import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/react'
import { withPrefix } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <section
      css={css`
        background-color: #f1f7ed;
        background: -webkit-radial-gradient(bottom, red, yellow, green);
        background: radial-gradient(at bottom, black, #3a3838);
        color: rgb(255, 230, 0);
        height: 83vh;
        padding: 50px;
        text-align: center;
        a {
          color: yellow;
        }
      `}
    >
      <h1>Houston! We have a problem.</h1>
      <h2>You looked for a page that doesn't exist.</h2>
      <a href="/">return home</a>
      <br />

      <img
        src={withPrefix('assets/images/spaceMan.png')}
        alt=""
        css={css`
          margin: 0 auto;
        `}
      />
    </section>
  </Layout>
)

export default NotFoundPage
